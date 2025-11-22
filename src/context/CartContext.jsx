import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cartItem, cartQty, cartDrink) => {
    let productIndex = cartItems.findIndex(
      (itm) => itm.id === cartItem.id && itm.cartDrink === cartDrink
    );

    if (productIndex === -1) {
      let product = { ...cartItem, cartQty, cartDrink };

      setCartItems([...cartItems, product]);
    } else {
      const copyCartItems = [...cartItems];
      copyCartItems[productIndex].cartQty += cartQty;
      setCartItems([...copyCartItems]);
    }
  };

  const updateCartQty = (cartItem, deltaQty) => {
    let index = cartItems.findIndex(
      (itm) => itm.id === cartItem.id && itm.cartDrink === cartItem.cartDrink
    );

    if (index !== -1) {
      const copyCartItems = [...cartItems];
      copyCartItems[index].cartQty += deltaQty;

      setCartItems([...copyCartItems]);
    }
  };

  const removeCartItem = (cartItem) => {
    // optimize code
    const filterdCartItems = cartItems.filter((item) =>
      item.id === cartItem.id ? item.cartDrink !== cartItem.cartDrink : true
    );

    // const filterdCartItems = cartItems.filter((item) => {
    //   if (item.id === cartItem.id) {
    //     return item.cartDrink !== cartItem.cartDrink;
    //   } else {
    //     return true;
    //   }
    // });

    setCartItems([...filterdCartItems]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.cartQty, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.cartQty,
      0
    );
  };

  const totalCartItems = getTotalItems();
  const totalCartPrice = getTotalPrice();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCartItems,
        totalCartPrice,
        addToCart,
        removeCartItem,
        updateCartQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
