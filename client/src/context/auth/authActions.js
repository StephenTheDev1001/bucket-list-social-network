import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

// Load User
export const loadUser = async (dispatch) => {
  try {
    const res = await axios.get('/api/auth')

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({ type: AUTH_ERROR })
  }
}

// Register User
export const register = async (dispatch, formData) => {
  try {
    const res = await axios.post('/api/users', formData)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    });
  }
}

// Login User
export const login = async (dispatch, formData) => {
  try {
    const res = await axios.post('/api/auth', formData)
    setAuthToken(res.data.token)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    loadUser(dispatch)
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    })
  }
}