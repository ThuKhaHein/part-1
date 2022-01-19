import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContext = ({ children }) => {
    
    const[currentUser, setCurrentUser] = useState(null)
    const [modal, setModal] = useState({isOpen:false, title:'', content:''})



    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{}, [])

  const value = {};
  return <authContext.Provider {...{ value }}>{children}</authContext.Provider>;
};

export default AuthContext;
