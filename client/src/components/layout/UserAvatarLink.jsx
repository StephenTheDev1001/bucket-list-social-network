import { Link } from "react-router-dom"

const UserAvatarLink = ({ user }) => {
  return (
    <Link to={`/users/${user._id}`}>
      <div className='flex flex-col w-36 items-center cursor-pointer'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${user._id}.svg`} alt="avatar" className='w-28' />
        <h1>{user.name}</h1>
      </div>
    </Link>
  )
}
export default UserAvatarLink