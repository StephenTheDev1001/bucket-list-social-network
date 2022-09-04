import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import ListItem from '../listItems/ListItem'
import MeetNew from '../meetNew/MeetNew'

const User = () => {
  const [userInfo, setUserInfo] = useState({})
  const [listItems, setListItems] = useState([])
  const { id } = useParams()

  // get user info
  useEffect(() => async () => {
    try {
      const res = await axios.get(`/api/users/${id}`)
      const res2 = await axios.get(`/api/listItems/${id}`)
      setUserInfo(res.data)
      setListItems(res2.data)
    } catch (err) {
      console.error(err)
    }
  }, [userInfo, listItems])


  return (
    <section className='flex flex-col items-center'>
      <h1 className='text-3xl'>{userInfo.name}'s Bucket List</h1>
      <div>
        {listItems.map(listItem => {
          return <ListItem authenticated={false} key={listItem && listItem._id} listItem={listItem} />
        })}
      </div>
      <MeetNew />
    </section>
  )
}
export default User