import api from "./api";

export async function getProduct() {
    const res = await api.get('/products')
    return res.data
}