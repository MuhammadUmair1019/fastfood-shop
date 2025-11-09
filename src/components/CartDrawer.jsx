import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const {
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    getTotalPrice,
    clearCart,
  } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0  bg-opacity-50 z-40"
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-gray-500 hover:text-gray-700"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.cartItemId} item={item} />)
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="space-y-2">
              <Link
                to="/cart"
                onClick={() => setIsDrawerOpen(false)}
                className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={() => setIsDrawerOpen(false)}
                className="block w-full bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

