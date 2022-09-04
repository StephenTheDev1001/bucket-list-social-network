import axios from 'axios'
import {
  ADD_LISTITEM,
  LISTITEM_ERROR,
  DELETE_LISTITEM,
  GET_LISTITEMS,
  CLEAR_LISTITEMS,
  CLEAR_CURRENT,
  UPDATE_LISTITEM,
} from '../types'


export const addListItem = async (dispatch, listItem) => {
  try {
    const res = await axios.post('/api/listItems', listItem)
    dispatch({ type: ADD_LISTITEM, payload: res.data })
  } catch (err) {
    dispatch({ type: LISTITEM_ERROR, payload: err.response.data.msg })
  }
}

export const getListItems = async (dispatch) => {
  try {
    const res = await axios.get('/api/listItems')
    dispatch({ type: GET_LISTITEMS, payload: res.data })
  } catch (err) {
    dispatch({ type: LISTITEM_ERROR, payload: err.response.data.msg })
  }
}

// delete list item
export const deleteListItem = async (dispatch, id) => {
  try {
    await axios.delete(`/api/listItems/${id}`)
    dispatch({ type: DELETE_LISTITEM, payload: id })
  } catch (err) {
    dispatch({ type: LISTITEM_ERROR, payload: err.response.data.msg })
  }
}

// Update list item
export const updateListItem = async (dispatch, listItem) => {
  try {
    const res = await axios.put(`/api/listItems/${listItem._id}`, listItem)

    dispatch({
      type: UPDATE_LISTITEM,
      payload: res.data
    })

  } catch (err) {

  }
}

export const clearCurrent = (dispatch) => {
  dispatch({ type: CLEAR_CURRENT })
}

export const clearListItems = (dispatch) => {
  dispatch({ type: CLEAR_LISTITEMS })
}