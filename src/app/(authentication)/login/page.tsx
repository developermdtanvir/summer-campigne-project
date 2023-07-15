'use client'

import useAuth from "@/hooks/useAuth";
import { UserCredential } from "firebase/auth";
import { useForm } from "react-hook-form";
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
    <div className="h-screen flex justify-center items-center">
        <div className="lg:w-1/2 mx-auto">
            <form className="form-control space-y-4" onSubmit={handleSubmit(handleLogin)} action="">
                <input {...register('name')} className="input" type="text" name="name" id="name" placeholder="Name" />
                <input {...register('email')} className="input" type="email" name="email" id="email" placeholder="Email" />
                <input {...register('password')} className="input" type="password" name="password" id="password" placeholder="Password" />
                <button className="btn">Login</button>
            </form>
            <button onClick={()=>loginWithGoogle()} className="btn btn-primary">Login With Google</button>
        </div>
    </div>
  )
}

export default Login;