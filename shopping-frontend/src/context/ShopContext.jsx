import React, { createContext, useState } from "react";
import all_products from "../components/assests/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products?.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const cartTotal = () => {
    let total = 0;
    for (let i = 0; i < all_products?.length + 1; i++) {
      if (cartItems[i] > 0) {
        total = total + cartItems[i] * all_products[i - 1]?.new_price;
      }
    }
    return total;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    cartTotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
