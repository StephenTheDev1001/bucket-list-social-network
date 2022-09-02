import { useEffect, useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/auth/AuthState'
import { register } from '../../context/auth/authActions'

const Register = (props) => {
  const [authState, authDispatch] = useAuth()
  const { error, isAuthenticated } = authState

  useEffect(() => {
    if (error === 'User already exists') {
      console.log('User already exists')
    }
  }, [error, isAuthenticated, props.history, authDispatch])

  // component state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  // destructure component state
  const { name, email, password, password2 } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      console.log('Please enter all fields')
    } else if (password !== password2) {
      console.log('Passwords do not match')
    } else {
      register(authDispatch, {
        name,
        email,
        password
      })
    }
  }

  if (isAuthenticated) { return <Navigate to="/" /> }
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}
export default Register