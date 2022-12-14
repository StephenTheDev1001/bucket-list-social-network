import { useListItem } from "../../context/listItem/ListItemState"
import {
  deleteListItem,
  updateListItem
} from "../../context/listItem/listItemActions"

const ListItem = ({ listItem, authenticated }) => {

  const listItemDispatch = useListItem()[1]

  const { _id, content, completed } = listItem

  const onDelete = () => {
    deleteListItem(listItemDispatch, _id)
  }

  // Updates listItem "completed" boolean
  const onChange = (e) => {
    updateListItem(listItemDispatch, { ...listItem, completed: e.target.checked })
  }

  // input field or dash
  const marker = authenticated ? (
    <input type="checkbox" onChange={onChange} checked={completed} className='p-2' />
  ) : (
    <h3>-</h3>
  )

  // dynamic line-through style
  const completionStyle = completed ? { textDecoration: "line-through" } : {}
  return (
    <li className="flex p-2 m-1 items-center max-w-screen-sm" key={_id} >
      {marker}
      <div className="content">
        <h3 style={completionStyle} className='p-2'>{content}</h3>
      </div>
      {authenticated && <button onClick={onDelete} className='ml-auto text-white bg-danger hover:bg-secondary rounded-md p-2 m-1'>Delete</button>}
    </li>
  )
}


export default ListItem