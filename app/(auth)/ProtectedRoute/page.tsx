'use client'
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect } from "react";

export default function ProtectedRoute({children}:{children: ReactNode}){
    const {user,loading} = useContext(AuthContext)
    const router = useRouter()
     useEffect(() => {
    if (!user&& !loading) {
      router.push("/login");
    }
  }, [user, router,loading]);
  if(loading){
    return <p>loading...</p>
  }

  if (!user) {
    return null;
  }
    return children
}