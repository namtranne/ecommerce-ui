import { useState } from "react";
import { useProducts } from "../../hooks/useProduct";
import CartLoader from "../../ui/CartLoader";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import Sort from "./Sort";
import NeubrutalismButton from "../../ui/NeubrutalismButton";

function ProductView() {
  const { isLoading, data, error } = useProducts();
  const [isGridView, setIsGridView] = useState(true);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-96 ">
        <CartLoader />
      </div>
    );
  }
  const setGridView = () => {
    setIsGridView(true);
  };

  const setListView = () => {
    setIsGridView(false);
  };

  const products = data;
  return (
    <div className="w-full">
      <Sort
        isGridView={isGridView}
        setGridView={setGridView}
        setListView={setListView}
      />
      {isGridView ? (
        <ProductGrid products={products} />
      ) : (
        <ProductList products={products} />
      )}
      <div className="flex w-full justify-center py-8">
        <NeubrutalismButton text="LOAD MORE..." />
      </div>
    </div>
  );
}

export default ProductView;
