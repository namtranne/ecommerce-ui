import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../services/apiBrand";

export function useBrand() {
  const {
    isLoading,
    data: data,
    error,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: () => getBrands(),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, data };
}
