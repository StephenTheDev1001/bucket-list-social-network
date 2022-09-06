import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import ListItem from '../listItems/ListItem'
import MeetNew from '../meetNew/MeetNew'
import CommentForm from '../comments/CommentForm'
import Comments from '../comments/Comments'
import UserAvatarLink from '../layout/UserAvatarLink'

const User = () => {
  const { id } = useParams()
  const [userInfo, setUserInfo] = useState({
    user: {},
    listItems: []
  })

  // destucture
  const { listItems } = userInfo

  // useEffect(() => async () => {
  //   try {
  //     if (id) {
  //       const res2 = await axios.get(`/api/listItems/${id}`)
  //       setUserInfo({ listItems: res2.data })
  //       console.log(id)
  //     }
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }, [id])


  useEffect(() => {
    const getComments = async () => {
      try {
        const res2 = await axios.get(`/api/listItems/${id}`)
        setUserInfo({ listItems: res2.data })
        console.log(id)
      } catch (err) {
        console.error(err)
      }
    }
    getComments()
  }, [id])

  return (
    <section className='flex flex-col items-center'>

      <UserAvatarLink userId={id} />
      <div>
        {listItems.map(listItem => {
          return <ListItem authenticated={false} key={listItems && listItem._id} listItem={listItem} />
        })}
      </div>
      <Comments id={id} />
      <MeetNew />
    </section>
  )
}
export default User