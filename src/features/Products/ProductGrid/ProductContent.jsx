import { motion } from "framer-motion";
import { useReviewProduct } from "../../../pages/Products";

function ProductContent({
  product,
  handleMouseEnter,
  handleMouseLeave,
  isHover,
}) {
  const { setReviewProduct } = useReviewProduct();

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
  }

  return (
    <motion.div
      className="shadow-lg overflow-hidden bg-black relative"
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={product.thumbnailUrl} alt="" className="w-full" />
      <motion.div
        className="p-[25px] rounded-b-sm bg-black h-44 -bottom-2 right-0 w-full"
        style={{
          transform: isHover ? "translateY(-30px)" : "translateY(0)",
          transition: "transform 0.3s",
        }}
      >
        <p className="font-semibold mb-2 text-xs text-[#FFF5E1]">
          {product.brand.name}
        </p>
        <p className="text-xs font-bold text-white">
          {product.name.length > 60
            ? `${product.name.slice(0, 60)}...`
            : product.name}
        </p>
        <div
          className="font-bold text-[#3f60d7]"
          style={{ fontSize: "0.8rem", fontHeight: "1rem" }}
        >
          {product.originalPrice !== product.price && (
            <div className="text-[#C80036] flex items-center w-full">
              <div>{formatPrice(product.price)}</div>
              <div
                className="inline text-white bg-[#C80036] p-1 ml-2"
                style={{ fontSize: "0.5rem" }}
              >
                SALE {product.discountRate}%
              </div>
            </div>
          )}
          <p
            style={{
              textDecorationLine:
                product.originalPrice !== product.price
                  ? "line-through"
                  : "none",
            }}
            className={
              product.originalPrice !== product.price ? " text-gray-400" : ""
            }
          >
            {formatPrice(product.originalPrice)}
          </p>
        </div>
        <div
          className="absolute top-36 text-[11px] font-bold mt-4"
          style={{ opacity: isHover ? 1 : 0 }}
        >
          <motion.button
            onClick={() => setReviewProduct(product)}
            className="mr-4 text-[#3f60d7] font-extrabold"
            whileHover={{ color: "#068FFF" }}
          >
            QUICKVIEW
          </motion.button>
          <motion.button
            className="mr-4 text-[#3f60d7] font-extrabold"
            whileHover={{ color: "#068FFF" }}
          >
            BUY PRODUCT
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductContent;
