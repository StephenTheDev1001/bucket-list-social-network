import { useEffect } from 'react'
import ListItem from './ListItem'
import { useListItem } from '../../context/listItem/ListItemState'
import { getListItems } from '../../context/listItem/listItemActions'

const List = (props) => {
  const [listItemState, listItemDispatch] = useListItem()

  // destructuring
  const { listItems } = listItemState

  useEffect(() => {
    getListItems(listItemDispatch)
  }, [listItemDispatch])



  return (
    <>
      {listItems.map(listItem => {
        return <ListItem authenticated={true} key={listItem && listItem._id} listItem={listItem} />
      })}
    </>
  )
}
export default List