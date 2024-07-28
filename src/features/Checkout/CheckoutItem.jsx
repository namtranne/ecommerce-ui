import { useState } from "react";

export default function CheckoutItem({ products }) {
  return (
    <div>
      <ul>
        {products?.map((product, index) => (
          <li
            key={index}
            className="bg-[black] p-3 mb-5 rounded-lg hover:shadow-md transition-shadow duration-300 text-white"
          >
            <div className="flex flex-row justify-between">
              <div className="flex">
                <img
                  src={product.image}
                  // alt={product.name}
                  className="w-[40px] h-[40px] text-sm border border-solid border-black rounded-md shadow-md mr-2"
                />
                <div className="flex justify-center items-center">
                  <div className="text-lg font-bold mr-2">
                    {product.product?.name}
                  </div>
                  <div className="text-base mr-2">
                    {product.option1}{" "}
                    {product.option2 && " | " + product.option2}
                  </div>
                </div>
              </div>
              <div className="flex font-bold text-lg text-titanium-100 items-center">
                VND {product.product?.price * product.quantity} x{" "}
                {product.quantity}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
