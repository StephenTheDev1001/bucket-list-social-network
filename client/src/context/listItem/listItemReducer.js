import {
  ADD_LISTITEM,
  LISTITEM_ERROR,
  DELETE_LISTITEM,
  GET_LISTITEMS,
  CLEAR_LISTITEMS,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_LISTITEM,
} from '../types'

const listItemReducer = (state, action) => {
  switch (action.type) {
    case GET_LISTITEMS:
      return {
        ...state,
        listItems: action.payload
      }
    case ADD_LISTITEM:
      return {
        ...state,
        listItems: [action.payload, ...state.listItems]
      }
    case UPDATE_LISTITEM:
      return {
        ...state,
        listItems: state.listItems.map(listItem => listItem._id === action.payload._id ? action.payload : listItem)
      }
    case DELETE_LISTITEM:
      return {
        ...state,
        listItems: state.listItems.filter(listItem => listItem._id !== action.payload)
      }
    case LISTITEM_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_LISTITEMS:
      return {
        ...state,
        listItems: [],
        error: null,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    default:
      return state
  }
}

export default listItemReducer