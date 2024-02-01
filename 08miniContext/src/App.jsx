import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Login from './component/Login'
import UserContextProvider from './context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React video for context api</h1>
     <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
