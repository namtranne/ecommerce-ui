import { BrandFilter } from "./Filter/BrandFilter";
import { CategoryFilter } from "./Filter/CategoryFilter";
import PriceFilter from "./Filter/PriceFilter";
function Filter() {
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
        <BrandFilter />

        <PriceFilter />
      </div>
    </div>
  );
}

export default Filter;
