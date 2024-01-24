import { useState } from 'react'

import './App.css'

function App() {
//  let counter = 15
 const [counter , setcounter] = useState(15)
 const addValue = () =>{
  setcounter(counter + 1)
  console.log(counter)
  
 }
 const removevalue = () =>{
  setcounter(counter - 1)
 }
  return (
    <>
     <h1>react course with me {counter} </h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue} >Add value {counter}</button>{" "}
     <button onClick={removevalue}>Remove value {counter}</button>
     <footer>footer:{counter}</footer>
    </>
  )
}

export default App
