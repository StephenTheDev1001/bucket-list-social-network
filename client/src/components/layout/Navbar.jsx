import PropTypes from 'prop-types'
import { Link, Navigate } from 'react-router-dom'
import setAuthToken from '../../utils/setAuthToken'
import { useAuth } from '../../context/auth/AuthState'
import { logout } from '../../context/auth/authActions'
import { clearListItems } from '../../context/listItem/listItemActions'
import { useListItem } from '../../context/listItem/ListItemState'

const Navbar = ({ title, icon }) => {
  // Auth State
  const [authState, authDispatch] = useAuth()
  const { isAuthenticated, user } = authState

  // List Item State
  const listItemDispatch = useListItem()[1]

  const onLogout = () => {
    logout(authDispatch)
    clearListItems(listItemDispatch)
  }


  const authLinks = (
    <>
      <li className='p-3'>
        <Link to='/'>Dashboard</Link>
      </li>
      <li className='p-3'>
        <Link onClick={onLogout} to='/login'>
          <span>Logout</span>
        </Link>
      </li>
    </>
  )

  const guestLinks = (
    <>
      <li className='p-3'>
        <Link to='/register'>Register</Link>
      </li>
      <li className='p-3'>
        <Link to='/login'>Login</Link>
      </li>
    </>
  )

  return (
    <div className='flex justify-between bg-primary text-3xl'>
      <h1>
        <Link to='/'>
          <h1 className='p-3'>BucketList Network</h1>
        </Link>
      </h1>
      <ul className='flex'>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
}

// default title
Navbar.defaultProps = {
  title: 'BucketList Network'
}

export default Navbar