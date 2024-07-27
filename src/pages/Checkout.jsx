import React, { useState, useMemo, useEffect } from "react";
import {
  DownOutlined,
  ShoppingOutlined,
  CreditCardFilled,
  BankFilled,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { ReactSVG } from "react-svg"; // Import ReactSVG from react-svg
import momoIcon from "../ui/assets/momo_icon_square_blackbg.svg"; // Import the SVG
import zalopayIcon from "../ui/assets/Logo FA-12.png";

const usePreloadImages = (images) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, [images]);

  return imagesLoaded;
};

const paymentMethods = [
  { name: "Credit Card", icon: <CreditCardFilled /> },
  { name: "Bank Transfer", icon: <BankFilled /> },
  { name: "PayPal", icon: <FontAwesomeIcon icon={faPaypal} /> },
  {
    name: "Momo",
    icon: <ReactSVG src={momoIcon} className="w-1/2" />,
  },
  {
    name: "ZaloPay",
    icon: (
      <img
        src={zalopayIcon}
        alt="zalopay"
        className="w-1/2 bg-gray-700 p-[3px] py-[5px] rounded-sm"
      />
    ),
  },
];

const Checkout = () => {
  const [country, setCountry] = useState("");
  const location = useLocation();
  const { products } = location.state || {};
  const [showSummary, setShowSummary] = useState(false);
  const [countryDropdownFocus, setCountryDropdownFocus] = useState(false);
  const [paymentDropdownFocus, setPaymentDropdownFocus] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const imageUrls = useMemo(
    () => products.map((product) => product.image),
    [products]
  );
  const imagesLoaded = usePreloadImages(imageUrls);

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  const toggleCountryDropdownFocus = () => {
    setCountryDropdownFocus(!countryDropdownFocus);
  };

  const togglePaymentDropdownFocus = () => {
    setPaymentDropdownFocus(!paymentDropdownFocus);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setPaymentDropdownFocus(false);
  };

  const productElements = useMemo(
    () =>
      products.map((product, index) => (
        <div key={index} className="flex justify-between mb-5">
          <div className="w-fit flex flex-row relative">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="border border-solid border-black rounded-md shadow-md mr-2 w-[5vw] h-[10vh]"
              style={{ willChange: "transform, opacity" }}
            />
            <span className="absolute top-0 left-0 z-10 bg-black text-white px-1 text-xs rounded-tl-md rounded-br-md">
              x{product.quantity}
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-semibold">{product.name}</span>
              <span className="text-lg font-semibold">
                Price:
                <span className="ml-2 text-lg font-light">
                  ${product.price}
                </span>
              </span>
            </div>
          </div>
          <span>${product.price * product.quantity}</span>
        </div>
      )),
    [products]
  );

  return (
    <div className="p-10">
      <div className="text-5xl font-bold">Checkout</div>
      <div
        onClick={toggleSummary}
        className={`p-4 flex flex-row items-center align-middle mt-4 border rounded-md hover:cursor-pointer hover:shadow-md transition-shadow ${
          showSummary ? "border-black" : "border-gray-200"
        }`}
      >
        <ShoppingOutlined />
        <button className="text-[#484f56] font-semibold">
          <span className="mx-2">Show order summary</span>{" "}
          <DownOutlined
            style={{
              fontSize: "15px",
              transform: showSummary ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {showSummary && imagesLoaded && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 p-4 pb-1 border rounded shadow-lg"
            style={{ originY: 0 }}
          >
            {productElements}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.form
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 space-y-4 w-[60vw]"
      >
        <div className="flex flex-row justify-between">
          <div className="w-[48%]">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full flex-1 mt-1 border border-gray-300 rounded-md shadow-sm p-2 hover:shadow-md transition-shadow"
              required
            />
          </div>
          <div className="w-[48%]">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2 hover:shadow-md transition-shadow"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="House number, Street address, Ward, District, City"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 placeholder-gray-300 hover:shadow-md transition-shadow"
            required
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <CountryDropdown
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 hover:cursor-pointer hover:shadow-md transition-shadow ${
              countryDropdownFocus === false && country === ""
                ? "text-gray-300"
                : "text-gray-700"
            }`}
            value={country}
            defaultOptionLabel="Select Country"
            onChange={(val) => setCountry(val)}
            onClick={toggleCountryDropdownFocus}
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 hover:shadow-md transition-shadow"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Coupon Code
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 hover:shadow-md transition-shadow"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Payment method
          </label>
          <div className="relative">
            <button
              type="button"
              className={`flex mt-1 w-full h-fit border border-gray-300 rounded-md shadow-sm p-2 text-left ${
                paymentDropdownFocus === false && paymentMethod === ""
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
              onClick={togglePaymentDropdownFocus}
            >
              {paymentMethod ? (
                <>
                  <span className="w-[3vw]">{paymentMethod.icon}</span>
                  <span>{paymentMethod.name}</span>
                </>
              ) : (
                "Select Payment Method"
              )}
            </button>
            {paymentDropdownFocus && (
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: -30 },
                  visible: { opacity: 1, y: 0 },
                  duration: 0.5,
                }}
                className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg text-gray-700"
              >
                {paymentMethods.map((method) => (
                  <li
                    key={method.name}
                    className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                    onClick={() => handlePaymentMethodChange(method)}
                  >
                    <span className="w-[3vw]">{method.icon}</span>
                    <span>{method.name}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </div>
        <motion.button
          type="submit"
          className="mt-4 w-full p-2 rounded-md shadow-md"
          whileHover={{
            backgroundColor: "#0b1215", // Tailwind's bg-blue-700 color
            color: "#ffffff", // Tailwind's text-white color
            transition: { duration: 0.2 },
          }}
          style={{ backgroundColor: "#352f36", color: "#ffffff" }} // Tailwind's bg-blue-500 color
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Checkout;
