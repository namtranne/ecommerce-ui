import { toast } from "react-toastify";
import authAxios, { isLogin } from "../utils/axios";

export async function getUserOrders() {
  if (!isLogin()) return null;
  try {
    const res = await authAxios.get("/auth/order/user");
    console.log(res);
    if (res.status == 200) {
      return res.data;
    } else {
      toast.error("Fail to get user addresses");
    }
  } catch (error) {
    throw new Error(error);
  }
}
