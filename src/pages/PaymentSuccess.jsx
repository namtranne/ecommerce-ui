import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ProfileButton } from "../features/MyAccount/ProfileButton";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  // Animation variant for the GIF to fade in and play once
  const gifVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex w-screen h-screen bg-g5-grey items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-white w-fit h-fit p-16 border shadow-2xl rounded-3xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={gifVariant}
          className=""
        >
          <img
            src="https://cdn.discordapp.com/attachments/1248977477746036818/1278368540415496314/Icon_animation_for_Prio_app.gif?ex=66d08cfa&is=66cf3b7a&hm=0c8a1cf2fed0649960a75e40385c73a449032c0384ec07bdf74d6eb0360d4dc3&"
            alt="Payment Success"
            className="w-[400px] h-[300px]"
          />
        </motion.div>

        <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-lg text-gray-700">Thank you for your purchase.</p>

        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/products/0")}
            className="px-4 py-2 bg-g5-white text-g5-black rounded-lg hover:bg-g5-black hover:text-g5-white transition-all duration-300"
          >
            Keep Shopping
          </button>
          <button
            onClick={() => navigate("/my-account?selectedIndex=2")} // Set the selectedIndex to 2
            className="px-4 py-2 bg-g5-white text-g5-black rounded-lg hover:bg-g5-black hover:text-g5-white transition-all duration-300"
          >
            See Order
          </button>
        </div>
      </div>
    </div>
  );
}
