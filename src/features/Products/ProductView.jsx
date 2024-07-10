import { useState } from "react";
import { useProducts } from "../../hooks/useProduct";
import CartLoader from "../../ui/CartLoader";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import Sort from "./Sort";
import NeubrutalismButton from "../../ui/NeubrutalismButton";

function ProductView({ filter }) {
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

  const { content: products } = data;

  console.log(filter);
  const filteredProducts = products.filter((product) => {
    // Assuming product.brand is an object with a name property that is a string
    const meetsBrandCriteria = filter.brand
      ? product.brand.name.toLowerCase().includes(filter.brand.toLowerCase())
      : true;
    const meetsPriceCriteria = filter.price
      ? product.price >= filter.price.min && product.price <= filter.price.max
      : true;
    return meetsBrandCriteria && meetsPriceCriteria;
  });
  console.log(filteredProducts);

  return (
    <div className="w-full">
      <Sort
        isGridView={isGridView}
        setGridView={setGridView}
        setListView={setListView}
      />
      {isGridView ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <ProductList products={filteredProducts} />
      )}
      <div className="flex w-full justify-center py-8">
        <NeubrutalismButton text="LOAD MORE..." />
      </div>
    </div>
  );
}

export default ProductView;
