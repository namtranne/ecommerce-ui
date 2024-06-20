import authAxios from "../utils/axios";

export async function getCategoriesProductsPage(id) {
  const params = {};
  if (id) {
    params.id = id;
  }
  const data = await authAxios
    .get(`/categories/products-page-data`, { params: params })
    .then((response) => response.data)
    .catch((err) => {
      5173(err);
    });
  return data;
}
