import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";


const useAuth = () => {

  const   {user,signInWithEmail,loginWithGoogle,signupWithEmail,updateUser,signout} = useContext(AuthContext);
  return {
    user,
    signInWithEmail,
    loginWithGoogle,
    signupWithEmail,
    updateUser,
    signout
  }
}

export default useAuth