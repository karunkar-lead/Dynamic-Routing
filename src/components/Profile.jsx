import React from 'react'
import UserName from './UserName'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const {name,count,increaseCount} = useContext(UserContext);
  return (
    <div>Profile
        <h1>Profile - {name} - {count}</h1>
        <button onClick={increaseCount}>Click</button>
        <UserName />
    </div>
  )
}

export default Profile