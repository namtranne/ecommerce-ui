import { motion } from "framer-motion";
import { useReviewProduct } from "../../../pages/Products";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";

function ProductContent({
  isLoading,
  product,
  handleMouseEnter,
  handleMouseLeave,
  isHover,
}) {
  const navigate = useNavigate();
  const { setReviewProduct } = useReviewProduct();

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
  }

  const handleClick = () => {
    navigate(`/products/product-info?id=${product.id}`); // Step 3: Adjust the path as needed
  };

  if (isLoading) {
    return (
      <motion.div
        className="shadow-lg overflow-hidden bg-[white] relative hover:cursor-pointer"
        initial={{ opacity: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <div
          role="status"
          class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              class="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>

        <motion.div
          className="p-[25px] rounded-b-sm bg-[#393E46] h-44 -bottom-2 right-0 w-full"
          style={{
            transform: isHover ? "translateY(-30px)" : "translateY(0)",
            transition: "transform 0.3s",
          }}
        >
          <Skeleton />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="shadow-lg overflow-hidden bg-white relative hover:cursor-pointer"
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={product.thumbnailUrl}
        alt=""
        className="w-full"
        onClick={handleClick}
      />
      <div className="bg-[#393E46]">
        <motion.div
          className="p-[25px] bg-[#393E46] w-full"
          style={{
            transform: isHover ? "translateY(-30px) scale(1.05)" : "translateY(0) scale(1)",
            transition: "transform 0.3s, scale 0.3s",
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
              onClick={handleClick}
            >
              BUY PRODUCT
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductContent;
