import React, { useState, useRef } from "react";
import {
  DownCircleOutlined,
  UpCircleOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useProductInfo } from "../hooks/useProduct";
import { Loader, LoadingOverlay } from "@mantine/core";
import BarLoader from "../ui/BarLoader";

function SingleProduct() {
  // validateProductInfo();
  const { data: product, isLoading, error } = useProductInfo();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [transformY, setTransformY] = useState(0);
  const [amount, setAmount] = useState(1);
  const [textHover, setTextHover] = useState(false);

  const imagesToShow = 5;
  const imageHeight = 96; // Adjust based on your image height + margin
  const imageContainerRef = useRef(null);

  const nextImages = () => {
    if (currentIndex + imagesToShow < product.images.length) {
      setCurrentIndex(currentIndex + imagesToShow);
      setTransformY(transformY - 448); // Move up
    }
  };

  const prevImages = () => {
    if (currentIndex - imagesToShow >= 0) {
      setCurrentIndex(currentIndex - imagesToShow);
      setTransformY(transformY + 448); // Move down
    }
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const renderConfigurableOptions = (optionCode, label) => (
    <div className="flex flex-row items-center mb-5">
      <p className="w-1/6 font-bold text-black text-xl mb-0">{label}</p>
      <div className="flex flex-row items-center">
        {product.configurableOptions.map((option) =>
          option.code === optionCode
            ? option.values.map((value) => (
                <button
                  key={value.id}
                  className="w-20 h-full p-2 mr-4 text-black outline outline-1 rounded-md"
                >
                  {value.label}
                </button>
              ))
            : null
        )}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <BarLoader />
      </div>
    );
  }

  return (
    <div className="bg-[#ededed]">
      <div className="mt-[70px] p-10 flex">
        <div className="w-2/5 p-5 items-start justify-start flex flex-row h-screen">
          <div className="flex flex-col items-center justify-center sticky top-0">
            {currentIndex > 0 && <UpCircleOutlined onClick={prevImages} />}
            {currentIndex === 0 && <UpCircleOutlined className="invisible" />}
            <div
              ref={imageContainerRef}
              className="flex flex-col items-center justify-start h-[448px] overflow-hidden my-2"
            >
              <div
                style={{
                  transition: "transform 0.5s ease",
                  transform: `translateY(${transformY}px)`,
                }}
              >
                {product.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Product Image ${index + 1}`}
                    className="w-20 h-20 object-cover cursor-pointer my-2 rounded-md border-2 border-transparent hover:border-[#212f4d]"
                    onClick={() => setSelectedImage(image.url)}
                  />
                ))}
              </div>
            </div>
            {currentIndex + imagesToShow < product.images.length && (
              <DownCircleOutlined onClick={nextImages} />
            )}
            {currentIndex + imagesToShow >= product.images.length && (
              <DownCircleOutlined className="invisible" />
            )}
          </div>

          <img
            src={selectedImage || product.thumbnailUrl}
            alt="Product Thumbnail"
            className="mx-auto w-1/2 sticky top-0 rounded-md border-8 border-black hover:border-[#212f4d]"
          />
        </div>
        <div className="w-3/5 p-5">
          <h2 className="text-black font-bold">{product.name}</h2>
          <p className="text-black text-xl font-semibold">
            {product.brand.name}
          </p>
          <div className="flex flex-row items-center">
            <p className="text-black text-xl font-bold w-1/6">Price:</p>
            {product.price !== product.originalPrice ? (
              <>
                <p className="text-xl font-bold text-green-600 mr-2">
                  {new Intl.NumberFormat("en-US").format(product.price)}VND
                </p>{" "}
                <p className=" text-md line-through text-red-500">
                  {new Intl.NumberFormat("en-US").format(product.originalPrice)}
                  VND
                </p>
              </>
            ) : (
              <p className="text-xl font-bold text-green-600">
                {new Intl.NumberFormat("en-US").format(product.price)}VND
              </p>
            )}
          </div>
          <div>
            {product.configurableOptions && (
              <>
                {renderConfigurableOptions("option1", "Color")}
                {renderConfigurableOptions("option2", "Memory")}
              </>
            )}
          </div>

          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center text-md font-semibold outline outline-2 outline-[#455f63] w-fit h-fit px-4 py-2 rounded-sm">
              <button className="text-xl text-black" onClick={decreaseAmount}>
                -
              </button>
              <div className="border-l-2 border-[#455f63] mx-3 h-1/2 inline-block min-h-6" />
              <span className="text-black">{amount}</span>
              <div className="border-l-2 border-[#455f63] mx-3 h-1/2 inline-block min-h-6" />
              <button className="text-xl text-black" onClick={increaseAmount}>
                +
              </button>
            </div>
            <button className="bg-black text-[#808080] text-md font-semibold px-8 py-3 rounded-md mx-5">
              Add to cart
            </button>
            <HeartOutlined className="text-3xl mr-1"></HeartOutlined>
            <div className="underline-effect text-black text-md font-semibold text-center mb-0 rounded-md">
              Add to wishlist
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-10 mb-0 ml-5">You may also like</h1>
    </div>
  );
}

export default SingleProduct;
