import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCartVisibility } from "../context/CartContext";
import CartView from "../features/Cart/CartView";

function Cart() {
  const { hideCart, isVisible } = useCartVisibility();
  const cartRef = useRef(null);
  const navigate = useNavigate();

  const sampleProducts = [
    { name: "Laptop", price: 999.99, quantity: 1, image: "data:image/jpeg;base64,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"},
    { name: "Smartphone", price: 599.99, quantity: 1, image: "https://dictionary.cambridge.org/images/thumb/smartp_noun_002_34391.jpg?version=6.0.27" },
    { name: "Tablet", price: 399.99, quantity: 1, image: "https://img.global.news.samsung.com/vn/wp-content/uploads/2019/07/Product-Image-Galaxy-Tab-S6-2.jpg" },
    { name: "Headphones", price: 89.99, quantity: 1, image: "https://antien.vn/files/products/photos/2023/11/23/bose-quietcomfort-ultra-headphones.jpg" },
    { name: "Smartwatch", price: 199.99, quantity: 1, image: "https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg" },
  ];

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
    navigate("/checkout", { state: { products: sampleProducts } });
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
            {sampleProducts.length > 0 ? (
              <div className="flex flex-col my-5 justify-between h-full">
                <motion.div
                  variants={variants.text}
                  initial="initial"
                  animate="animate"
                  className="flex-grow"
                >
                  <CartView className="flex-grow" products={sampleProducts} />
                </motion.div>

                <div className="flex flex-col items-end justify-center text-lg">
                  <div className="w-full flex flex-row justify-between mb-2">
                    <span className="flex-grow">Total:</span>
                    <span className="ml-2 font-bold">
                      $
                      {sampleProducts.reduce(
                        (acc, curr) => acc + curr.price,
                        0
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
