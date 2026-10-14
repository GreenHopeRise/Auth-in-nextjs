'use client'
import { getMe } from "@/lib/auth.api";
import { createContext, ReactNode, useEffect, useState } from "react";

const AuthContext = createContext<any>(null)
export  function AuthProvider ({children}:{children:ReactNode}){
    const [user, setUser] = useState(null)
    useEffect(()=>{
        
        async function  resotore() {
            const token = localStorage.getItem('token')
            if(!token) return
            try {
  const data = await getMe();

  console.log("GetMe response:", data);

  setUser(data);
} catch (error) {
  console.error("GetMe failed:", error);
}
            
            
        }
        resotore()
    },[])
    return(
        <AuthContext.Provider value={{user, setUser}}>{children}
        </AuthContext.Provider>
    )
}

export default AuthContext