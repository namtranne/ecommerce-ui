import authAxios from "../utils/axios";

export async function getBrands() {
  const data = await authAxios
    .get(`/brands`)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
  return data;
}
