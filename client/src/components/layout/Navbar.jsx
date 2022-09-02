import PropTypes from 'prop-types'
import { Link, Navigate } from 'react-router-dom'
import setAuthToken from '../../utils/setAuthToken'
import { useAuth } from '../../context/auth/AuthState'
import { logout } from '../../context/auth/authActions'

const Navbar = ({ title, icon }) => {
  // Auth State
  const [authState, authDispatch] = useAuth()
  const { isAuthenticated } = authState

  const onLogout = () => {
    logout(authDispatch)
  }

  const authLinks = (
    <>
      <li>Hello</li>
      <li>
        <Link onClick={onLogout} to='/login'>
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </>
  )

  const guestLinks = (
    <>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  )

  return (
    <div className='flex'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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