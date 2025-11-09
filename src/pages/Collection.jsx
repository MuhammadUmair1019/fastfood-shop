import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { getVisibleProducts, priceRange } from "../utils/product-queries";
import AppliedFilters from "../components/AppliedFilters";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import RatingFilter from "../components/RatingFilter";
import SortComponent from "../components/SortComponent";

const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false,
};

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(initPriceFilter);
  const [selectedRating, setSelectedRating] = useState("");
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter);
  const [sortBy, setSortBy] = useState("");
  const [isClear, setIsClear] = useState(false);

  const onChangeCategory = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategory((prevCategory) => [...prevCategory, category]);
    } else {
      setSelectedCategory(
        selectedCategory.filter((cat) => cat !== category)
      );
    }
  };

  const onChangePrice = (min, max, isClearPrice) => {
    if (isClearPrice) {
      setSelectedPrice(initPriceFilter);
      setInitPriceRange(initPriceFilter);
      setIsClear(true);
      return;
    }

    if (min === priceRange.min && max === priceRange.max) {
      return setSelectedPrice(initPriceFilter);
    }

    setSelectedPrice({
      min,
      max,
      isApplied: true,
    });
    setIsClear(false);
  };

  const onChangeRatingHandler = (rating) => {
    if (rating === "clear") return setSelectedRating("");
    setSelectedRating(rating);
  };

  const onClearAllHandler = () => {
    setSelectedCategory([]);
    setSelectedPrice(initPriceFilter);
    setInitPriceRange(initPriceFilter);
    setSelectedRating("");
    setIsClear(true);
  };

  const { products, total } = getVisibleProducts(
    selectedCategory,
    selectedPrice,
    selectedRating,
    sortBy
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Filters Sidebar - Sticky */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-24 space-y-4">
              <CategoryFilter
                selectedCategories={selectedCategory}
                onChangeCategory={onChangeCategory}
              />
              <PriceFilter
                selectedPrice={selectedPrice}
                initPriceRange={initPriceRange}
                onChangePrice={onChangePrice}
                isClear={isClear}
              />
              <RatingFilter
                onChangeRating={onChangeRatingHandler}
                selectedRating={selectedRating}
              />
            </div>
          </div>

          {/* Products Section */}
          <div className="col-span-12 lg:col-span-9">
            {/* Header with Filters and Sort */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <AppliedFilters
                    selectedCategory={selectedCategory}
                    onChangeCategory={onChangeCategory}
                    selectedPrice={selectedPrice}
                    onChangePrice={onChangePrice}
                    selectedRating={selectedRating}
                    onChangeRating={onChangeRatingHandler}
                    onClearAll={onClearAllHandler}
                    priceRange={priceRange}
                  />
                </div>
                <div className="flex-shrink-0">
                  <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">
                Showing <span className="font-bold text-gray-900">{total}</span> product{total !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

