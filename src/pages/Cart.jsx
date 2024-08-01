import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCartVisibility } from "../context/CartContext";
import CartView from "../features/Cart/CartView";
import { useCart } from "../hooks/useUser";
import BarLoader from "../ui/BarLoader";
import { formatPrice } from "../utils/product";

function Cart() {
  const { hideCart, isVisible } = useCartVisibility();
  const { isLoading, data: cartItems } = useCart();
  const cartRef = useRef(null);
  const navigate = useNavigate();

  // Define the variants for the animation
  const variants = {
    hidden: { x: "100%" }, // Start off-screen to the right
    visible: {
      x: 0, // End at its original position
      transition: { duration: 0.25, ease: "easeInOut" }, // Customize the transition
    },
    exit: { x: "100%", transition: { duration: 0.25, ease: "easeInOut" } }, // Animate off-screen to the right
    pop: { opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    popExit: {
      // Define an exit animation for the overlay if needed
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    text: {
      initial: { y: 20, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
  };

  const handleCheckout = () => {
    hideCart();
    navigate("/checkout");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        hideCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, hideCart]);

  if (isLoading) {
    return <BarLoader />;
  }
  console.log(cartItems);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate="pop"
            exit="popExit"
            variants={variants}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 hover:cursor-zoom-out"
          />
          <motion.div
            ref={cartRef}
            className="fixed right-0 top-0 p-5 w-1/3 h-screen bg-white shadow-xl z-50 overflow-auto flex flex-col"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <span className="font-bold text-xl">Your cart</span>
            {cartItems.length > 0 ? (
              <div className="flex flex-col my-5 justify-between h-full">
                <motion.div
                  variants={variants.text}
                  initial="initial"
                  animate="animate"
                  className="flex-grow"
                >
                  <CartView className="flex-grow" products={cartItems} />
                </motion.div>

                <div className="flex flex-col items-end justify-center text-lg">
                  <div className="w-full flex flex-row justify-between mb-2">
                    <span className="flex-grow">Total:</span>
                    <span className="ml-2 font-bold">
                      {formatPrice(
                        cartItems.reduce(
                          (acc, curr) =>
                            acc + curr.product?.price * curr.quantity,
                          0
                        )
                      )}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="text-sm w-1/2 p-4 rounded-md font-extrabold bg-[#212529] text-white hover:bg-black transition-colors duration-300"
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                variants={variants.text}
                initial="initial"
                animate="animate"
                className="text-center my-5 flex-grow"
              >
                Your cart is empty
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Cart;
