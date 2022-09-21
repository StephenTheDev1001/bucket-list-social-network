import ListItemForm from "../listItems/ListItemForm"
import List from "../listItems/List"
import MeetNew from "../meetNew/MeetNew"
import DeleteAccountForm from "../editAccountInfo/DeleteAccountForm"

const Dashboard = () => {

  return (
    <div className="dashboard-container flex flex-col justify-center items-center h-auto">
      <div className="flex-col flex items-center p-10">
        <div className="flex flex-col">
          <ListItemForm />
          <List authenticated={true} />
        </div>
        <MeetNew />
        <DeleteAccountForm />
      </div>
    </div>
  )
}
export default Dashboard