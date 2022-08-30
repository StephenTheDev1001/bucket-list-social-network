import { useReducer, useContext, useEffect } from "react"
import axios from "axios"
import authReducer from "./AuthReducer"
import AuthContext from "./authContext"
import setAuthToken from "../../utils/setAuthToken"
import { loadUser } from "./authActions"

// custom hook for AuthState
export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext)
  return [state, dispatch]
}

// AuthState provider component
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // set token on inital app loading
  setAuthToken(state.token)

  // load user on first run or refresh
  if (state.loading) {
    loadUser(dispatch)
  }

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState