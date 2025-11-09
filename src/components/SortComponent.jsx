const sortOptions = [
  { value: "", title: "Default" },
  { value: "PriceHighToLow", title: "Price High to Low" },
  { value: "PriceLowToHigh", title: "Price Low to High" },
  { value: "RatingHighToLow", title: "Rating High to Low" },
  { value: "RatingLowToHigh", title: "Rating Low to High" },
];

const SortComponent = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2">
      <label className="text-sm font-semibold text-gray-700 whitespace-nowrap">
        Sort by:
      </label>
      <select
        className="bg-white border-0 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded cursor-pointer flex-1"
        value={sortBy || ""}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {sortOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortComponent;

