import { Input, Slider } from "antd";
import React from "react";

function PriceFilter({ updateFilter, minPrice, maxPrice }) {
  console.log(minPrice, maxPrice);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFilter(name, value);
  };

  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold">Price</p>
      <div className="flex flex-col ">
        <div className="flex flex-row items-center mb-2">
          <a className="text-sm font-medium mb-1 mr-2">From</a>
          <div className="flex flex-row items-center">
            <Input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={handleInputChange}
              className="input text-right text-black text-sm font-bold border border-gray-300 rounded p-1"
              min={0}
              max={maxPrice}
              style={{ width: "90px" }}
            />
            <a className="text-sm font-medium ml-2">VND</a>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <a className="text-sm font-medium mb-1 mr-2">
            {"To"}
            <span className="text-transparent">oo</span>
          </a>
          <div className="flex flex-row items-center">
            <Input
              type="number"
              name="maxPrice"
              value={maxPrice}
              onChange={handleInputChange}
              className="input text-right text-black text-sm font-bold border border-gray-300 rounded p-1"
              min={minPrice}
              max={999999999}
              style={{ width: "90px" }}
            />
            <a className="text-sm font-medium ml-2">VND</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
