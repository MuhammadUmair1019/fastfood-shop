import { products } from "./products";

export const getVisibleProducts = (categories) => {
  if (categories.length === 0) {
    return products;
  }

  const filterdProducts = products.filter((product) =>
    categories.includes(product.category)
  );

  return filterdProducts;
};
