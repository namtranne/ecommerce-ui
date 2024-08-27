import { formatPrice } from "../../utils/product";
import { useNavigate } from "react-router-dom";
import { useDeleteWishlistItem } from "../../hooks/useUser";

export default function WishlistItem({ products }) {
  const navigate = useNavigate();
  const productList = Array.isArray(products) ? products : [];
  const { deleteWishlistItem } = useDeleteWishlistItem();

  const handleItemClick = (productId) => {
    navigate(`/products/product-info?id=${productId}`);
  };

  const handleDeleteItem = (productId) => {
    deleteWishlistItem({ productId });
  };

  return (
    <div>
      <ul>
        {productList.map((product, index) => (
          <div className="flex h-fit mb-5">
            <li
              key={index}
              onClick={() => handleItemClick(product.id)}
              className="flex flex-1 bg-[#393e46] p-3 rounded-l-lg hover:shadow-lg transition-all duration-300 text-white items-center justify-center hover:cursor-pointer hover:bg-[#5e636b]"
            >
              <div className="flex flex-row w-11/12 justify-between">
                <div className="flex">
                  <img
                    src={product.thumbnailUrl}
                    // alt={product.name}
                    className="w-[100px] text-sm border border-solid border-black rounded-md shadow-md mr-2"
                  />
                  <div className="flex justify-center items-center">
                    <div className="text-lg font-bold mr-2">{product.name}</div>
                  </div>
                </div>
                <div className="flex font-bold text-lg text-titanium-100 items-center">
                  {formatPrice(product.price)}
                </div>
              </div>
            </li>
            <div
              onClick={() => handleDeleteItem(product)}
              className="w-1/12 bg-red-700 rounded-r-lg text-center items-center flex justify-center transition-all duration-300 hover:cursor-pointer hover:bg-red-800"
            >
              <span className="text-white font-semibold">Remove from wishlist</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
