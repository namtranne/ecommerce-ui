import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { LuUser2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { BsBag, BsBagHeart } from "react-icons/bs";
import { TbClockSearch } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { useUserDetails } from "../../hooks/useUser";

const options = [
  { icon: LuUser2, name: "User Profile" },
  { icon: IoLocationOutline, name: "Delivery Address" },
  { icon: BsBag, name: "My Orders" },
  { icon: BsBagHeart, name: "Wish list" },
  { icon: RiLockPasswordLine, name: "Change Password" },
];

export const MyAccountControlPanel = ({ selectedIndex, setSelectedIndex }) => {
  // Dividing lines
  const dividerIndices = [1, 3, 4, 5];

  const calculateIndicatorPosition = (selectedIndex) => {
    const dividerCount = dividerIndices.filter(
      (index) => index < selectedIndex
    ).length;
    const itemHeight = 56; // Height of each item
    const dividerHeight = 6; // divider height + margins/paddings
    return selectedIndex * itemHeight + dividerCount * dividerHeight;
  };

  return (
    <motion.div className="relative w-96 rounded-3xl bg-zinc-800">
      <AccountStatusField className="left-0 top-0"></AccountStatusField>
      <motion.div
        className="absolute left-0 top-[148px] h-13 w-1 bg-zinc-50 rounded"
        initial={{ y: 0 }}
        animate={{ y: calculateIndicatorPosition(selectedIndex) }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <motion.ul className=" space-y-1">
        {options.map((option, index) => (
          <React.Fragment key={index}>
            <AccountControlOption
              optionIcon={option.icon}
              optionName={option.name}
              onClick={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
            />
            {dividerIndices.includes(index) && (
              <li className="w-full h-[2px] bg-zinc-600 my-2"></li>
            )}
          </React.Fragment>
        ))}
        {/* <div>
          <AccountControlOption
            optionIcon={CiLogout}
            optionName="Log Out"
            classNameAdd="rounded-b-3xl"
          />
        </div> */}
      </motion.ul>
    </motion.div>
  );
};

const AccountControlOption = ({
  optionIcon: OptionIcon,
  optionName,
  onClick,
  isSelected,
  classNameAdd,
}) => {
  return (
    <motion.li
      className={twMerge(
        `flex flex-grow pl-10 pr-32 py-3 my-0 items-center w-full space-x-4
                text-zinc-200 text-xl hover:cursor-pointer hover:bg-zinc-700 ${
                  isSelected ? "bg-zinc-700 font-semibold" : ""
                }`,
        classNameAdd
      )}
      onClick={onClick}
    >
      <motion.div>
        <OptionIcon />
      </motion.div>
      <motion.div>{optionName}</motion.div>
    </motion.li>
  );
};

const AccountStatusField = () => {
  const userDetails = useUserDetails() || {};
  return (
    <motion.div className="flex flex-row p-4 border-2 border-zinc-900 rounded-3xl shadow-3xl items-center">
      <motion.div className="w-28 h-28">
        <img
          src="https://i.postimg.cc/sDdV1r1f/signup-banner.png"
          className="rounded-full"
        />
      </motion.div>
      <motion.div className="text-3xl text-zinc-200 pl-10">
        {userDetails.firstName} {userDetails.lastName}
      </motion.div>
    </motion.div>
  );
};
