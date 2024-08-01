import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import { useEffect } from "react";
import { useReviewProduct } from "../../pages/Products";
import NeubrutalismButton from "../../ui/NeubrutalismButton";
import { useNavigate } from "react-router-dom";

function ProductReviewModal() {
  const { reviewProduct, setReviewProduct } = useReviewProduct();
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setReviewProduct(false);
  };

  return (
    <>
      {reviewProduct && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-white"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-[white] p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-[black] active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              <div className="mx-auto max-w-2xl space-y-4 text-black">
                <h2 className="text-4xl font-bold text-black">
                  {reviewProduct.name}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: reviewProduct.description,
                  }}
                />
                <div
                  className="flex items-center justify-center"
                  onClick={() =>
                    navigate(`/products/product-info?id=${reviewProduct.id}`)
                  }
                >
                  <NeubrutalismButton text="BUY ME" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default ProductReviewModal;
