import { Slider } from "antd";
import React, { useState } from "react";

function PriceFilter({}) {
  const [price, setPrice] = useState({ min: 0, max: 100 });

  const handleChange = (value) => {
    setPrice({
      min: value[0],
      max: value[1],
    });
  };

  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold">Price</p>
      <p>From: {price.min} VND</p>
      <p>To: {price.max} VND</p>
      <Slider
        range
        defaultValue={[price.min, price.max]}
        onChange={handleChange}
      />
    </div>
  );
}

export default PriceFilter;
