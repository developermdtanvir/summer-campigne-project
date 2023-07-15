import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const   {user,signInWithEmail,loginWithGoogle} = useContext(AuthContext);
  return {
    user,
    signInWithEmail,
    loginWithGoogle
  }
}

export default useAuth