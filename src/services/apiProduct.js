import authAxios from "../utils/axios";

export async function getProducts(limit, page, categoryId) {
  const data = await authAxios
    .get(`/products/category`, {
      params: { limit: limit, page: page, categoryId: categoryId },
    })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
  return data;
}
