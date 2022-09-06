import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserAvatarLink from '../layout/UserAvatarLink'
const MeetNew = () => {
  const [users, setUsers] = useState([])
  const { id } = useParams()

  // gets 5 random users 
  useEffect(() => async () => {
    try {
      const res = await axios.get('/api/users/rand/5')
      setUsers(res.data)
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div className='flex flex-col w-max text-center p-3 items-center'>
      <h1 className='text-2xl underline'>Connect with a new<br /> BucketList Partner</h1>
      <div className='meetNew-container w-max flex flex-col pt-3 sm:flex-row'>
        {users.map(user => {
          return (
            <UserAvatarLink userId={user._id} key={user._id} />
          )
        })}
      </div>

    </div>
  )

}
export default MeetNew