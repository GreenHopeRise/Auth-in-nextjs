"use client";
import { getMe } from "@/lib/auth.api";
import { createContext, ReactNode, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const logOut = ()=>{
    localStorage.removeItem('token')
    setUser(null)
  }
  useEffect(() => {
    async function resotore() {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const data = await getMe();

        console.log("GetMe response:", data);

        setUser(data);
      } catch (error) {
        console.error("GetMe failed:", error);
      }finally{
        setLoading(false)
      }
    }
    resotore();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser,loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
