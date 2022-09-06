import UserAvatarLink from "../layout/UserAvatarLink"
import { useAuth } from "../../context/auth/AuthState"

const Comment = ({ comment, onDelete }) => {
  // auth context
  const { user } = useAuth()[0]
  const id = user && user._id

  const deleteButton = () => {
    if (id === comment.recipient || id === comment.user) {
      return
      <button>Delete</button>
    } else return null
  }
  return (
    <div className='flex'>
      <UserAvatarLink userId={comment && comment.user} />
      <p>{comment.content}</p>
      {deleteButton()}
    </div>
  )
}
export default Comment