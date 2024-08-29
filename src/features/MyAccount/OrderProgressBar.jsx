import React from "react";
import { motion } from "framer-motion";

import { TbClockDollar } from "react-icons/tb";
import { MdPriceCheck } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPackageBold } from "react-icons/pi";
import { BsCartCheckFill } from "react-icons/bs";

const ORDER_STATUS = {
  WAITING_FOR_PAYMENT: "Waiting for Payment",
  PAID: "Paid",
  PREPARING: "Preparing",
  SHIPPING: "Shipping",
  DELIVERED: "Delivered",
};

const statusListVNPAY = [
  {
    label: ORDER_STATUS.WAITING_FOR_PAYMENT,
    icon: <TbClockDollar />,
  },
  {
    label: ORDER_STATUS.PAID,
    icon: <MdPriceCheck />,
  },
  {
    label: ORDER_STATUS.PREPARING,
    icon: <PiPackageBold />,
  },
  {
    label: ORDER_STATUS.SHIPPING,
    icon: <LiaShippingFastSolid />,
  },
  {
    label: ORDER_STATUS.DELIVERED,
    icon: <BsCartCheckFill />,
  },
];

const statusListCASH = [
  {
    label: ORDER_STATUS.PREPARING,
    icon: <PiPackageBold />,
  },
  {
    label: ORDER_STATUS.SHIPPING,
    icon: <LiaShippingFastSolid />,
  },

  {
    label: ORDER_STATUS.WAITING_FOR_PAYMENT,
    icon: <TbClockDollar />,
  },

  {
    label: ORDER_STATUS.PAID,
    icon: <MdPriceCheck />,
  },

  {
    label: ORDER_STATUS.DELIVERED,
    icon: <BsCartCheckFill />,
  },
];

export function OrderProgressBar({ currentStatus, paymentMethod }) {

  const statusList = paymentMethod === "VN_PAY" ? statusListVNPAY : statusListCASH;
  const currentIndex = statusList.findIndex(
    (status) => status.label === currentStatus
  );

  return (
    <div className="flex items-center w-full py-8">
      {
        statusList.map((status, index) => (
          <div key={status.label} className="flex-1 flex flex-col items-center">
            <div className="relative flex items-center">
              {/* Node with Icon */}
              <motion.div
                className={`rounded-full ${
                  index <= currentIndex ? "bg-green-500" : "bg-gray-300"
                } w-12 h-12 flex justify-center items-center text-white`}
                layout
              >
                <motion.div
                  className={`text-2xl ${
                    index <= currentIndex ? "text-white" : "text-gray-400"
                  }`}
                  layout
                >
                  {status.icon}
                </motion.div>
                <div className="text-center mt-2 text-sm absolute top-full w-full">
                      <p
                      className={`${
                          index <= currentIndex ? "text-green-500" : "text-gray-500"
                      }`}
                      >
                      {status.label}
                      </p>
              </div>
              </motion.div>
              {/* Connecting Line */}
              {index < statusList.length - 1 && (
                <motion.div
                  className={`flex-1 h-[2px] min-w-24 mx-4 ${
                    index < currentIndex ? "bg-green-500" : "bg-gray-300"
                  }`}
                  layout
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                />
              )}
            </div>         
          </div>
      ))}
    </div>
  );
}
