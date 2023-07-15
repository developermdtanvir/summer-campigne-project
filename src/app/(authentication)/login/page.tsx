'use client'

import LoginImage from '@/assets/authentication.jpg';
import useAuth from "@/hooks/useAuth";
import { UserCredential } from "firebase/auth";
import Image from "next/image";
import { useForm } from "react-hook-form";
import './login.css';
const Login = () => {

    const {signInWithEmail,loginWithGoogle,signupWithEmail} = useAuth();

    const {register,handleSubmit,formState:{errors}} = useForm()

    const handleLogin = (data:any) => {
        const {name,email,password} = data
        signInWithEmail(email,password)
            .then((res : UserCredential)  => console.log(res)
            )
    }

  return (
    <div className=" bg-white lg:h-screen flex justify-center items-center">
        <div className='flex lg:flex-row flex-col p-5'>
            <div className="lg:w-1/2 mx-auto lg:p-20 p-5">
                <div>
                    <form className="form-control space-y-4" onSubmit={handleSubmit(handleLogin)} action="">
                        <input {...register('name')} className="input" type="text" name="name" id="name" placeholder="Name" />
                        <input {...register('email')} className="input" type="email" name="email" id="email" placeholder="Email" />
                        <input {...register('password')} className="input" type="password" name="password" id="password" placeholder="Password" />
                        <button className="btn">Login</button>
                    </form>
                    <div className="divider text-black">OR</div>
                </div>
                <div className='mx-auto'>
                    <h1 className='text-black'>Hello World</h1>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <Image src={LoginImage} alt="Login Image" />
            </div>
        </div>
    </div>
  )
}

export default Login;