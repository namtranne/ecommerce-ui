import { ProductOptions } from "./../features/SingleProduct/ProductOptions";
import { ProductDescription } from "./../features/SingleProduct/ProductDescription";
import { ProductSpecifications } from "./../features/SingleProduct/ProductSpecifications";
import { Warranties } from "./../features/SingleProduct/Warranties";
import React, { useState } from "react";
import { useProductInfo } from "../hooks/useProduct";
import BarLoader from "../ui/BarLoader";
import { motion } from "framer-motion";
import "./product.css";
import { Descriptions } from "antd";
import PriceBox from "../features/SingleProduct/PriceBox";

function SingleProduct() {
  // validateProductInfo();
  const { data: product, isLoading, error } = useProductInfo();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [transformY, setTransformY] = useState(0);
  const [amount, setAmount] = useState(1);

  const nextImages = () => {
    if (currentIndex + imagesToShow < product.images.length) {
      setCurrentIndex(currentIndex + imagesToShow);
      setTransformY(transformY - 460); // Move up
    }
  };

  const prevImages = () => {
    if (currentIndex - imagesToShow >= 0) {
      setCurrentIndex(currentIndex - imagesToShow);
      setTransformY(transformY + 460); // Move down
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <BarLoader />
      </div>
    );
  }

  const [configurableProduct, setConfigurableProduct] = useState(
    product.configurableProducts.length ? product.configurableProducts[0] : {}
  );
  const [productImages, setProductImages] = useState(product.images);
  console.log(product);

  return (
    <div className="bg-white">
      <main className="px-12 py-8 max-w-[134rem] m-auto grid grid-cols-[0.8fr_1fr] gap-40">
        <section class="img">
          {/* <button class="hidden" className="left-[10%]">
            <img
              src="images/icon-next.svg"
              alt="next symbol image"
              class="img-main__btnlft-img img-main__btn-img"
            />
          </button> */}
          <button class="img-main__btnrgt img-main__btn">
            <img
              src="images/icon-next.svg"
              alt="next symbol image"
              class="img-main__btnrgt-img img-main__btn-img"
            />
          </button>
          {/* <div class="w-full flex justify-center"> */}
          <img
            src={productImages[0].url}
            alt=""
            className="max-w-full rounded-[5%] cursor-pointer mb-14"
          />
          {/* </div> */}

          <div class="img-btns">
            {productImages.map((image) => {
              return (
                <button class="img-btn" key={image.id}>
                  <img
                    src={image.url}
                    alt="shoe product image"
                    class="img-btn__img"
                  />
                </button>
              );
            })}
          </div>
        </section>

        <section class="price w-full overflow-hidden">
          <h2 class="price-sub__heading text-[#212f4d]">
            {product.category.name} | {product.brand && product.brand.name}
          </h2>
          <h1 className="text-[3rem] font-bold">{product.name}</h1>
          <div class="price-box">
            <div class="price-box__main">
              <span class="price-box__main-new">{product.price} VND</span>
              {product.discountRate ? (
                <>
                  <span class="price-box__main-discount">
                    {" "}
                    {product.discountRate} %
                  </span>
                  <span class="price-box__old">
                    {product.originalPrice} VND
                  </span>
                </>
              ) : null}
            </div>
          </div>

          <ProductOptions
            configurableProducts={product.configurableProducts}
            // productConfiguration={productConfiguration}
            // setProductConfiguration={handleSetProductConfiguration}
          />

          <PriceBox amount={amount} setAmount={setAmount} />

          {product.warranties.length > 0 && (
            <Warranties warranties={product.warranties} />
          )}

          {product.specifications.length > 0 && (
            <ProductSpecifications specifications={product.specifications} />
          )}

          {/* product description */}
          <ProductDescription description={product.description} />
        </section>
      </main>
    </div>
  );
}

export default SingleProduct;
