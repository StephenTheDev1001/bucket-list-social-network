import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth/AuthState'
import { logout } from '../../context/auth/authActions'
import { clearListItems } from '../../context/listItem/listItemActions'
import { useListItem } from '../../context/listItem/ListItemState'
import DemoLogin from '../auth/DemoLogin'

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
    <div className='flex pr-3'>
      <li className={linkSyles}>
        <Link to='/'>Dashboard</Link>
      </li>
      <li className={linkSyles}>
        <Link onClick={onLogout} to='/login'>
          <span>Logout</span>
        </Link>
      </li>
    </div>
  )

  const guestLinks = (
    <div className='flex pr-3'>
      <li className={linkSyles}>
        <Link to='/register'>Register</Link>
      </li>
      <li className={linkSyles}>
        <Link to='/login'>Login</Link>
      </li>
      <li className={linkSyles}>
        <DemoLogin />
      </li>
    </div>
  )

  return (
    <div className='flex justify-between bg-primary sm:text-3xl'>
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

// link Styles
const linkSyles = 'p-3 hover:bg-secondary hover:text-white'

export default Navbar