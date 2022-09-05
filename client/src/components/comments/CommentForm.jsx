import { useAuth } from '../../context/auth'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CommentForm = () => {
  const authState = useAuth()[0]
  const { isAuthenticated, user } = authState

  const recipientId = useParams().id
  const authorId = user._id


  return (
    <div>CommentForm</div>
  )
}
export default CommentForm