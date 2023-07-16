'use client'

import LoginImage from '@/assets/authentication.jpg';
import useAuth from "@/hooks/useAuth";
import { UserCredential } from "firebase/auth";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './login.css';
const Login = () => {


    const {signInWithEmail,loginWithGoogle,user} = useAuth();

    const {register,handleSubmit,formState:{errors}} = useForm()

    const handleLogin = (data:any) => {
        const {name,email,password} = data
        signInWithEmail(email,password)
            .then((res : UserCredential)  => console.log(res)
            )
    }

    const router = useRouter()

    const {} = router;

    useEffect(()=>{
        if(user){
            router.push('/')
        }
    },[router,user])

  return (
    <div className=" bg-white lg:h-screen flex justify-center items-center">
        <div className='flex lg:flex-row flex-col p-5'>
            <div className="lg:w-1/2 mx-auto lg:p-20 p-5">
                <div>
                    <form className="form-control space-y-4" onSubmit={handleSubmit(handleLogin)} action="">
                        <input {...register('email',{pattern:/^\S+@\S+\.\S+$/,required:true})} className="input" type="email" name="email" id="email" placeholder="Email" />
                        <input {...register('password',{pattern:/^.{6,}$/,required:true})} className="input" type="password" name="password" id="password" placeholder="Password" />
                        <button className="btn">Login</button>
                    </form>
                    <div className="divider text-black">OR</div>
                </div>
                <div className='flex flex-col space-y-10 justify-center items-center'>
                    <button onClick={()=>loginWithGoogle()} className='btn'>Login With Google</button>
                    <span className='text-black'>Your are new user <Link className="text-blue-500" href='/signup'>Register now</Link></span>
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