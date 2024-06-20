import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function CategoryCard({ heading, imgSrc, href }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["94%", "102%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between transition-colors duration-500 mb-2 mx-[0] my-[0.25em] py-1 capitalize border-b-[1px_solid_transparent] cursor-pointer text-left"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-sm font-medium text-black transition-colors duration-500"
        >
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: 16 },
            }}
            transition={{ type: "spring" }}
            className="inline-block"
          >
            {heading}
          </motion.span>
        </motion.span>
        <motion.img
          style={{
            top,
            left,
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-10 h-12 w-16 rounded-lg object-cover md:h-12 md:w-12"
          alt={`Image representing a link for ${heading}`}
        />
      </div>
    </motion.a>
  );
}

export default CategoryCard;
