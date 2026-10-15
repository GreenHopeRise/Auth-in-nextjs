import api from "./api";

export async function getProducts() {
  const response = await api.get("/products", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
}

export async function createProduct(data: any) {
  const response = await api.post("/products", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
}