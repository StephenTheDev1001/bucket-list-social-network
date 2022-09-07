import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const UserAvatarLink = ({ userId }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`/api/users/${userId}`)
        setUser(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getUser()
  }, [userId])

  return (
    <Link to={`/users/${userId}`}>
      <div className='flex flex-col w-36 items-center cursor-pointer text-center'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${userId}.svg`} alt="avatar" className='w-28' />
        <h1>{user.name}</h1>
      </div>
    </Link>
  )
}
export default UserAvatarLink