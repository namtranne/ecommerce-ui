import { Slider } from "antd";
import React, { useState } from "react";

function PriceFilter({ onChange }) {
  const handlePriceChange = (minValue, maxValue) => {
    onChange({ min: minValue, max: maxValue }); // Call the passed onChange function with the new price range
  };
  const [price, setPrice] = useState({ min: 0, max: 100000000 });

  const handleChange = (value) => {
    const newPrice = {
      min: value[0],
      max: value[1],
    };
    setPrice(newPrice);
    handlePriceChange(newPrice.min, newPrice.max);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newPrice = {
      ...price,
      [name]: Number(value), // Ensure value is treated as a number
    };
    setPrice(newPrice);
    handlePriceChange(newPrice.min, newPrice.max);
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
            name="min"
            value={price.min}
            onChange={handleInputChange}
            className="input text-right"
            min={0}
            max={price.max}
            style={{ width: "90px" }}
          />
          <input
            type="number"
            name="max"
            value={price.max}
            onChange={handleInputChange}
            className="input text-right"
            min={price.min}
            max={100000000}
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
        defaultValue={[price.min, price.max]}
        onChange={handleChange}
        min={0}
        max={100000000}
      />
    </div>
  );
}

export default PriceFilter;
