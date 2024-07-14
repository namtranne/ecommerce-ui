import authAxios from "../utils/axios";

export async function getProducts(config) {
  const data = await authAxios
    .post(`/products/category`, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
  return data;
}
