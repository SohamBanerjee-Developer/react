import React from 'react'
import { useState } from 'react'
import {Input, Button, Logo} from './Index'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'
import { logIn as authLogin } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import authservice from '../appWrite/auth'

function Login() {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const[error, setError] = useState("")
    const dispatch = useDispatch()
    const login = async (data) =>{
        setError("")
        try{const session = await authservice.login(data)
        if (session){
            const userData = await authservice.checkUserState()
            if (userData) dispatch(authLogin(userData))
                navigate("/")
        }}catch(error){
            setError(error.message)
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}> {/*we get access to the data of the fields that has register through the handleSubmit's callback*/} 
        <div className='space-y-5'>
            <Input
            label = "Email"
            type = "email"
            placeholder = "enter your email"
            {...register("email", 
                {required:true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
            })}
            />
            <Input
            label="password"
            type = "password"
            placeholder="enter your password"
            {...register("password",{required:true})}{/*spread register or register used in other inputs will be overwritten */}
            />
            <Button
            className='w-full'
            type='submit'
            >Sign In</Button>
            </div>
        </form>
        </div>
        </div>
  )
}

export default Login