import axios from 'axios'
import { useEffect, useState } from 'react'

const MeetNew = () => {
  const [users, setUsers] = useState([])

  // gets 5 random users 
  useEffect(() => async () => {
    try {
      const res = await axios.get('/api/users/5')
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
            <div key={user._id} className='flex flex-col w-36 items-center'>
              <img src={`https://avatars.dicebear.com/api/open-peeps/${user._id}.svg`} alt="" className='w-28' />
              <h1>{user.name}</h1>
            </div>
          )
        })}
      </div>

    </div>
  )

}
export default MeetNew