import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, useTransform, useScroll } from "framer-motion";
import UserContext from "../context/UserContext";
import { MyAccountControlPanel } from "../features/MyAccount/MyAccount-Control-Panel";
import { UserProfile } from "../features/MyAccount/UserProfile";
import { UserAddress } from "../features/MyAccount/UserAddress";
import { UserWishlist } from "../features/MyAccount/UserWishlist";
import { isLogin } from "../utils/axios";
import { UserOrder } from "../features/MyAccount/UserOrder";

export default function MyAccount() {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDay,
  } = useContext(UserContext) || {};

  const navigate = useNavigate();
  
  if (!isLogin) {
    toast.error("You haven't logged in!!!");
    navigate("/login");
  }

  // Retrieve the selectedIndex from localStorage or default to 0
  const initialSelectedIndex = parseInt(localStorage.getItem("selectedIndex")) || 0;
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  // Update localStorage whenever selectedIndex changes
  useEffect(() => {
    localStorage.setItem("selectedIndex", selectedIndex);
  }, [selectedIndex]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const userInfo = { firstName, lastName, email, phoneNumber, birthDay };

  return (
    <div className="flex w-full min-h-screen items-start py-32 px-12 bg-[#EEEEEE]">
      <motion.div
        className="w-1/3 h-fit flex justify-center sticky top-32"
        style={{ y }}
      >
        <MyAccountControlPanel
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </motion.div>
      <div className="w-2/3 flex flex-row justify-center self-start">
        {selectedIndex === 0 && <UserProfile userInfo={userInfo} />}
        {selectedIndex === 1 && <UserAddress />}
        {selectedIndex === 2 && <UserOrder />}
        {selectedIndex === 3 && <UserWishlist />}
      </div>
    </div>
  );
}
