"use client"
import { app } from '@/Firebase/firebase.config'
import { GoogleAuthProvider, User, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { createContext, useEffect, useState } from "react"

export interface AuthContextValue {
    user:User | null
    signInWithEmail: Function
    loginWithGoogle : Function 
    signupWithEmail: Function
    updateUser:Function
    signout:Function
  }
  
  export const AuthContext = createContext<AuthContextValue>(null)

  type EmailProps = {email:string,password:string}


  
  const googleProvider = new GoogleAuthProvider()
  
  const auth = getAuth(app)
  
  
  const AuthProvider = ({children}:{children:React.ReactNode}) => {

        const [user,setUser] = useState<User | null>(null)
        const [lodading,setLoading] = useState(true)
      
        const loginWithGoogle = () => {
            setLoading(true)
          return signInWithPopup(auth,googleProvider)
        }


        const signInWithEmail = (email:string,password:string) =>{
            setLoading(true)
           return signInWithEmailAndPassword(auth,email,password)
            
        }

        const signupWithEmail = (password:string,email:string) => {
            setLoading(true)
             return createUserWithEmailAndPassword(auth,email,password)
        }

        const updateUser = (name:string) => {
            setLoading(true)
                return updateProfile(auth.currentUser as User,{
                    displayName:name
                })
        }


        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser  => {
                setUser(currentUser);
                setLoading(false)
                return () => {
                    return unsubscribe()
                }
            })
        }, [])

        const signout = () => {
            return signOut(auth)
        }

    const authInfo:AuthContextValue = {
        user,
        signInWithEmail,
        loginWithGoogle,
        signupWithEmail,
        updateUser,
        signout
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider