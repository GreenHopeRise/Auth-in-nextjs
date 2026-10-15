"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/product.api";

export default function ProductsClient() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load products.</p>;
  }

  return (
    <div>
      {products?.map((product: any) => (
        <p key={product._id}>{product.name}</p>
      ))}
    </div>
  );
}