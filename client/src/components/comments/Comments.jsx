import axios from "axios"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/auth/AuthState"
import Comment from "./Comment"


const Comments = ({ id }) => {
  const [comments, setComments] = useState([])

  useEffect(() => async () => {
    try {
      const res = await axios.get(`/api/comments/user/${id}`)
      setComments(res.data)
    } catch (err) {
      console.error(err)
    }
  }, [id])

  return (
    <div>
      {comments.map(comment => {
        return <Comment key={comment && comment._id} comment={comment} />
      })}
    </div>
  )
}
export default Comments