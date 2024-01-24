import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

 const generatePassword = useCallback (() =>{
  // logic
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if(numbersAllowed) str += "0123456789"
   if(charAllowed) str += "!@#$%^&*+"

   for (let i = 1; i < length; i++) {
   const char = Math.floor(Math.random() * str.length + 1)
   pass += str.charAt(char)
    
   }
   setPassword(pass)

 },[length,charAllowed, numbersAllowed]) 

  const copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password)
  }
 useEffect(()=>{
  generatePassword()
 }, [length,charAllowed, numbersAllowed])
  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" placeholder='password' readOnly value={password} className='outline-none w-full py-1 px-3'  />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2 gap-2'>
      <div className='flex items-center gap-h-1 gap-2'>
        <input type="range" min={6} max={16} value={length} onChange={(e) => setlength(e.target.value)} name="" id='' />
        <label htmlFor='length'>Length:{length}</label>
      </div>
      <div className='flex items-center gap-h-1 gap-2'>
        <input type="checkbox" defaultChecked={numbersAllowed} onChange={()=> {setNumbersAllowed((prev) => !prev)}} name="" id="" />
        <label htmlFor="numbers"> Numbers</label>
      </div>
      <div className='flex items-center gap-h-1 gap-2'>
        <input type="checkbox" defaultChecked={charAllowed} onChange={()=> {setCharAllowed((prev) => !prev)}} name="" id=" characterInput" />
        <label htmlFor="CharInput"> Characters</label>
      </div>
    </div>

   </div>
  )
}

export default App
