import { useParams } from "react-router-dom";
import { getProducts } from "../services/apiProduct";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const { limit, page } = useParams();
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(limit, page),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, products };
}
