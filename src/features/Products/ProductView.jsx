import { useState } from "react";
import CartLoader from "../../ui/CartLoader";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import Sort from "./Sort";
import NeubrutalismButton from "../../ui/NeubrutalismButton";

function ProductView({
  isLoading,
  data,
  updateFilter,
  first,
  last,
  empty,
  totalElements,
}) {
  const [isGridView, setIsGridView] = useState(true);
  if (isLoading && first) {
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

  return (
    <div className="w-full">
      <Sort
        isGridView={isGridView}
        setGridView={setGridView}
        setListView={setListView}
        totalElements={totalElements}
        updateFilter={updateFilter}
      />
      {isGridView ? (
        <ProductGrid products={data} />
      ) : (
        <ProductList products={data} />
      )}
      {!last && (
        <div className="flex w-full justify-center py-8">
          <NeubrutalismButton
            handleClick={() => updateFilter("page", 1)}
            isLoading={isLoading}
            text="LOAD MORE..."
          />
        </div>
      )}
    </div>
  );
}

export default ProductView;
