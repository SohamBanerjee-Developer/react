import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import {Input, Button, Logo} from './Index'
import { logIn as authLogin } from '../store/authSlice'
import authservice from '../appWrite/auth'
import { useDispatch } from 'react-redux'

function SignUp() {
    const{register, handleSubmit}=useForm()
    const navigate = useNavigate()
    const[error, setError] = useState("")
    const dispatch = useDispatch()
    const createAccount = async(data) =>{
        const session = authservice.createAccount(data)
        if(session){
            const userdata = authservice.checkUserState()
            try{if(userdata){
                dispatch(authLogin(userdata))
                navigate("/")
            }}catch(error){
                 
            }
        }
    }

  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onClick={handleSubmit(createAccount)}>
                <div className='space-y-5'>
                    <Input
                    label = "name"
                    type = "text"
                    placeholder = "enter your name"
                    {...register('name',{
                        required:true
                    })}
                    />
                    <Input
                    label = "email"
                    type = "email"
                    placeholder = "enter your email"
                    {...register('email',{
                        required:true,
                        validate:{
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    <Input
                    label = "password"
                    type = "password"
                    placeholder = "enter your password"
                    {...register('password',{
                        required:true
                    })}
                    />
                     <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
                
            </div>
        </div>
  )
}

export default SignUp