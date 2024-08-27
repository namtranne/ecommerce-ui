import { useState } from "react";
import { formatPrice } from "../../utils/product";

function CartView({ products }) {
  const [amount, setAmount] = useState(1);
  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li
            key={index}
            className="bg-[#393e46] p-3 mb-5 rounded-lg hover:shadow-md transition-shadow duration-300 text-white"
          >
            <div className="flex flex-row justify-between items-center">
              <img
                src={product.image}
                // alt={product.name}
                className="w-1/6 h-fit text-sm border border-solid border-black rounded-md shadow-md"
              />
              <div className="flex flex-col justify-center w-4/6">
                <div className="text-lg font-bold mb-2">
                  {product.product?.name}
                </div>
                <div className="text-base mb-2">
                  {product.option1} {product.option2 && " | " + product.option2}
                </div>
                <div className="flex flex-row">
                  <div className="bg-[var(--light-grayish-blue)] mr-4 p-2 rounded-md px-4">
                    <button className="text-black" onClick={decreaseAmount}>
                      -
                    </button>
                    <div className="border-l-2  mx-1 inline-block min-h-4" />
                    <span className="text-black">{product.quantity}</span>
                    <div className="border-l-2  mx-1 inline-block min-h-4" />
                    <button className="text-black" onClick={increaseAmount}>
                      +
                    </button>
                  </div>
                  <div className="h-full flex items-center font-bold text-lg text-titanium-100">
                    {formatPrice(product.product?.price * product.quantity)}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartView;
