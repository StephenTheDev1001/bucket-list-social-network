import UserAvatarLink from "../layout/UserAvatarLink"
import { useAuth } from "../../context/auth/AuthState"

const Comment = ({ comment, onDelete }) => {
  // auth context
  const { user } = useAuth()[0]
  const id = user && user._id

  const authorizedToDelete = () => {
    return id === comment.user || id === comment.recipient ? true : false
  }

  const onClick = e => {
    onDelete(comment._id)
  }

  return (
    <div className='flex items-center p-3'>
      <UserAvatarLink userId={comment && comment.user} />
      <p>{comment.content}</p>
      {authorizedToDelete() &&
        <button
          onClick={onClick}
          className='bg-danger p-2 rounded-lg text-white h-1/3'
        >
          Delete</button>
      }
    </div >
  )
}
export default Comment