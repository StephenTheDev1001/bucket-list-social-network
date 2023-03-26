import axios from "axios"
import { useEffect, useState } from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"


const Comments = ({ id }) => {
  const [comments, setComments] = useState([])

  const getComments = async () => {
    try {
      const res = await axios.get(`/api/comments/user/${id}`)
      setComments(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getComments()
  }, [id])

  const onDelete = async (id) => {
    try {
      const r = await axios.delete(`/api/comments/${id}`)
      setComments(comments.filter(comment => comment._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const addComment = async (comment) => {
    try {

      const res = await axios.post('/api/comments', comment)
      setComments([res.data, ...comments])
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="max-w-lg">
      <CommentForm addComment={addComment} recipient={id} />
      {comments.map(comment => {
        return <Comment key={comment && comment._id} comment={comment} onDelete={onDelete} />
      })}
    </div>
  )
}
export default Comments