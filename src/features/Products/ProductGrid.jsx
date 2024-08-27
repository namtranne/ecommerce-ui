import { Row } from "antd";
import ProductCard from "./ProductGrid/ProductCard";

function ProductGrid({ products, isLoading }) {
  return (
    <div className="w-full">
      <Row gutter={[16, 32]}>
        {products.map((product, index) => {
          return (
            <ProductCard
              isLoading={isLoading}
              product={product}
              key={isLoading ? index : product.id}
            ></ProductCard>
          );
        })}
      </Row>
    </div>
  );
}

export default ProductGrid;
