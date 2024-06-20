import React, { createContext, useContext, useState } from "react";
import Filter from "../features/Products/Filter";
import ProductReviewModal from "../features/Products/ProductReviewModal";
import BreadCrumbs from "../features/Products/BreadCrumbs";
import ProductView from "../features/Products/ProductView";

const ProductContext = createContext();

function Products() {
  const [reviewProduct, setReviewProduct] = useState(null);
  return (
    <ProductContext.Provider value={{ reviewProduct, setReviewProduct }}>
      <BreadCrumbs />
      <div className="bg-[#F8F8F8] p-4 min-h-screen">
        <div className="flex flex-row px-32 py-8">
          <Filter />
          <ProductView />
        </div>
        <ProductReviewModal />
      </div>
    </ProductContext.Provider>
  );
}

export const useReviewProduct = () => {
  return useContext(ProductContext);
};

export default Products;
