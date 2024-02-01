import React from 'react'
import { useState } from 'react'

function login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        // e.preventDefault() //prevent the page from refreshing
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        value = {Username}
        onChange={(e) => setUsername(e.target.value)}
        type="text" 
        placeholder='Username'
        />
        <input
        value = {Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        type="password"
        />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default login