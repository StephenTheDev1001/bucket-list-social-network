import './App.css'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import Login from './components/auth/Login'
import PrivateRoute from './components/routing/PrivateRoute'
import Register from './components/auth/Register'
import AuthState from './context/auth/AuthState'
import ListItemState from './context/listItem/ListItemState'
import User from './components/pages/User'



function App() {
  return (

    <AuthState>
      <ListItemState>
        <Router>
          <Navbar />
          <div className="App">
            <Routes>
              <Route exact path="/" element={<PrivateRoute component={Dashboard} />} />
              <Route exact path="login" element={<Login />} />
              <Route exact path="register" element={<Register />} />
              <Route exact path='users/:id' element={<User />} />
            </Routes>
          </div>
        </Router>
      </ListItemState>
    </AuthState>
  );
}

export default App;
