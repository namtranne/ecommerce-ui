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
  const setGridView = () => {
    setIsGridView(true);
  };
  const setListView = () => {
    setIsGridView(false);
  };
  if (isLoading && first) {
    return (
      <div className="w-full">
        <Sort
          isGridView={isGridView}
          setGridView={setGridView}
          setListView={setListView}
          totalElements={0}
          updateFilter={updateFilter}
        />
        {isGridView ? (
          <ProductGrid
            isLoading={isLoading}
            products={new Array(24).fill(null)}
          />
        ) : (
          <ProductList
            isLoading={isLoading}
            products={new Array(24).fill(null)}
          />
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
