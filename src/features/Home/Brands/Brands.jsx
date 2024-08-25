import React from "react";
import { motion } from "framer-motion";
import { GrHpi } from "react-icons/gr";
import { SiAsus, 
  SiApple, 
  SiLenovo, 
  SiAcer,
  // Lacie,
  SiSony,
  SiRazer,
  SiSamsung,
  // Microlab,
  SiPanasonic,
  SiDell,
  //Canon
  SiSandisk,
  SiLg,
  SiLogitech,
  SiSennheiser,

  SiNvidia, 
  SiMsi } from "react-icons/si";

export const Brands = () => {
  return (
    <div className="bg-g5-black px-4 py-20 text-zinc-50">
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
  // Define the list of icons
  const icons = [
    <GrHpi key="GrHpi" />,
    <SiAsus key="SiAsus" />,
    <SiApple key="SiApple" />,
    <SiLenovo key="SiLenovo" />,
    <SiSony key="SiSony" />,
    <SiRazer key="SiRazer" />,
    <SiSamsung key="SiSamsung" />,
    <SiAcer key="SiAcer" />,
    <SiPanasonic key="SiPanasonic" />,
    <SiDell key="SiDell" />,
    <SiSandisk key="SiSandisk" />,
    <SiLg key="SiLg" />,
    <SiLogitech key="SiLogitech" />,
    <SiSennheiser key="SiSennheiser" />,

    <SiNvidia key="SiNvidia" />,
    <SiMsi key="SiMsi" />,
  ];

  // Duplicate the icons array
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="w-full overflow-hidden relative">
      <ul className="flex text-9xl items-center space-x-16 animate-infinite-scroll">
        {duplicatedIcons.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
