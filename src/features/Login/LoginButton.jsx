import { Spin } from "antd";
import { motion } from "framer-motion";

export const LoginButton = ({ handleLogin, isLoading }) => {
  return (
    <a className="col-span-full flex flex-col" href="#">
      <motion.button
        onClick={() => handleLogin()}
        className="bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg transition duration-0.2 
            hover:scale-105 hover:shadow-cyan-600 hover:shadow active:scale-95"
      >
        {isLoading ? (
          <Spin />
        ) : (
          <p className="m-0 p-2 text-zinc-200 text-xl font-semibold">Log in </p>
        )}
      </motion.button>
    </a>
  );
};
