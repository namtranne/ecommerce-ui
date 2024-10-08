import { Badge, Col } from "antd";
import ProductContent from "./ProductContent";
import { useState } from "react";

function ProductCard({ product, isLoading }) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  return (
    <Col
      className="gutter-row"
      sm={24}
      md={12}
      lg={6}
      key={product ? product.id : Math.floor(Math.random() * 100)}
    >
      <ProductContent
        isLoading={isLoading}
        product={product}
        handleMouseLeave={handleMouseLeave}
        handleMouseEnter={handleMouseEnter}
        isHover={isHover}
      />
    </Col>
  );
}
export default ProductCard;
