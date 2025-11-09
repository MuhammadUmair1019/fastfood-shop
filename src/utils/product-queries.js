import { products } from "../data/products";

const getFilterData = (
  data,
  selectedCategory,
  selectedPriceRange,
  selectedRating
) => {
  return data.filter((product) => {
    // category filter
    let categoryMatch = true;
    if (selectedCategory.length && product.category) {
      categoryMatch = selectedCategory.includes(product.category);
    }

    // price filter
    let priceMatch = true;
    let { min, max, isApplied } = selectedPriceRange;
    if (isApplied && product.price) {
      priceMatch = product.price >= min && product.price <= max;
    }

    // rating filter
    let ratingMatch = true;
    if (selectedRating && product.rating) {
      ratingMatch = product.rating >= selectedRating;
    }

    return categoryMatch && priceMatch && ratingMatch;
  });
};

const getSortData = (data, sortBy) => {
  const sortedData = [...data];
  return sortedData.sort((product1, product2) => {
    if (sortBy === "PriceHighToLow") {
      return product1.price > product2.price ? -1 : 1;
    } else if (sortBy === "PriceLowToHigh") {
      return product1.price < product2.price ? -1 : 1;
    } else if (sortBy === "RatingLowToHigh") {
      return product1.rating < product2.rating ? -1 : 1;
    } else if (sortBy === "RatingHighToLow") {
      return product1.rating > product2.rating ? -1 : 1;
    }
    return 0;
  });
};

export const getVisibleProducts = (
  selectedCategory,
  selectedPrice,
  selectedRating,
  sortBy
) => {
  let filteredProducts = products;

  if (
    selectedCategory.length ||
    selectedPrice.isApplied ||
    selectedRating
  ) {
    filteredProducts = getFilterData(
      filteredProducts,
      selectedCategory,
      selectedPrice,
      selectedRating
    );
  }

  if (sortBy) {
    filteredProducts = getSortData(filteredProducts, sortBy);
  }

  const total = filteredProducts.length;
  return { products: filteredProducts, total };
};

// Find Price Range (min-max)
const findRange = () => {
  let min = products[0].price;
  let max = 0;
  products.forEach((product) => {
    if (product.price < min) min = product.price;
    if (product.price > max) max = product.price;
  });
  return { min, max };
};

export const priceRange = findRange();

