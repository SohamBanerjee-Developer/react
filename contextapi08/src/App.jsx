import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextprovider'
import Login from './comonents/Login'
import Profile from './comonents/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>chai aur context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
