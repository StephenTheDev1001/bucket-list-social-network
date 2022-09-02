import { useReducer, useContext } from "react"
import listItemReducer from "./listItemReducer"
import ListItemContext from "./listItemContext"

// custom hook to use list item context
export const useListItem = () => {
  const { state, dispatch } = useContext(ListItemContext)
  return [state, dispatch]
}

// ListItemState Provider Component

const ListItemState = (props) => {
  const initialState = {
    listItems: [],
    current: null,
    error: null
  }

  const [state, dispatch] = useReducer(listItemReducer, initialState)

  return (
    <ListItemContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </ListItemContext.Provider>
  )
}

export default ListItemState