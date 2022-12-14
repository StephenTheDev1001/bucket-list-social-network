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

  const slicedDate = () => {
    if (comment) {
      return comment.date.slice(0, 10)
    } else {
      return null
    }
  }
  return (
    <div className='flex p-3 border'>
      <UserAvatarLink userId={comment && comment.user} />
      <div className="flex flex-col justify-center items-start p-3">
        <p className="">{comment.content}</p>
        {slicedDate() && <p className="text-xs">Posted on {slicedDate()}</p>}

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