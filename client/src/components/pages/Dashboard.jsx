import ListItemForm from "../listItems/ListItemForm"
import List from "../listItems/List"
import MeetNew from "../meetNew/MeetNew"

const Dashboard = () => {

  return (
    <div className="dashboard-container flex flex-col justify-center items-center h-auto">
      <div className="flex-col flex items-center p-10">
        <div>
          <ListItemForm />
          <List />
        </div>
        <MeetNew />
      </div>
    </div>
  )
}
export default Dashboard