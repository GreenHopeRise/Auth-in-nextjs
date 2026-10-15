"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createProduct,
  getProducts,
} from "@/lib/product.api";

export default function ProductsClient() {
  const queryClient = useQueryClient();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const createMutation = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  const handleCreate = () => {
    createMutation.mutate({
      name: "Test Product",
      price: 100,
    });
  };

  return (
    <div>
      <button onClick={handleCreate}>
        Create Product
      </button>

      {products?.map((product: any) => (
        <p key={product._id}>{product.name}</p>
      ))}
    </div>
  );
}