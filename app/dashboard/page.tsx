'use client'

import AuthContext from "@/context/AuthContext"
import {  useContext } from "react"

export default function page() {
    const {user}= useContext(AuthContext)
  return (
    <div><h1 className="text-2xl font-bold">
  Welcome, {user?.name}
</h1></div>
  )
}
