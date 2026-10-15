'use client'

import { registers } from "@/lib/auth.api"
import { RegisterFormValue, registerSchema } from "@/schemas/auth.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function RegisterForm() {
    const {register, handleSubmit, formState:{errors, isSubmitting}}= useForm<RegisterFormValue>({
        resolver:zodResolver(registerSchema)
    })
    const onSubmit =async (values: RegisterFormValue)=>{
        try{
            registers(values.name, values.email, values.password, values.role)
    }catch{
        console.log(errors.name)

    }
  return (
    <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            <div>
                <label >Name</label>
                <input type="text" placeholder="Enter your name" {...register('name')}  />
            </div>
            <div>
                <label >Email</label>
                <input type="email" placeholder="Enter your email" {...register('email')}/>
            </div>
            <div>
                <label >Password</label>
                <input type="password" placeholder="Enter 6 digit password" {...register('password')}  />
            </div>
            <div>
                <label >Role</label>
                <input type="text" placeholder="Enter your role" {...register('role')}  />
            </div>
            <button>{isSubmitting?'Registering':'Register'}</button>
        </form>
    </div>
  )
}
