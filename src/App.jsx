import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './Pages/Authorization/Signup'
import Login from './Pages/Authorization/Login'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
