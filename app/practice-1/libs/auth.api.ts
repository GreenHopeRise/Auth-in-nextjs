export async function login(email:string, password:string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,{
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    
    })
    const data = await response.json()
    return data
}