import { useState } from "react";

export default function CartProvider() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cartItem, cartQty, cartDrink) => {
    let index = cartItems.findIndex(
      (itm) => itm.id === cartItem.id && itm.cartDrink === cartDrink
    );

    if (index === -1) {
      const product = { ...cartItem, cartQty, cartDrink };
      setCartItems([...cartItems, product]);
    } else {
      const copyCartItems = [...cartItems];
      copyCartItems[index].cartQty += cartQty;

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
    const filterdCartItems = cartItems.filter((item) => {
      if (item.id === cartItem.id) {
        return item.cartDrink !== cartItem.cartDrink;
      } else {
        return true;
      }
    });

    setCartItems([...filterdCartItems]);
  };

  
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  

}

// -----------------------------------------
// function GrandChild(props) {

//   return <h1>{props.x}</h1>;
// }

// function Child(props) {
//   return <GrandChild x={props} />;
// }

// function Parent(props) {
//   return <Child x={props.x} />;
// }

// function App() {
//   let [x, setX] = useState(0);

//   return <Parent x={x} />;
// }
