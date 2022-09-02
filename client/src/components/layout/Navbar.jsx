import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import setAuthToken from '../../utils/setAuthToken'

const Navbar = ({ title, icon }) => {

  const onLogout = () => {
    setAuthToken(null)
    console.log('logout')
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
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{guestLinks}</ul>
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