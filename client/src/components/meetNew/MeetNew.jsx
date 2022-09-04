import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


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
      <h1 className='text-2xl underline'>Connect with Your<br /> BucketList Partner</h1>
      <div className='meetNew-container w-max flex flex-col pt-3 sm:flex-row'>
        {users.map(user => {
          return (
            <Link to={`/users/${user._id}`} key={user._id}>
              <div className='flex flex-col w-36 items-center cursor-pointer'>
                <img src={`https://avatars.dicebear.com/api/open-peeps/${user._id}.svg`} alt="avatar" className='w-28' />
                <h1>{user.name}</h1>
              </div>
            </Link>
          )
        })}
      </div>

    </div>
  )

}
export default MeetNew