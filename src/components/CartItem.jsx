import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-lg shadow-sm"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
        {item.drink && (
          <div className="flex items-center gap-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-blue-600"
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
            <span className="text-sm text-gray-600">
              Drink: <span className="font-medium text-gray-800">{item.drink.name}</span>
              {item.drink.price > 0 && (
                <span className="text-gray-500"> (+${item.drink.price})</span>
              )}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          {item.drink && item.drink.price > 0 ? (
            <>
              <span>${item.basePrice || item.price - item.drink.price}</span>
              <span>+</span>
              <span>${item.drink.price}</span>
              <span>=</span>
              <span className="font-semibold text-gray-800">${item.price}</span>
            </>
          ) : (
            <span className="font-semibold text-gray-800">${item.price}</span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 font-bold transition-colors"
        >
          −
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 font-bold transition-colors"
        >
          +
        </button>
      </div>
      <div className="text-right min-w-[100px]">
        <p className="font-bold text-lg text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.cartItemId)}
          className="text-red-500 text-sm hover:text-red-700 mt-1 font-medium transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

