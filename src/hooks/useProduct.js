import { useParams } from "react-router-dom";
import { getProducts } from "../services/apiProduct";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const { limit, page, categoryId } = useParams();
  const {
    isLoading,
    data: data,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(limit, page, categoryId),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, data };
}
