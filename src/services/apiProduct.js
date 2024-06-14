import authAxios from "../utils/axios";

export async function getProducts(limit, page) {
  const data = await authAxios
    .get(`/products`, { params: { limit: limit, page: page } })
    .then((response) => response.data.content)
    .catch((err) => {
      console.log(err);
    });
  return data;
}
