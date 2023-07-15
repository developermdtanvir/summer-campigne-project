'use client'

import useAuth from "@/hooks/useAuth";

const Login = () => {

    const {signInWithEmail,loginWithGoogle} = useAuth()

    const handleLogin = (e:any) => {
        e.preventDefault();
        signInWithEmail(e.target.email.value,e.target.password.value)
    }

  return (
    <div className="h-screen flex justify-center items-center">
        <div className="lg:w-1/2 mx-auto">
            <form className="form-control space-y-4" onSubmit={handleLogin} action="">
                <input className="input" type="text" name="name" id="name" placeholder="Name" />
                <input className="input" type="email" name="email" id="email" placeholder="Email" />
                <input className="input" type="password" name="password" id="password" placeholder="Password" />
                <button className="btn">Submit</button>
            </form>
            <button onClick={()=>loginWithGoogle()} className="btn btn-primary">Login With Google</button>
        </div>
    </div>
  )
}

export default Login;