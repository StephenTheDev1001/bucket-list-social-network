import { useEffect } from "react"
import { useState } from "react"

const CommentForm = ({ addComment, recipient }) => {

  const [comment, setComment] = useState({
    content: '',
    recipient
  })

  useEffect(() => { setComment({ ...comment, recipient }) },
    [recipient])

  const onChange = e => {
    setComment({
      ...comment,
      content: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addComment(comment)
    setComment({
      ...comment,
      content: ''
    })
  }
  return (
    <form onSubmit={onSubmit} className='flex flex-col p-3'>
      <textarea
        className="border border-gray-300 rounded-lg p-3"
        name="input-comment"
        id="input-comment"
        cols="30"
        rows="5"
        maxLength='200'
        placeholder='Write a comment...'
        onChange={onChange}
        value={comment.content}
      >

      </textarea>
      <input type="submit" className="bg-primary p-3" />
    </form>
  )
}
export default CommentForm