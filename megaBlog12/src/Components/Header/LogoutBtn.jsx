import React from 'react'
import authservice from '../../appWrite/auth'
import { logOut } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
  const dispatch = useDispatch()
  function handler() {
    authservice.logout().then(dispatch(logOut())).catch((error)=>{console.log(error)})
    
  }
  return (
    <button onClick={handler}
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogOut</button>
  )
}

export default LogoutBtn