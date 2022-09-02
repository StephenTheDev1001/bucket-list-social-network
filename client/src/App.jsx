import './App.css'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import Login from './components/auth/Login'
import PrivateRoute from './components/routing/PrivateRoute'
import AuthState from './context/auth/AuthState'
import Register from './components/auth/Register'

function App() {
  return (

    <AuthState>
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
    </AuthState>
  );
}

export default App;
