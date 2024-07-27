import React, { createContext, useContext, useState } from "react";

const CartVisibilityContext = createContext({});

export const CartProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsVisible(!isVisible);
  };

  const hideCart = () => {
    setIsVisible(false);
  };

  return (
    <CartVisibilityContext.Provider
      value={{ isVisible, toggleCartVisibility, hideCart }}
    >
      {children}
    </CartVisibilityContext.Provider>
  );
};

export const useCartVisibility = () => {
  return useContext(CartVisibilityContext);
};
