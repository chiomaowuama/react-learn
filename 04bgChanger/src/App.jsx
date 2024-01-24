import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  function changeColor(color){
    setColor(color)

  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4'>
      <div className='flex flex-wrap gap-2 justify-center  shadow-lg bg-white py-2 px-2 rounded-3xl'>
            <button className=' outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => changeColor('red')} style={{backgroundColor:'red'}}>red</button>
            <button className=' outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => changeColor('green')} style={{backgroundColor:'green'}}>green</button>
            <button className=' outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => changeColor('blue')} style={{backgroundColor:'blue'}}>blue</button>
        </div>
      </div>

    </div>
  )
}

export default App
