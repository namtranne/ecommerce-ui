import React, { createContext, useContext, useState } from "react";
import Filter from "../features/Products/Filter";
import ProductReviewModal from "../features/Products/ProductReviewModal";
import BreadCrumbs from "../features/Products/BreadCrumbs";
import ProductView from "../features/Products/ProductView";

const ProductContext = createContext();

function Products() {
  const [reviewProduct, setReviewProduct] = useState(null);
  const [filter, setFilter] = useState("");

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
    console.log(newFilter)
  }
  return (
    <ProductContext.Provider value={{ reviewProduct, setReviewProduct }}>
      <div className="mt-[70px]">
        <BreadCrumbs />
        <div className="bg-gray-900 p-4 min-h-screen">
          <div className="flex flex-row px-32 py-8">
          <Filter onFilterChange={updateFilter}/>
          <ProductView filter={filter}/>
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
