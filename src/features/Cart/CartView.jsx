import { useState } from "react";

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
            className="bg-[#ededed] p-3 mb-5 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-row justify-between">
              <img
                src={product.image}
                alt={product.name}
                className="w-1/6 text-sm"
              />
              <div className="flex flex-col justify-center w-4/6">
                <div className="text-lg font-bold">{product.name}</div>
                <div className="flex flex-row">
                  <div className="flex flex-row items-center text-md font-semibold outline outline-2 outline-[#455f63] w-fit h-fit px-1 rounded-sm mr-auto">
                    <button
                      className="text-black"
                      onClick={decreaseAmount}
                    >
                      -
                    </button>
                    <div className="border-l-2 border-[#455f63] mx-1 inline-block min-h-4" />
                    <span className="text-black">{amount}</span>
                    <div className="border-l-2 border-[#455f63] mx-1 inline-block min-h-4" />
                    <button
                      className="text-black"
                      onClick={increaseAmount}
                    >
                      +
                    </button>
                  </div>
                  <div>${product.price*amount}</div>
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
