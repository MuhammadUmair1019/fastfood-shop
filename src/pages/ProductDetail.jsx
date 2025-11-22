import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext, useState } from "react";
import { CartContext, useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const drinks = [
  { id: 1, name: "Coca Cola", price: 2.99 },
  { id: 2, name: "Pepsi", price: 2.99 },
  { id: 3, name: "Sprite", price: 2.99 },
  { id: 5, name: "Water", price: 1.99 },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDrink, setSelectedDrink] = useState(drinks[0].name);

  // const { cartItems, addToCart, totalCartItems, totalCartPrice} = useContext(CartContext);
  const { cartItems, addToCart, totalCartItems, totalCartPrice} = useCart();

  console.log("cartItems -->", cartItems);
  console.log("totalCartItems -->", totalCartItems);
  console.log("totalCartPrice -->", totalCartPrice);

  const [quantity, setQuantity] = useState(1);

  const product = products.find((product) => product.id === +id);

  if (!product) {
    return (
      <button onClick={() => navigate("/products")}>Go to products page</button>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl">Product Detail Page</h1>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>RS {product.price}</p>
      <img src={product.image} alt="Product image" />

      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-800 mb-3">
          Select Drink:
        </label>
        <select
          value={selectedDrink}
          onChange={(e) => {
            setSelectedDrink(e.target.value);
          }}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
        >
          {drinks.map((drink) => (
            <option key={drink.id} value={drink.name}>
              {drink.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex p-4 space-x-1.5">
        <button
          className="border-2 border-green-500 px-2 cursor-pointer"
          onClick={() => setQuantity(quantity - 1)}
        >
          {" "}
          -
        </button>
        <h4>{quantity}</h4>
        <button
          className="border-2 border-green-500 px-2 cursor-pointer"
          onClick={() => setQuantity(quantity + 1)}
        >
          {" "}
          +
        </button>
      </div>
      <h3 className="text-2xl font-semibold mb-4">
        Total: RS {quantity * product.price}
      </h3>
      <button
        className=" px-4 bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        onClick={() => {
          addToCart(product, quantity, selectedDrink)
          toast.success(`Added ${quantity} item to cart!`)
        }}
      >
        {" "}
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
