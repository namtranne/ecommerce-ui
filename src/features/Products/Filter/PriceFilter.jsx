import { Slider } from "antd";
import React from "react";

function PriceFilter({ updateFilter, minPrice, maxPrice }) {
  console.log(minPrice, maxPrice);
  const handleChange = (value) => {
    if (value[0] !== minPrice) {
      updateFilter("minPrice", value[0]);
    }
    if (value[1] !== maxPrice) {
      updateFilter("maxPrice", value[1]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFilter(name, value);
  };

  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold">Price</p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <a>From</a>
          <a>To</a>
        </div>
        <div className="flex flex-col mx-2">
          <input
            type="number"
            name="minPrice"
            value={minPrice}
            onChange={handleInputChange}
            className="input text-right text-black text-sm font-bold"
            min={0}
            max={maxPrice}
            style={{ width: "90px" }}
          />
          <input
            type="number"
            name="max"
            value={maxPrice}
            onChange={handleInputChange}
            className="input text-right text-black text-sm font-bold"
            min={minPrice}
            max={999999999}
            style={{ width: "90px" }}
          />
        </div>
        <div className="flex flex-col">
          <a>VND</a>
          <a>VND</a>
        </div>
      </div>
      <Slider
        range
        value={[minPrice, maxPrice]}
        onChange={handleChange}
        min={0}
        max={999999999}
      />
    </div>
  );
}

export default PriceFilter;
