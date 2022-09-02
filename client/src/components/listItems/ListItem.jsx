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

  const onChange = (e) => {
    updateListItem(listItemDispatch, { ...listItem, completed: e.target.checked })
    console.log(e.target.checked)
  }

  // dynamic line-through style
  const completionStyle = completed ? { textDecoration: "line-through" } : {}
  return (
    <div className="flex" key={_id} onChange={onChange}>
      <input type="checkbox" checked={completed} />
      <h3 style={completionStyle} className=''>{content}</h3>

    </div>
  )
}


export default ListItem