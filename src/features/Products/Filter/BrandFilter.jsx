import React from "react";
import { useBrand } from "../../../hooks/useBrand";
import { Select, Skeleton } from "antd";
import BarLoader from "../../../ui/BarLoader";

export function BrandFilter({ updateFilter }) {
  const { isLoading, data, error } = useBrand();
  const brand = localStorage.getItem("brand") || "";
  if (isLoading) {
    return (
      <div className="mb-4">
        <p className="mb-1 text-xl font-bold">Brand</p>
        <Skeleton.Input active />
      </div>
    );
  }
  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold">Brand</p>
      <Select
        defaultValue={brand}
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
