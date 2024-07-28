import { toast } from "react-toastify";
import authAxios, { isLogin } from "../utils/axios";

export async function addCartItemApi(item) {
  const response = await authAxios.post("/auth/cart/add", item);
  if (!response.data.status == "OK") {
    toast.error(response.data.message);
  } else {
    toast.success(response.data.message);
  }
}

export async function getCartItemsApi() {
  if (!isLogin()) return null;
  try {
    const res = await authAxios.get("/auth/cart");
    console.log(res);
    if (res.status == 200) {
      return res.data;
    } else {
      toast.error("Fail to get cart items");
    }
  } catch (error) {
    throw new Error(error);
  }
}
