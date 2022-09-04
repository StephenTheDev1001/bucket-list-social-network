import { useAuth } from "../../context/auth/AuthState"
import ListItemForm from "../listItems/ListItemForm"
import List from "../listItems/List"

const Dashboard = () => {

  return (
    <div className="dashboard-container flex flex-col justify-center items-center h-screen">
      <div className="form-container flex-col flex justify-start">
        <ListItemForm />
        <List />
      </div>
    </div>
  )
}
export default Dashboard