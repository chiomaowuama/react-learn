import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-900 p-3 rounded-md text-white'>vite with tailwind</h1>
      <Card  username="chioma"/>
      <Card post="senior engineer"/>
    </>
  )
}

export default App
