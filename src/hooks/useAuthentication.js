import { useNavigate } from "react-router-dom";
import {
  login as loginApi,
  signUp as signUpApi,
} from "../services/apiAuthentication";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUserDetails } from "../services/apiUser";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
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

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: (credentials) => signUpApi(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/"); // Navigate to home page or another default route
      }
      toast.success("Signup successfully");
    },
    onError: (err) => {
      toast.error(
        "Signup failed, please check your credentials and try again!"
      );
    },
  });

  return { signUp, isLoading };
}

export function useUserDetails() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUserDetails,
  });
  if (error) {
    console.log("error", error);
  }
  return data;
}
