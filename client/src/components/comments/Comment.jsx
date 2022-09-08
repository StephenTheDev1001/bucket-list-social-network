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
  const slicedDate = comment && comment.createdAt.slice(0, 10)
  return (
    <div className='flex p-3 border'>
      <UserAvatarLink userId={comment && comment.user} />
      <div className="flex flex-col justify-center items-start p-3">
        <p className="text-center">{comment.content}</p>
        <p className="text-center text-xs">Posted on {slicedDate}</p>
      </div>

      {
        authorizedToDelete() &&
        <button
          onClick={onClick}
          className='bg-danger p-2 rounded-lg text-white h-1/3 ml-auto self-center'
        >
          Delete
        </button>
      }
    </div >
  )
}
export default Comment