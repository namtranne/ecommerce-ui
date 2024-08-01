import React, { createContext, useContext, useEffect, useState } from "react";
import Filter from "../features/Products/Filter";
import ProductReviewModal from "../features/Products/ProductReviewModal";
import BreadCrumbs from "../features/Products/BreadCrumbs";
import ProductView from "../features/Products/ProductView";
import { getProducts } from "../services/apiProduct";
import { useParams } from "react-router-dom";
const ProductContext = createContext();

function Products() {
  const { categoryId } = useParams();
  const [reviewProduct, setReviewProduct] = useState(null);
  const [data, setData] = useState({
    content: [],
    empty: false,
    first: true,
    last: false,
    totalElements: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState({
    categoryId: categoryId,
    keyWord: "",
    brand: "",
    minPrice: 0,
    maxPrice: 999999999,
    sortBy: "price",
    sortDir: "des",
  });

  const fetchProduct = async () => {
    setIsLoading(true);
    setPage(0);
    const newData = await getProducts({ ...filter, page: 0 });
    newData.first = false;
    setData(newData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const updateFilter = async (attribute, value) => {
    if (attribute == "page") {
      setIsLoading(true);
      setPage((prev) => prev + 1);
      const newData = await getProducts({ ...filter, page: page + 1 });
      newData.content = [...data.content, ...newData.content];
      setData(newData);
      setIsLoading(false);
    } else {
      setFilter((prev) => {
        const newFilter = { ...prev };
        newFilter[attribute] = value;
        return newFilter;
      });
    }
  };

  const { content, empty, first, last, totalElements } = data;

  // Function to apply filters
  const applyFilters = async () => {
    setData({
      content: [],
      empty: false,
      first: true,
      last: false,
      totalElements: 0,
    });
    setIsLoading(true);
    await fetchProduct();
    setIsLoading(false);
  };

  return (
    <ProductContext.Provider value={{ reviewProduct, setReviewProduct }}>
      <div>
        <BreadCrumbs />
        <div className="bg-[#F7F7F7] p-4 min-h-screen">
          <div className="flex flex-row px-32 py-8">
            <Filter
              updateFilter={updateFilter}
              totalElements={totalElements}
              applyFilters={applyFilters}
              minPrice={filter.minPrice}
              maxPrice={filter.maxPrice}
            />
            <ProductView
              isLoading={isLoading}
              data={content}
              updateFilter={updateFilter}
              empty={empty}
              first={first}
              last={last}
              totalElements={totalElements}
            />
          </div>
          <ProductReviewModal />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export const useReviewProduct = () => {
  return useContext(ProductContext);
};

export default Products;
