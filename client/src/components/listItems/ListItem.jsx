import { useState } from "react"
import { useListItem } from "../../context/listItem/ListItemState"
import {
  deleteListItem,
  updateListItem
} from "../../context/listItem/listItemActions"

const ListItem = ({ listItem }) => {

  const [listItemState, listItemDispatch] = useListItem()

  const { _id, content, completed } = listItem

  const onDelete = () => {
    deleteListItem(listItemDispatch, _id)

  }

  // Updates listItem "completed" boolean
  const onChange = (e) => {
    updateListItem(listItemDispatch, { ...listItem, completed: e.target.checked })
  }

  // dynamic line-through style
  const completionStyle = completed ? { textDecoration: "line-through" } : {}
  return (
    <div className="flex p-2 m-1 items-center" key={_id} >
      <input type="checkbox" onChange={onChange} checked={completed} className='p-2' />
      <h3 style={completionStyle} className='p-2'>{content}</h3>
      <button onClick={onDelete} className='p-2 ml-auto border border-black rounded-md'>Delete</button>
    </div>
  )
}


export default ListItem