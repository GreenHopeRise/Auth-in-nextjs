"use client";

import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import ProtectedRoute from "../(auth)/ProtectedRoute/page";

export default function page() {
  const { user } = useContext(AuthContext);
  return (
    <ProtectedRoute>
      <div>
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
    </div>
    </ProtectedRoute>
  );
}
