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
