import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDos from './components/ToDos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>redux toolkit</h1>
    <AddToDo/>
    <ToDos/>
    </>
  )
}

export default App
