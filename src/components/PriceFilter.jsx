import MultiRangeSlider from "./MultiRangeSlider";
import { priceRange } from "../utils/product-queries";

const PriceFilter = ({ initPriceRange, onChangePrice, isClear, selectedPrice }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="font-bold text-base text-gray-800">Price Range</h3>
        </div>
      </div>
      <div className="p-4 pt-6">
        <MultiRangeSlider
          min={priceRange.min}
          max={priceRange.max}
          initPriceRange={initPriceRange}
          isClear={isClear}
          onChange={({ min, max }) => {
            if (min === priceRange.min && max === priceRange.max) {
              onChangePrice(priceRange.min, priceRange.max, true);
            } else {
              onChangePrice(min, max, false);
            }
          }}
        />
        {selectedPrice.isApplied && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-blue-800">
              ${selectedPrice.min} - ${selectedPrice.max}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceFilter;

