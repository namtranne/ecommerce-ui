import { useQueryClient } from "@tanstack/react-query";
import authAxios from "../utils/axios";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export async function getProducts(config) {
  const data = await authAxios
    .post(`/products/category`, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
  return data;
}

export async function getProductInfo(productId) {
  const data = await authAxios
    .get(`/products/product-info`, { params: { id: productId - 0 } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
  return data;
}

export function validateProductInfo() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const queryClient = useQueryClient();
  const isValid = localStorage.getItem("productId") == productId;
  if (!isValid) {
    queryClient.invalidateQueries(["product-info"]);
  }
}

export async function addProductReviewApi(review) {
  try {
    const response = await authAxios.post("/review/add", review);
    toast.success(response.data.message);
  } catch (err) {
    toast.error(err.response.data.message);
  }
}

export async function getProductReview(productId) {
  const response = await authAxios.get("/review", {
    params: { productId: productId },
  });
  console.log(response);
  if (response.status == 200) {
    return response.data;
  } else {
    toast.error("Can not load product review");
    return [];
  }
}
