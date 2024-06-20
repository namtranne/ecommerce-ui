import { Badge, Col } from "antd";
import ProductContent from "./ProductContent";
import { useState } from "react";

function ProductCard({ product }) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  return (
    <Col className="gutter-row" sm={24} md={12} lg={6} key={product.id}>
      <ProductContent
        product={product}
        handleMouseLeave={handleMouseLeave}
        handleMouseEnter={handleMouseEnter}
        isHover={isHover}
      />
    </Col>
  );
}
export default ProductCard;
