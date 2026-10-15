import z, { email } from "zod";

export const loginSchema=z.object({
    email: z.string().email('Enter valid email'),
    password: z.string().min(6,'Password is required')
})

export type LoginFormValues = z.infer<typeof loginSchema>

export const registerSchema= z.object({
    name: z.string().min(4),
    email: z.string().email('enter valid email'),
    password: z.string().min(6,'Password is required'),
    role: z.string().min(4,'enter role')
})
export type RegisterFormValue = z.infer<typeof registerSchema>