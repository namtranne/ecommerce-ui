import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCategoriesProductsPage } from "../services/apiCategory";

export function useCategoriesProductsPage() {
  const { categoryId } = useParams();
  const {
    isLoading,
    data: data,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategoriesProductsPage(categoryId),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, data };
}
