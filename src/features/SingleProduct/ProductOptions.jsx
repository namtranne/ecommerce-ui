import React from "react";
export function ProductOptions({ configurableProducts }) {
  return (
    <div>
      {configurableProducts?.map((product) => {
        return (
          <button
            className="text-xl mb-4 p-4 border-black border-[1px] mr-2"
            key={product.id}
          >
            {product.option1} {product.option2 && " " + product.option2}
            <div className="flex"></div>
          </button>
        );
      })}
    </div>
  );
}
