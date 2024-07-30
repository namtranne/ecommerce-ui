import { useSearchParams } from "react-router-dom";
import {
  addProductReviewApi,
  getProductInfo,
  getProductReview,
} from "../services/apiProduct";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

export function useProductReview() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const {
    isLoading,
    data: data,
    error,
  } = useQuery({
    queryKey: ["product-review", productId],
    queryFn: () => getProductReview(productId),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, data };
}

export function useAddProductReview() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const queryClient = useQueryClient();
  const { mutate: addProductReview, isLoading } = useMutation(
    addProductReviewApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product-review", productId]);
      },
    }
  );

  return { addProductReview, isLoading };
}
