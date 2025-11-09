const Chip = ({ label, onDelete }) => {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
      {label}
      <button
        onClick={onDelete}
        className="ml-1 text-blue-600 hover:text-blue-800"
      >
        ×
      </button>
    </span>
  );
};

function CategoryChip({ item, onChangeCategory }) {
  return (
    <Chip label={item} onDelete={() => onChangeCategory(item, false)} />
  );
}

function PriceChip({ selectedPrice, onChangePrice, priceRange }) {
  return (
    <Chip
      label={`Price: $${selectedPrice.min}-$${selectedPrice.max}`}
      onDelete={() => onChangePrice(priceRange.min, priceRange.max, true)}
    />
  );
}

function RatingChip({ selectedRating, onChangeRating }) {
  return (
    <Chip
      label={`Rating: ${selectedRating === 5 ? "5.0" : selectedRating.toFixed(1) + " & Up"}`}
      onDelete={() => onChangeRating("")}
    />
  );
}

const AppliedFilters = ({
  selectedCategory,
  onChangeCategory,
  selectedPrice,
  onChangePrice,
  selectedRating,
  onChangeRating,
  onClearAll,
  priceRange,
}) => {
  const isAnyFilter =
    selectedCategory.length +
    (selectedPrice.isApplied ? 1 : 0) +
    (selectedRating ? 1 : 0);

  if (!isAnyFilter) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 py-2">
      <span className="text-sm font-medium text-gray-700">Filtered By:</span>
      {!!selectedCategory.length &&
        selectedCategory.map((item) => (
          <CategoryChip
            key={item}
            item={item}
            onChangeCategory={onChangeCategory}
          />
        ))}
      {selectedPrice.isApplied && (
        <PriceChip 
          selectedPrice={selectedPrice} 
          onChangePrice={onChangePrice}
          priceRange={priceRange}
        />
      )}
      {selectedRating && (
        <RatingChip
          selectedRating={selectedRating}
          onChangeRating={onChangeRating}
        />
      )}
      {isAnyFilter > 0 && (
        <button
          onClick={onClearAll}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default AppliedFilters;

