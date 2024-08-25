import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../services/apiOrder";

export function useUserOrders() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getUserOrders,
  });
  if (error) {
    console.log("error", error);
  }
  return { isLoading, data };
}
