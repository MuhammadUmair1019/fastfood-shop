import { useState } from "react";

import CategoryFilter from "./components/CategoryFilter";
import Products from "./components/Products";

import { getVisibleProducts } from "./data/product-filters";
import RatingFilter from "./components/RatingFilter";
import { priceRange } from "./data/products";

const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false,
};

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");

  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter);

  // console.log(initPriceRange)
  const filterProducts = getVisibleProducts(
    selectedCategories,
    selectedRating,
    initPriceRange
  );

  const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  console.log(selectedRating);

  const onChangeRatingHandler = (rating) => {
    setSelectedRating(rating);
  };

  console.log(selectedRating);

  return (
    <div>
      <div className="grid grid-cols-12 gap-3 my-2 mx-2">
        <div className="col-span-2 space-y-4">
          <CategoryFilter
            selectedCategories={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
          />

          <input
            type="range"
            name=""
            id=""
            value={initPriceRange.max}
            onChange={(e) => {
              console.log(e.target.value)
              // setInitPriceRange({
              //   ...initPriceFilter,
              //   max: e.target.value,
              //   isApplied: true,
              // });
            }}
          />

          <RatingFilter
            onChangeRating={onChangeRatingHandler}
            selectedRating={selectedRating}
          />
        </div>
        <div className="col-span-10">
          <Products products={filterProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
