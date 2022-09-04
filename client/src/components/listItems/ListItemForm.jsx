import { useState, useEffect } from 'react'
import { addListItem } from '../../context/listItem/listItemActions'
import { useListItem } from '../../context/listItem/ListItemState'

const ListItemForm = () => {
  const [content, setContent] = useState('')

  // only list item dispatch is needed
  const listItemDispatch = useListItem()[1]

  const onSubmit = (e) => {
    e.preventDefault()
    addListItem(listItemDispatch, { content })
  }

  const onChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Before I die I want to..' onChange={onChange} className='border border-black rounded-md p-2 m-1' />
      <input type="submit" value="Add" className='border border-black rounded-md p-2 m-1' />
    </form>
  )
}
export default ListItemForm