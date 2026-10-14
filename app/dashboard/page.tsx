"use client";

import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import ProtectedRoute from "../(auth)/ProtectedRoute/page";

export default function page() {
  const { user,logOut } = useContext(AuthContext);
  return (
    <ProtectedRoute>
      <div>
      <h1>Welcome {user?.name}</h1>

<p>Role: {user?.role}</p>
    </div>
    <button onClick={logOut}>LogOut</button>
    {user?.role === "admin" && (
  <button>Delete Product</button>
)}
    </ProtectedRoute>
  );
}
