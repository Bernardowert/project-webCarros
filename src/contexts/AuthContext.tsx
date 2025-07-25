import { onAuthStateChanged, type AuthProvider } from "firebase/auth";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../services/firebaseConnection";

interface AuthProviderProps{
   children: ReactNode;
}


type AuthContextData = {
    signed: boolean;
    loadingAuth: boolean;
    handleInfoUser: ({name,email,uid}:UserProps) => void
    user:UserProps | null;
  }

interface UserProps{
    uid:string;
    name:string | null;
    email:string | null;
}


export const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({children}: AuthProviderProps){
    const[user, setUser] = useState<UserProps | null>(null);
    const[loadingAuth, setLoadingAuth] = useState(true);
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) =>{
          if(user){
            setUser({
            uid: user.uid,
            name: user?.displayName,
            email: user?.email
            })
            setLoadingAuth(false);
          } 
          else {
            setUser(null);
            setLoadingAuth(false);

          }
      })

      return () =>{
        unsub();
      }
    },[])


    function handleInfoUser({name,email,uid}:UserProps){
       setUser({
         name,
         email,
         uid,
       })
    }
   
    return(
        <AuthContext.Provider value={{signed: !!user, loadingAuth, handleInfoUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}