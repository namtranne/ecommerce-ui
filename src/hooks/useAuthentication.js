import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../services/apiAuthentication";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
    onSuccess: () => {
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/"); // Navigate to home page or another default route
      }
      toast.success("Login successfully");
    },
    onError: (err) => {
      toast.error("Login failed, please check your credentials and try again!");
    },
  });

  return { login, isLoading };
}
