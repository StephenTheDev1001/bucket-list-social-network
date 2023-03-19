import { useState, useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/auth/AuthState'
import { clearErrors, login } from '../../context/auth/authActions'

const Login = () => {

  // Auth State
  const [authState, authDispatch] = useAuth()
  const { error, isAuthenticated } = authState

  // component state
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })


  // Event Click submit
  const onSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      // make this for alertState later
      console.log('Please enter all fields')
    } else {
      login(authDispatch, {
        email,
        password
      });
    }
  };

  // onclick for demo button
  const demoOnClick = (e) => {
    setUser({
      email: 'demo@gmail.com',
      password: 'demo1001'
    })

    onSubmit();
  }

  if (isAuthenticated) { return <Navigate to="/" /> }
  return (
    <div className='form-container flex flex-col justify-center h-screen items-center'>

      <form onSubmit={onSubmit}>
        <h2>Click Demo-Login on the top-right of the page to login to a demo account</h2>
      </form>
      <h1 className='text-3xl'>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className={formGroup}>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            className='border border-black'
            required
          />
        </div>
        <div className={formGroup}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            className='border border-black'
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='border w-full border-secondary bg-secondary text-white px-4 py-2 rounded-md'
        />
      </form>
    </div>
  );
}

// formGroup styling
const formGroup = 'flex flex-col mb-4'

export default Login