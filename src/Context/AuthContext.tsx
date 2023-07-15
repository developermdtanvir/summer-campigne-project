"use client"
import { app } from '@/Firebase/firebase.config'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { createContext } from "react"

interface AuthContextValue {
    user: boolean
    signInWithEmail: Function
    loginWithGoogle : Function 
  }
  
  export const AuthContext = createContext<AuthContextValue>(null)

  type EmailProps = {password:string,email:string}


  
  const googleProvider = new GoogleAuthProvider()
  
  const auth = getAuth(app)
  
  
  const AuthProvider = ({children}:{children:React.ReactNode}) => {
      
        const loginWithGoogle = () => {
          return signInWithPopup(auth,googleProvider)
        }


        const signInWithEmail = (props:EmailProps) =>{
            console.log(props.email,props.password);
            
        }


    const authInfo:AuthContextValue = {
        user:true,
        signInWithEmail,
        loginWithGoogle
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider