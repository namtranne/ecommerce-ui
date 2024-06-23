import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { TbShoppingCartSearch } from "react-icons/tb";

// Ref source: www.hover.dev/components/grids#reveal-bento

export const RevealBento = () => {
  return (
    <section className="bg-zinc-900 px-4 py-12 text-zinc-50 flex items-center">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <OffersBlock />
      </motion.div>
    </section>
  );
};

const RevealBentoBlock = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <RevealBentoBlock className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Tom.{" "}
      <span className="text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </RevealBentoBlock>
);

const OffersBlock = () => (
  <>
    <RevealBentoBlock
      whileHover={{
        rotate: 2.5,
        scale: 1.1,
      }}
      className="col-span-6 row-span-12 
        bg-right
        bg-300%
        bg-gradient-to-r from-pink-500 from-14% via-indigo-500 via-30% to-white to-50%
        transition-all ease-linear
        text-black 
        hover:text-white
        hover:bg-left
        hover:z-20
        md:col-span-3"
    >
      <a href="#" className="grid h-full place-content-center text-3xl">
        <div className="flex flex-col">
          <span className="font-extrabold text-5xl">BEST</span>
          <p>price offers.</p>
          <p>Up to</p>
          <span className="font-extrabold text-5xl place-self-end">30%</span>
        </div>
      </a>
    </RevealBentoBlock>
    <RevealBentoBlock
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 row-span-12 bg-red-500 md:col-span-6 hover:z-20"
    >
      <a
        href="http://localhost:5173/products/1846/24/1" // PC & Laptops
        className="flex flex-col justify-end items-center h-full text-3xl text-white"
      >
        <img
          src="src\features\Home\Images\gaming_desktop.png"
          alt="Gaming Desktop"
          className="absolute -top-1/3"
        />
        <div className="">
          <p className="text-xs mb-0">Level up your gaming experience</p>
          <p className="text-xs mb-0">Handle resource-intensive tasks</p>
          <p className="mb-0 font-semibold">DESKTOP-LAPTOPS-GEARS</p>
        </div>
      </a>
    </RevealBentoBlock>
    <RevealBentoBlock
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 row-span-12
        bg-gradient-to-t from-green-700 to-green-200
        z-10
        md:col-span-3
        hover:z-20"
    >
      <a
        href="http://localhost:5173/products/1815/24/1" // Accessories
        className="flex flex-col justify-start items-center h-full text-3xl text-white"
      >
        <div>
          <p className="text-green-900 font-semibold">High-end Accessories</p>
        </div>
        <img
          src="src\features\Home\Images\airpod.png"
          alt="Iphones"
          className="absolute top-1/3 backdrop-opacity-35"
        />
      </a>
    </RevealBentoBlock>
    <RevealBentoBlock
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 row-span-12 
        bg-gradient-to-t from-titanium-100 to-titanium-200
        hover:z-20
        md:col-span-6"
    >
      <a
        href="http://localhost:5173/products/1789/24/1" // Smartphones and tablets
        className="flex flex-row justify-end items-center h-full text-3xl text-white"
      >
        <img
          src="src\features\Home\Images\productive-items.png"
          alt="Iphones"
          className="backdrop-opacity-35"
        />
        <div>
          <p className="text-xs mb-0">Smartphones, Tablets, etc.</p>
          <p className="mb-0 font-semibold">
            THE WHOLE WORLD AT YOUR FINGERTIPS
          </p>
        </div>
      </a>
    </RevealBentoBlock>
    <RevealBentoBlock
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 row-span-12
        bg-gradient-to-t from-amber-600 to-amber-200
        bg-cover
        bg-center
        hover:bg-cherish-moment
        hover:z-20
        md:col-span-3"
    >
      <a
        href="http://localhost:5173/products/1801/24/1" // Cameras
        className="flex flex-col justify-start items-top h-full text-3xl text-white"
      >
        <div>
          <p className="text-amber-900 font-semibold text-left">
            Capture Your Cherished Moments
          </p>
        </div>
        <img
          src="src\features\Home\Images\canon_cam.png"
          alt="Iphones"
          className="absolute -bottom-1/3 backdrop-opacity-35 scale-75"
        />
      </a>
    </RevealBentoBlock>
    <RevealBentoBlock
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 row-span-12
        bg-gray-200
        hover:z-20
        md:col-span-3"
    >
      <a
        href="http://localhost:5173/products/0/24/1" // Full shop
        className="flex flex-col justify-center items-center h-full text-3xl text-white"
      >
        <div>
          <p className="text-gray-900 font-semibold text-left">View more</p>
        </div>
        <TbShoppingCartSearch className="text-6xl text-gray-900"></TbShoppingCartSearch>
      </a>
    </RevealBentoBlock>
  </>
);

const AboutBlock = () => (
  <RevealBentoBlock className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </RevealBentoBlock>
);

const LocationBlock = () => (
  <RevealBentoBlock className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </RevealBentoBlock>
);

const EmailListBlock = () => (
  <RevealBentoBlock className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </RevealBentoBlock>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const SingleOfferBlock = () => {
  return (
    <RevealBentoBlock
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 row-span-12 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiTwitter />
      </a>
    </RevealBentoBlock>
  );
};

export default RevealBento;
