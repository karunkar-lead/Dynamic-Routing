import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UserName = () => {
    const {name, count, increaseCount} = useContext(UserContext);
  return (
    <div>UserName
        <h1>UserName - {name} - {count}</h1>
        <button onClick={increaseCount}>Click</button>
    </div>
  )
}

export default UserName