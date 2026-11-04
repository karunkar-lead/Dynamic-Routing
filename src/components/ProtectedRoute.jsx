import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children, isAuth}) => {
  if(!isAuth){
    return <Navigate to="/login" />
  }

  return children
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute