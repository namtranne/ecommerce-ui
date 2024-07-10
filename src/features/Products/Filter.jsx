import { BrandFilter } from "./Filter/BrandFilter";
import { CategoryFilter } from "./Filter/CategoryFilter";
import PriceFilter from "./Filter/PriceFilter";
import { useState } from "react";
function Filter({onFilterChange}) {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState({ min: 0, max: 100000000 });

  // Function to handle brand filter change
  const handleBrandChange = (newBrand) => {
    setBrand(newBrand);
  };

  // Function to handle price filter change
  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
  };

  // Function to apply filters
  const applyFilters = () => {
    console.log("Applying filters with:", { brand, price });
    // Here you would typically make an API call or filter your data based on these values
    onFilterChange({ brand, price });
  };
  return (
    <div className="mr-12 text-white">
      <div className="mb-2">
        <input
          type="text"
          name="text"
          //   value={text}
          placeholder="Search"
          //   onChange={updateFilters}
          className="p-2 border-transparent tracking-[var(--spacing)] shadow-sm"
        />
      </div>

      {/* categories */}
      <div className="mb-1">
        <CategoryFilter />

        {/* brand */}
        <BrandFilter onChange={handleBrandChange}/>

        <PriceFilter onChange={handlePriceChange}/>

        <button
          type="button"
          className="mt-4 bg-blue-500 text-white font-bold rounded rounded-lg py-2 px-4"
          onClick={applyFilters}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
