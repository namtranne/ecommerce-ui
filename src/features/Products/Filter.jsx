import { BrandFilter } from "./Filter/BrandFilter";
import { CategoryFilter } from "./Filter/CategoryFilter";
import PriceFilter from "./Filter/PriceFilter";
function Filter({ updateFilter, applyFilters, minPrice, maxPrice }) {
  return (
    <div className="mr-12 text-[#393E46]">
      <div className="mb-2">
        <input
          type="text"
          name="text"
          placeholder="Search"
          onChange={(e) => updateFilter("keyWord", e.target.value)}
          className="p-2 border-transparent tracking-[var(--spacing)] shadow-sm text-black"
        />
      </div>

      {/* categories */}
      <div className="mb-1 text-[#393E46]">
        <CategoryFilter />

        {/* brand */}
        <BrandFilter updateFilter={updateFilter} />

        <PriceFilter
          updateFilter={updateFilter}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        <button
          type="button"
          className="mt-4 bg-blue-500 text-[#393E46] font-bold rounded rounded-lg py-2 px-4"
          onClick={applyFilters}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
