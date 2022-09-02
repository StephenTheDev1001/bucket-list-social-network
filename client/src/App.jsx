import './App.css'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import Login from './components/auth/Login'
import PrivateRoute from './components/routing/PrivateRoute'
import Register from './components/auth/Register'
import AuthState from './context/auth/AuthState'
import ListItemState from './context/listItem/ListItemState'



function App() {
  return (

    <AuthState>
      <ListItemState>
        <Router>
          <>
            <Navbar />
            <div className="App">
              <Routes>
                <Route path="/" element={<PrivateRoute component={Dashboard} />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </div>
          </>
        </Router>
      </ListItemState>
    </AuthState>
  );
}

export default App;
