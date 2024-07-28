import React from "react";

export function ProductOptions({
  configurableProducts,
  configurableProduct,
  setProductConfiguration,
}) {
  return (
    <div>
      {configurableProducts?.map((product) => (
        <button
          onClick={() => setProductConfiguration(product)}
          key={product.id}
          className={`text-xl mb-4 p-4 border-black border-[1px] mr-2 ${
            product === configurableProduct ? "bg-black text-white" : ""
          }`}
        >
          {product.option1} {product.option2 && " " + product.option2}
          <div className="flex"></div>
        </button>
      ))}
    </div>
  );
}
