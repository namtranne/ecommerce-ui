import React from "react";
import { useBrand } from "../../../hooks/useBrand";
import { Select } from "antd";
import BarLoader from "../../../ui/BarLoader";

export function BrandFilter({ updateFilter }) {
  const { isLoading, data, error } = useBrand();
  if (isLoading) {
    return (
      <div className="mb-4">
        <p className="mb-1 text-xl font-bold">Brand</p>
        <BarLoader />
      </div>
    );
  }
  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold">Brand</p>
      <Select
        defaultValue={""}
        style={{ width: 120 }}
        // onChange={handleChange}
        options={data.map((brand) => ({
          value: brand.name,
          label: brand.name,
        }))}
        onChange={(selectBrand) => updateFilter("brand", selectBrand)}
      />
    </div>
  );
}
