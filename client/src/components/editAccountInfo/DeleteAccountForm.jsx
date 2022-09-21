import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth/AuthState"
import { logout } from "../../context/auth/authActions"

const DeleteAccountForm = () => {
  const navigate = useNavigate() // for redirecting to Register page
  const [text, setText] = useState('') // state for the text input
  const authDispatch = useAuth()[1] // dispatch function for auth context

  // set text state
  const onChange = (e) => {
    setText(e.target.value)
  }

  // onClick handler for the delete button
  const onClick = async (e) => {
    e.preventDefault()
    if (text == 'DELETE ACCOUNT') {
      console.log('delete account')
      // delete user from DB
      try {
        await axios.delete('/api/users/delete')
        logout(authDispatch)
        navigate('/register')
      } catch (err) {
        console.log(err)
      }
    } else {
      setText('')
    }
  }

  let placeholder = 'DELETE ACCOUNT'

  return (
    <form>
      <h1>Type DELETE ACCOUNT to delete this account.</h1>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={onChange}
        className='border border-black rounded-md p-2 m-1'
      />
      <button
        onClick={onClick}
        className='text-white bg-danger hover:bg-secondary rounded-md p-2 m-1'
      >
        Delete Account
      </button>
    </form>
  )
}
export default DeleteAccountForm