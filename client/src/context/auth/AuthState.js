import { useReducer, useContext, useEffect } from "react"
import setAuthToken from "../../utils/setAuthToken"
import { loadUser } from "./authActions"
import AuthContext from "./authContext"
import authReducer from './authReducer'


// custom hook to use auth context
export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext)
  return [state, dispatch]
}

// AuthState Provider Component

const AuthState = (props) => {
  const initalState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initalState)

  // set token on inital app loading
  setAuthToken(state.token)

  // load user on inital app loading
  if (state.loading) {
    loadUser(dispatch)
  }

  // watch state.token and set headers on change
  useEffect(() => {
    setAuthToken(state.token)
  }, [state.token])

  return (
    <AuthContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
