import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Login from './component/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React video for context api</h1>
     <Login />
      <Profile />
    </>
  )
}

export default App
