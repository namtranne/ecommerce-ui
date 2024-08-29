import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useAddUserAddress, useCart, useUserAddresses } from "../hooks/useUser";
import CheckoutItem from "../features/Checkout/CheckoutItem";
import { EditAddressForm } from "../features/MyAccount/UserAddress";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { ProfileButton } from "../features/MyAccount/ProfileButton";
import authAxios from "../utils/axios";
import { formatPrice } from "../utils/product";
import { toast } from "react-toastify";
import cities from "../data/cities.json";
import districts from "../data/districts.json";
import { Spin } from "antd";

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const paymentMethods = [
  {
    name: "VN_PAY",
    icon: <img src="https://www.svgrepo.com/show/520025/v-vnpay.svg" />,
  },
  {
    name: "CASH",
    icon: <img src="https://www.svgrepo.com/show/453826/receive-package.svg" />,
  },
];

const Checkout = () => {
  const { isLoading, data: addresses } = useUserAddresses();
  const [isMakingPayment, setIsMakingPayment] = useState(false);
  const { data: cartItems, isLoading: isLoadingCartItems } = useCart();
  const [paymentDropdownFocus, setPaymentDropdownFocus] = useState(false);
  const [addressesDropdownFocus, setAddressesDropdownFocus] = useState(false);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const { addUserAddress } = useAddUserAddress();
  const [newAddress, setNewAddress] = useState({});
  const [isAddingAddress, setIsAddingAddress] = useState(false);

  const togglePaymentDropdownFocus = () => {
    setPaymentDropdownFocus(!paymentDropdownFocus);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setPaymentDropdownFocus(false);
  };

  const toggleAddressesDropdownFocus = () => {
    setAddressesDropdownFocus(!addressesDropdownFocus);
  };

  const handleChangeAddress = (address) => {
    setAddress(address);
    toggleAddressesDropdownFocus();
  };

  const convertAddress = (address) => {
    const province = cities.find(
      (city) => city.value === address.province
    ).label;
    const dist = districts.find(
      (district) => district.value === address.district
    ).label;
    return `${address.addressLine1}, ${address.addressLine2}, ${dist}, ${province}, Vietnam\n
      Phone number: ${address.phoneNumber}\n
      Receiver's name: ${address.receiverName}`;
  };

  const onCloseAddressForm = () => {
    setIsAddingAddress(false);
  };

  const handleAddAddress = (address) => {
    // console.log(address);
    addUserAddress(address);
    onCloseAddressForm();
  };

  const handleAddClick = () => {
    setIsAddingAddress(true);
  };

  const handlePlaceOrder = async () => {
    if (!address) {
      toast.error("Please select an address!");
    }
    if (!paymentMethod) {
      toast.error("Please select a payment method!");
    }
    try {
      const data = {
        paymentMethod: paymentMethod.name,
        address: convertAddress(address),
      };
      setIsMakingPayment(true);
      const response = await authAxios.post("/payment/create_payment", data);
      window.location.href = response.data.url;
    } catch (err) {
      console.log(err);
      toast.error("There was an error creating the order");
    }
    setIsMakingPayment(false);
  };

  if (isLoading || isLoadingCartItems) {
    return (
      <Spin size="large" tip="Loading...">
        {content}
      </Spin>
    );
  }

  return (
    <div className="p-10">
      <div className="text-5xl font-bold">Checkout</div>

      <motion.form
        onSubmit={(e) => e.preventDefault()}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 space-y-4 w-[60vw] flex flex-col"
      >
        <div>
          <ProfileButton
            buttonIcon={MdOutlineAddLocationAlt}
            buttonName={isLoading ? "Adding address..." : "Add Address"}
            onClick={handleAddClick}
            optionalClassName="mt-12 mb-4 mr-24 self-end"
          />
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Addresses
          </label>
          <div className="relative">
            <button
              type="button"
              className={`flex mt-1 w-full h-fit border border-gray-300 rounded-md shadow-sm p-2 text-left ${
                addressesDropdownFocus === false && address === ""
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
              onClick={toggleAddressesDropdownFocus}
            >
              {address ? <>{convertAddress(address)}</> : "Select Address"}
            </button>
            {addressesDropdownFocus && (
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
                {addresses?.map((address) => (
                  <li
                    key={address.id}
                    className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleChangeAddress(address)}
                  >
                    <span className="w-[3vw] font-bold">{address.title}</span>
                    <div>
                      <p className="p-0 mb-0">
                        {" "}
                        {address.addressLine1 +
                          ", " +
                          address.addressLine2 +
                          ", " +
                          address.city +
                          ", " +
                          address.country}
                      </p>
                      <p className="p-0 mb-0">
                        Phone number: {address.phoneNumber}
                      </p>
                      <p className="p-0 mb-0">
                        Receiver's name: {address.receiverName}
                      </p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </div>
        {isAddingAddress && (
          <EditAddressForm
            address={newAddress}
            onClose={onCloseAddressForm}
            onSubmit={handleAddAddress}
          />
        )}
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
                <div className="flex items-center">
                  <span className="w-[3vw]">{paymentMethod.icon}</span>
                  <span>{paymentMethod.name}</span>
                </div>
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
                    className="p-2 flex items-center hover:bg-gray-100 cursor-pointer "
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
        <CheckoutItem className="flex-grow" products={cartItems} />
        <div className="text-xl font-bold flex justify-between">
          <p>Total: </p>
          <p>
            {formatPrice(
              cartItems.reduce(
                (acc, cur) => (acc += cur.product.price * cur.quantity),
                0
              )
            )}
          </p>
        </div>

        <motion.button
          // type="submit"
          className="mt-4 w-1/3 p-2 rounded-md shadow-md mx-auto"
          whileHover={{
            backgroundColor: "#0b1215", // Tailwind's bg-blue-700 color
            color: "#ffffff", // Tailwind's text-white color
            transition: { duration: 0.2 },
          }}
          style={{ backgroundColor: "#352f36", color: "#ffffff" }} // Tailwind's bg-blue-500 color
          onClick={() => handlePlaceOrder()}
        >
          {isMakingPayment ? "Placing order..." : "Place order"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Checkout;
