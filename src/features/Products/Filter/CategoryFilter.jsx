import React from "react";
import { useCategoriesProductsPage } from "../../../hooks/useCategory";
import BarLoader from "../../../ui/BarLoader";
import CategoryCard from "./CategoryCard";
import { Skeleton } from "antd";
export function CategoryFilter() {
  const { isLoading, data, error } = useCategoriesProductsPage();

  if (isLoading) {
    return (
      <div className="mb-4">
        <p className="mb-1 text-xl font-bold">Category</p>
        <Skeleton active />
      </div>
    );
  }

  const baseUrl = window.location.origin;
  const { subCategories } = data;
  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold">Category</p>
      <div className="w-44">
        {subCategories.map((category) => {
          return (
            <CategoryCard
              heading={category.name}
              imgSrc={category.image}
              key={category.id}
              href={`${baseUrl}/products/` + category.id}
            ></CategoryCard>
          );
        })}
      </div>
    </div>
  );
}
