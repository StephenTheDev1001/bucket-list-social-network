import ListItemForm from "../listItems/ListItemForm"
import List from "../listItems/List"
import MeetNew from "../meetNew/MeetNew"
import DeleteAccountForm from "../editAccountInfo/DeleteAccountForm"
import EditNameForm from "../editAccountInfo/EditNameForm"
import UserAvatarLink from "../layout/UserAvatarLink"
import { useAuth } from "../../context/auth/AuthState"
import Spinner from "../layout/Spinner"

const Dashboard = () => {

  //auth State
  const [authState, authDispatch] = useAuth()

  return (
    <div className="dashboard-container flex flex-col justify-center items-center h-auto">
      <div className="flex-col flex items-center p-10">
        <h1>BucketList Dashboard of</h1>
        {authState.user ? <UserAvatarLink userId={authState.user._id} /> : <Spinner />}
        <div className="flex flex-col">
          <ListItemForm />
          <List authenticated={true} />
        </div>
        <MeetNew />
        <EditNameForm />
        <DeleteAccountForm />
      </div>
    </div>
  )
}
export default Dashboard