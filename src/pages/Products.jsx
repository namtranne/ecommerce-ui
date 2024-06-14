import { useProducts } from "../hooks/useProduct";

function Products() {
  const { isLoading, products, error } = useProducts();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(products);
  return (
    <>
      {products.map((product) => {
        return <p key={product.id}>{product.name}</p>;
      })}
    </>
  );
}

export default Products;
