import { Row } from "antd";
import ProductCard from "./ProductGrid/ProductCard";

function ProductGrid({ products }) {
  return (
    <div className="w-full">
      <Row gutter={[16, 32]}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id}></ProductCard>;
        })}
      </Row>
    </div>
  );
}

export default ProductGrid;
