import { useAuth } from "../../context/auth/AuthState"
import ListItemForm from "../listItems/ListItemForm"
import List from "../listItems/List"

const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <div className="form-container">
        <ListItemForm />
      </div>
      <div>
        <List />
      </div>
    </div>
  )
}
export default Dashboard