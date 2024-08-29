import React from "react";
import { getProducts } from "../../services/apiProduct";
import { useState, useEffect } from "react";
import MarketingProductView from "./MarketingProductView";

function Marketing(category) {
  console.log(category);
  const [data, setData] = useState({ content: [] });
  const [brandData, setBrandData] = useState({ content: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({
    categoryId: category.category,
    keyWord: "",
    brand: "",
    minPrice: category.price - 5000000,
    maxPrice: category.price + 5000000,
    sortBy: "price",
    sortDir: "des",
  });

  const [brandFilter, setBrandFilter] = useState({
    categoryId: 0,
    keyWord: "",
    brand: category.brand,
    minPrice: 0,
    maxPrice: 99999999,
    sortBy: "price",
    sortDir: "des",
  });

  const fetchProduct = async (currentProductId) => {
    setIsLoading(true);
    try {
      const newData = await getProducts({ ...filter, page: 0 });
      if (newData && newData.content) {
        const filteredData = newData.content.filter(
          (product) => product.id !== currentProductId
        );
        const slicedData = filteredData.slice(0, 5);
        setData(slicedData);
      } else {
        console.error("Invalid data structure:", newData);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProductByBrand = async (currentProductId) => {
    setIsLoading(true);
    try {
      const newData = await getProducts({ ...brandFilter, page: 0 });
      if (newData && newData.content) {
        console.log(newData);
        const filteredData = newData.content.filter(
          (product) => product.id !== currentProductId
        );
        const slicedData = filteredData.slice(0, 5);
        setBrandData(slicedData);
      } else {
        console.error("Invalid data structure:", newData);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct(category.id);
    fetchProductByBrand(category.id);
  }, [filter, brandFilter]);
  return (
    <div className="flex w-full justify-center items-center">
      <div className="mb-5 w-[97vw] uppercase tracking-wider text-xl font-bold">
        <div className="mb-8">
          <span className="self-start">People also buy</span>
          <MarketingProductView isLoading={isLoading} products={data} />
        </div>
        <div>
          <span className="self-start">More from the brand</span>
          <MarketingProductView isLoading={isLoading} products={brandData} />
        </div>
      </div>
    </div>
  );
}

export default Marketing;
