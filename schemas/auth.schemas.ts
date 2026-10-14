
import { email, z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password is required"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;


export const registerSchema = z.object({
    name: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email('enter a valid email'),
    password: z.string().min(6,'Password is required')
})

export type RegisterFormValue = z.infer<typeof registerSchema>