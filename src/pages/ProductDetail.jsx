import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const drinks = [
  { id: 1, name: "Coca Cola", price: 2.99 },
  { id: 2, name: "Pepsi", price: 2.99 },
  { id: 3, name: "Sprite", price: 2.99 },
  { id: 4, name: "Orange Juice", price: 3.99 },
  { id: 5, name: "Water", price: 1.99 },
  { id: 6, name: "No Drink", price: 0 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedDrink, setSelectedDrink] = useState(drinks[0]);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate("/collection")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Collection
          </button>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ));
  };

  const totalPrice = (product.price + selectedDrink.price) * quantity;

  const handleAddToCart = () => {
    // Add to cart with quantity and drink
    addToCart(product, quantity, selectedDrink);
    alert(`Added ${quantity} item${quantity > 1 ? "s" : ""} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </button>

        <div className="grid grid-cols-12 gap-8">
          {/* Product Image */}
          <div className="col-span-12 md:col-span-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="col-span-12 md:col-span-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-gray-600">({product.rating})</span>
              </div>

              <p className="text-gray-700 text-lg mb-6">{product.description}</p>

              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Select Drink:
                </label>
                <select
                  value={selectedDrink.id}
                  onChange={(e) => {
                    const drink = drinks.find((d) => d.id === parseInt(e.target.value));
                    setSelectedDrink(drink);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                >
                  {drinks.map((drink) => (
                    <option key={drink.id} value={drink.id}>
                      {drink.name} {drink.price > 0 ? `(+$${drink.price})` : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Quantity:
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 font-bold text-lg"
                  >
                    −
                  </button>
                  <span className="text-2xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg text-gray-600">Product Price:</span>
                  <span className="text-xl font-semibold">${product.price}</span>
                </div>
                {selectedDrink.price > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg text-gray-600">
                      {selectedDrink.name}:
                    </span>
                    <span className="text-xl font-semibold">
                      ${selectedDrink.price}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-gray-800">Total:</span>
                  <span className="text-3xl font-bold text-blue-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

