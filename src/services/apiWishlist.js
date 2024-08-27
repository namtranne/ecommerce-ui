import { toast } from "react-toastify";
import authAxios, { isLogin } from "../utils/axios";

export async function addWishListItemApi(item) {
  console.log(item);
  const response = await authAxios.post("/auth/wishlist", item);

  if (!response.data.status == "OK") {
    toast.error(response.data.message);
  } else {
    toast.success(response.data.message);
  }
}

export async function getWishlistItemsApi() {
  if (!isLogin()) return null;
  try {
    const res = await authAxios.get("/auth/wishlist");
    console.log(res);
    if (res.status == 200) {
      return res.data.wishList;
    } else {
      toast.error("Fail to get wishlist items");
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteWishlistItemApi(item) {
  console.log(item.productId.id);
  try {
    const response = await authAxios.delete("/auth/wishlist", {
      data: { productId: item.productId.id },
    });

    if (response.status === 200) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "An error occurred");
    console.error(error);
  }
}
