import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl hover:bg-slate-800 hover:text-white mb-4'>tailwind css</h1>
      <Card userName="Soham banerjee" btnText="click me"/>
      <Card userName="learning props" btnText="visit me"/>

    </>
  )
}

export default App
