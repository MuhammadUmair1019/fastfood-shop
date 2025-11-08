import { useState } from "react";

import CategoryFilter from "./components/CategoryFilter";
import Products from "./components/Products";

import { getVisibleProducts } from "./data/product-filters";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterProducts = getVisibleProducts(selectedCategories);

  const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-3 my-2 mx-2">
        <div className="col-span-2">
          <CategoryFilter
            selectedCategories={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
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
