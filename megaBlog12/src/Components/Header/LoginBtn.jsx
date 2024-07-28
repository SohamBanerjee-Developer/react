import React from 'react'
import authservice from '../../appWrite/auth'
import { logIn, logOut } from '../../store/authSlice';
import { useDispatch } from "react-redux";

function LoginBtn() {
const dispatch = useDispatch()
function loginHandler(){
  authservice.login().then((res) => {dispatch(logOut({res}))}).
}
  return (
    <div>LoginBtn</div>
  )
}

export default LoginBtn