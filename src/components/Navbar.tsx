"use client"
import useAuth from "@/hooks/useAuth";
import Link from "next/link";

const Navbar = () => {
    const {user,signout} = useAuth()
    console.log(user);

    let navbar = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Instructors</Link></li>
        <li><Link href={'/'}>Classes</Link></li>
        <li><Link href={'/'}>Dashboard</Link></li>
        {user ? <li onClick={()=>signout()}><Link href={''}>Logout</Link></li> : <li><Link href={'/login'}>Login</Link></li>}
        {/* { user && <div className="avatar">
  <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
      <Image  src={user.photoURL ? user.photoURL : 'user.png'} width={40} height={60} alt="this is image"/>
      <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xs text-white font-semibold">{user.displayName}</div>
  </div>
</div>} */}
    </>



  return (
    <div className="navbar bg-black bg-opacity-10 text-white max-w-screen-xl fixed z-30">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navbar}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">summer campigne</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navbar}
      </ul>
    </div>
  </div>
  )
}

export default Navbar