import React from 'react'
import {useParams} from "react-router-dom"

function User() {
    const {userId} = useParams() // when u want to do dynamic capturing of the userid u ses this hook
  return (
    <div className='bg-orange-500 text-black tect-3xl text-center py-5'>User: {userId}</div>
  )
}

export default User