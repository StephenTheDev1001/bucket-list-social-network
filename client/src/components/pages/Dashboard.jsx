import { useAuth } from "../../context/auth/AuthState"

const Dashboard = () => {
  const [authState, authDispatch] = useAuth()
  const { user } = authState
  return (
    <div>Hello {user.name}</div>
  )
}
export default Dashboard