import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginSignUp({initSignUp}) {

  const [showSignUp, setShowSignUp] = useState(initSignUp);

  const handleSignUpToggle = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div
      className="min-h-screen min-w-max
         flex flex-row items-center justify-center overflow-hidden relative
         bg-gradient-to-r from-zinc-950 to-zinc-800"
    >
      <motion.div
        initial={{ x: 0}}
        animate={{ translateX: showSignUp ? "-100%" : "0%" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="flex w-[200%]"
      >
        <div className="w-full shrink-0">
          <Login onSignUpClick={handleSignUpToggle} />
        </div>
        <div className="w-full shrink-0">
          <SignUp onSignUpClick={handleSignUpToggle} />
        </div>
      </motion.div>
    </div>
  );
}

export default LoginSignUp;
