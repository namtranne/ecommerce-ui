import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addUserAddressApi,
  getUserAddresses,
  getUserDetails,
  updateUserDetails,
} from "../services/apiUser";
import { addCartItemApi, getCartItemsApi } from "../services/apiCart";
import { addWishListItemApi, getWishlistItemsApi, deleteWishlistItemApi } from "../services/apiWishlist";


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

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation(updateUserDetails, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user"]);
    },
  });

  return { updateUser, isLoading };
}

export function useAddUserAddress() {
  const queryClient = useQueryClient();

  const { mutate: addUserAddress, isLoading } = useMutation(addUserAddressApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(["address"]);
    },
  });

  return { addUserAddress, isLoading };
}

export function useUserAddresses() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["address"],
    queryFn: getUserAddresses,
  });
  if (error) {
    console.log("error", error);
  }
  //   console.log(response);
  return { isLoading, data };
}

export function useAddCartItem() {
  const queryClient = useQueryClient();

  const { mutate: addCartItem, isLoading } = useMutation(addCartItemApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  return { addCartItem, isLoading };
}



export function useCart() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartItemsApi,
  });
  if (error) {
    console.log("error", error);
  }
  //   console.log(response);
  return { isLoading, data };
}


export function useAddWishlistItem() {
  const queryClient = useQueryClient();

  const { mutate: addWishlistItem, isLoading } = useMutation(
    addWishListItemApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["wishlist"]);
      },
    }
  );

  return { addWishlistItem, isLoading };
}

export function useDeleteWishlistItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteWishlistItem, isLoading } = useMutation(
    deleteWishlistItemApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["wishlist"]);
      },
    }
  );

  return { deleteWishlistItem, isLoading };
}

export function useWishlist() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlistItemsApi,
  });
  if (error) {
    console.log("error", error);
  }
  //   console.log(response);
  return { isLoading, data };
}