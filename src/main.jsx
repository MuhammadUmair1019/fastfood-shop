import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { CounterProvider } from "./context/CounterProvider.jsx";
import CartProvider from "./context/CartContext.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <CounterProvider>
        <BrowserRouter>
          <App />
          <ToastContainer position="top-right" />
        </BrowserRouter>
      </CounterProvider>
    </CartProvider>
  </StrictMode>
);
