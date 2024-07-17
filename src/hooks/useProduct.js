import { useSearchParams } from "react-router-dom";
import { getProductInfo } from "../services/apiProduct";
import { useQuery } from "@tanstack/react-query";

export function useProductInfo() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const {
    isLoading,
    data: data,
    error,
  } = useQuery({
    queryKey: ["product-info", productId],
    queryFn: () => getProductInfo(productId),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, data };
}
