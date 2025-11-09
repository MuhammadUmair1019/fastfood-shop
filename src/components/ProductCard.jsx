import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard(props) {
  const { product } = props;
  const { addToCart } = useCart();
  const navigate = useNavigate();

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
          className={`size-5 ${
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

  return (
    <div className="relative bg-white max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer"
      >
        <img
          className="w-full h-60 object-cover"
          src={product.image}
          alt="product image"
        />

        <div className="max-h-32 mb-24 px-6 py-4">
          <div className="font-bold text-xl mb-2 hover:text-blue-600 transition-colors">
            {product.title}
          </div>
          <div className="flex items-center gap-1 mb-2">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
          </div>
          <p className="text-gray-700 text-base line-clamp-2">{product.description}</p>
        </div>
      </div>
      <div className="absolute w-full bottom-0 flex justify-between items-center mb-2 px-6 pt-4 pb-2 bg-white">
        <div className="font-bold text-lg">${product.price}</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="flex gap-2 border px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className="text-sm">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
