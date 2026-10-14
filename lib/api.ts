import axios from "axios";
// import { error } from "console";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use((response) => {
  return response;
},(error)=>{
  if(error.response?.status=== 401){
    localStorage.removeItem('token')
    window.location.href = "/login"
  }
  if (error.response?.status === 403) {
      console.log("Forbidden: You don't have permission.");
    }
  return Promise.reject(error)

}
);

export default api;
