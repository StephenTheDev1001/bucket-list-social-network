import { useState, useEffect } from "react"
import { useAuth } from "../../context/auth/AuthState"
import axios from "axios"
import { loadUser } from "../../context/auth/authActions"

const EditNameForm = () => {
  const [authState, authDispatch] = useAuth()
  const [currName, setCurrName] = useState('Enter a new name')
  const [newName, setNewName] = useState("")

  useEffect(() => {
    if (authState.user) {
      setCurrName(authState.user.name)
    }
  }, [authState])

  const onChange = (e) => {
    setNewName(e.target.value)
  }

  // onClick handler for the submit button
  const onClick = async (e) => {
    e.preventDefault()
    // update user name in DB
    if (newName) {
      try {
        await axios.put("/api/users/update", { name: newName })
        loadUser(authDispatch)
        setNewName('')
      } catch (err) {
        console.error(err)
      }
    }
  }
  return (
    <form className="m-3 flex flex-col justify-between w-80">
      <input
        type="text"
        value={newName}
        placeholder={currName}
        onChange={onChange}
        className='border border-black rounded-md p-2 m-1'
      />
      <button
        onClick={onClick}
        className='text-white bg-secondary hover:bg-danger rounded-md p-2 m-1'
      >
        Edit Name
      </button>
    </form>
  )
}
export default EditNameForm