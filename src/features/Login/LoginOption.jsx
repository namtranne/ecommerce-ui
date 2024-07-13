import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const LoginOption = ({ className, children, ...rest }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="anime"
      variants={OptionMotion}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      whileTap={{
        scale: 0.975,
      }}
      className={twMerge(
        "group overflow-hidden col-span-4 rounded-lg border border-zinc-700 bg-gradient-to-r from-zinc-800 to-zinc-900 hover:text-zinc-900",
        className
      )}
      {...rest}
    >
      <motion.span
        variants={OptionBGMotion}
        className="absolute inset-0 -z-10 bg-white"
      />
      <div>{children}</div>
    </motion.div>
  );
};

const OptionMotion = {
  rest: {
    scale: 0.5,
    y: 50,
    opacity: 0,
  },

  hover: {
    scale: 1.025,
  },

  anime: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
};

const OptionBGMotion = {
  rest: {
    y: "100%",
    transition: {
      duration: 0.2,
      ease: "linear",
    },
  },

  hover: {
    y: "0%",
    transition: {
      duration: 0.1,
      ease: "linear",
    },
  },
};

export default LoginOption;
