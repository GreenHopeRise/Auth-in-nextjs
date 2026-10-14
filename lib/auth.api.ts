import api from "./api";


export async function login(email: string, password: string){
    const response = await api.post('auth/login',{
        email,password
    })
    return response.data
}

export async function registers(name:string, email: string, password: string) {
    const response = await api.post('auth/register', {name,email,password})
    return response.data
}

export async function getMe() {
    const response = await api.get('/auth/me',{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
    
}