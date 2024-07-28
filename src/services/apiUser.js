import { toast } from "react-toastify";
import authAxios, { isLogin } from "../utils/axios";

export async function getUserDetails() {
  try {
    if (!isLogin()) return null;
    const { data } = await authAxios.get("/auth/userdetail");
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUserDetails(userDetails) {
  const response = await authAxios.post("/auth/userdetail/edit", userDetails);
  if (!response.data.status == "OK") {
    toast.error("Fail to update user details");
  } else {
    toast.success("User details updated");
  }
}

export async function addUserAddressApi(address) {
  const response = await authAxios.post("/auth/user/address/add", address);
  console.log(response);
  if (!response.data.status == "OK") {
    toast.error(response.data.message);
  } else {
    toast.success(response.data.message);
  }
}

export async function getUserAddresses() {
  if (!isLogin()) return null;
  try {
    const res = await authAxios.get("/auth/user/address");
    if (res.status == 200) {
      return res.data;
    } else {
      toast.error("Fail to get user addresses");
    }
  } catch (error) {
    throw new Error(error);
  }
}
