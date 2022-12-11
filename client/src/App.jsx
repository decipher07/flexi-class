import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Payment from './pages/Payment'

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="login" />}/>
      <Route path='login' element={<Login />}/>
      <Route path='payment' element={<Payment />}/>
    </Routes>
  )
}

export default App
