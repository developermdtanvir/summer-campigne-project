'use client'
const Login = () => {
    const handleLogin = (e:any) => {
        e.preventDefault();
        console.log(e.target.name.value)
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
        </div>
    </div>
  )
}

export default Login;