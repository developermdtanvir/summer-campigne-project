"use client"
import { app } from '@/Firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { createContext } from "react"

interface AuthContextValue {
    user: boolean
    signInWithEmail: Function
    loginWithGoogle : Function 
    signupWithEmail: Function
  }
  
  export const AuthContext = createContext<AuthContextValue>(null)

  type EmailProps = {email:string,password:string}


  
  const googleProvider = new GoogleAuthProvider()
  
  const auth = getAuth(app)
  
  
  const AuthProvider = ({children}:{children:React.ReactNode}) => {
      
        const loginWithGoogle = () => {
          return signInWithPopup(auth,googleProvider)
        }


        const signInWithEmail = (email:string,password:string) =>{
           return signInWithEmailAndPassword(auth,email,password)
            
        }

        const signupWithEmail = (password:string,email:string) => {
             return createUserWithEmailAndPassword(auth,email,password)
        }


    const authInfo:AuthContextValue = {
        user:true,
        signInWithEmail,
        loginWithGoogle,
        signupWithEmail
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider