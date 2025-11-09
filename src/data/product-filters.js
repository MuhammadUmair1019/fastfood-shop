import { products as DBProducts } from "./products";

export const getVisibleProducts = (
  selectedCategories,
  selectedRating,
  initPriceRange
) => {
  let products = DBProducts;

  if (selectedCategories.length === 0 && !selectedRating) {
    return DBProducts;
  }

  if (selectedRating) {
    products = products.filter((product) => product.rating >= selectedRating);
  }

  if (selectedCategories.length > 0) {
    products = products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  if (initPriceRange.isApplied) {
    // console.log("initPriceRange", initPriceRange);

    products = products.filter(
      (product) =>
        product.price >= initPriceRange.min &&
        product.price <= initPriceRange.max
    );
  }

  return products;
};
