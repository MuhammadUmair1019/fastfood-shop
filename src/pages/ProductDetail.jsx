import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDrink, setSelectedDrink] = useState("Coca Cola");
  const [quantity, setQuantity] = useState(1);

  console.log(id);
  const product = products.find((product) => product.id === +id);


  const addToCart = (cartItem, cartQty, cartDrink) => {
    const product = { ...cartItem, cartQty, cartDrink };
    console.log(product)
    // setCartItems([...cartItems, product]);
  };

  if (!product) {
    return (
      <button onClick={() => navigate("/products")}>Go to products page</button>
    );
  }

  return (
    <div>
      <h1>Product Detail Page</h1>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt="Product image" />
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

      <button onClick={() => addToCart(product, quantity, selectedDrink)}>
        {" "}
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
