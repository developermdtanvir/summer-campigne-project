import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const   {user,signInWithEmail,loginWithGoogle,signupWithEmail} = useContext(AuthContext);
  return {
    user,
    signInWithEmail,
    loginWithGoogle,
    signupWithEmail
  }
}

export default useAuth