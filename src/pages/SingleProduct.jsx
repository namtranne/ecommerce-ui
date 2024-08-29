import { ProductImages } from "./../features/SingleProduct/ProductImages";
import { ProductOptions } from "./../features/SingleProduct/ProductOptions";
import { ProductDescription } from "./../features/SingleProduct/ProductDescription";
import { ProductSpecifications } from "./../features/SingleProduct/ProductSpecifications";
import { Warranties } from "./../features/SingleProduct/Warranties";
import React, { useEffect, useState } from "react";
import { useProductInfo } from "../hooks/useProduct";
import BarLoader from "../ui/BarLoader";
import "./product.css";
import PriceBox from "../features/SingleProduct/PriceBox";
import { isLogin } from "../utils/axios";
import { toast } from "react-toastify";
import { useAddCartItem } from "../hooks/useUser";
import RatingStars from "../features/SingleProduct/RatingStar";
import ProductReview from "../features/SingleProduct/ProductReview";
import { formatPrice } from "../utils/product";
import { useAddWishlistItem } from "../hooks/useUser";
import Marketing from "../features/SingleProduct/Marketing";

function SingleProduct() {
  // validateProductInfo();
  const { data: product, isLoading, error } = useProductInfo();
  const { addCartItem, isLoading: isAddingCartItem } = useAddCartItem();
  const { addWishlistItem, isLoading: isAddingWishlistItem } =
    useAddWishlistItem();

  const [selectedImage, setSelectedImage] = useState("");
  const [amount, setAmount] = useState(1);
  const [configurableProduct, setConfigurableProduct] = useState(null);
  const [productImages, setProductImages] = useState([]);

  const handleSetProductConfiguration = (product) => {
    setConfigurableProduct(product);
    setProductImages(product.images);
    setSelectedImage(product.images[0]);
  };

  const handleAddToCart = () => {
    if (isLogin() == false) {
      toast.error("Please login first");
      return;
    } else if (amount == 0) {
      return;
    } else {
      const cartItem = {
        configurableProductId: configurableProduct.id,
        productId: product.id,
        quantity: amount,
        option1: configurableProduct.option1,
        option2: configurableProduct.option2,
        image: configurableProduct.images
          ? configurableProduct.images[0]?.url
          : product.images[0].url,
      };
      console.log(cartItem);
      addCartItem(cartItem);
    }
  };

  const handleAddToWishlist = () => {
    if (isLogin() == false) {
      toast.error("Please login first");
      return;
    } else {
      const item = {
        productId: product.id,
      };
      addWishlistItem(item);
    }
  };

  useEffect(() => {
    if (product) {
      console.log(product);
      setConfigurableProduct(
        product.configurableProducts.length
          ? product.configurableProducts[0]
          : {}
      );
      setProductImages(product.images);
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <BarLoader />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <main className="px-12 py-8 max-w-[134rem] m-auto grid grid-cols-[0.8fr_1fr] gap-40">
        <ProductImages
          selectedImage={selectedImage}
          productImages={productImages}
          setSelectedImage={setSelectedImage}
        />

        <section class="price w-full overflow-hidden">
          <h2 class="price-sub__heading text-[#212f4d]">
            {product.category.name} | {product.brand && product.brand.name}
          </h2>
          <h1 className="text-[3rem] font-bold">{product.name}</h1>
          <div class="price-box">
            <div class="price-box__main">
              <span class="price-box__main-new">
                {formatPrice(product.price)}
              </span>
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
            configurableProduct={configurableProduct}
            setProductConfiguration={handleSetProductConfiguration}
          />

          <PriceBox
            amount={amount}
            setAmount={setAmount}
            handleAddToCart={handleAddToCart}
            handleAddToWishlist={handleAddToWishlist}
          />

          {product.warranties.length > 0 && (
            <Warranties warranties={product.warranties} />
          )}

          {product.specifications.length > 0 && (
            <ProductSpecifications specifications={product.specifications} />
          )}

          {/* product description */}
          <ProductDescription description={product.description} />

          {/* <RatingStars ratingAverage={4} /> */}

          <ProductReview productId={product.id} />
        </section>
      </main>
      <Marketing
        category={product.category.id}
        brand={product.brand ? product.brand.name : ""}
        price={product.price ? product.price : 0}
        id = {product.id}
      />
    </div>
  );
}

export default SingleProduct;
