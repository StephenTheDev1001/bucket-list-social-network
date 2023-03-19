import { login } from '../../context/auth/authActions'
import { useAuth } from '../../context/auth/AuthState';

const DemoLogin = () => {

  const [authState, authDispatch] = useAuth()

  // Demo Login Credentials
  const email = 'demo@gmail.com';
  const password = 'demo1001';

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
  return (
    <a
      href="#"
      onClick={onSubmit}
    >
      Demo-Login
    </a>
  )
}
export default DemoLogin