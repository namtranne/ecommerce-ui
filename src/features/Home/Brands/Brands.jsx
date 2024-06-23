import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { GrHpi } from "react-icons/gr";
import {
  SiAsus,
  SiLenovo,
  SiApple,
  SiAcer,
  SiSamsung,
  SiNvidia,
  SiMsi,
} from "react-icons/si";

export const Brands = () => {
  return (
    <div className="bg-zinc-900 px-4 py-36 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
      >
        <LogoScroller></LogoScroller>
      </motion.div>
    </div>
  );
};

const LogoScroller = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <ul className="flex text-9xl items-center justify-center md:justify-start space-x-16 animate-infinite-scroll">
        <li>
          <GrHpi />
        </li>
        <li>
          <SiAsus />
        </li>
        <li>
          <SiLenovo />
        </li>
        <li>
          <SiApple />
        </li>
        <li>
          <SiAcer />
        </li>
        <li>
          <SiSamsung />
        </li>
        <li>
          <SiNvidia />
        </li>
        <li>
          <SiMsi />
        </li>
        {/* Repeat icons to ensure smooth scrolling */}
        <li>
          <GrHpi />
        </li>
        <li>
          <SiAsus />
        </li>
        <li>
          <SiLenovo />
        </li>
        <li>
          <SiApple />
        </li>
        <li>
          <SiAcer />
        </li>
        <li>
          <SiSamsung />
        </li>
        <li>
          <SiNvidia />
        </li>
        <li>
          <SiMsi />
        </li>
      </ul>
    </div>
  );
};

export default Brands;
