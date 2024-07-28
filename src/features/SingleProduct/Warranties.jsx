import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import { Descriptions } from "antd";
import React, { useState } from "react";
export function Warranties({ warranties }) {
  const [isShownWarranties, setIsShownWarranties] = useState(false);
  return (
    <div>
      <Descriptions
        column={1}
        title=<button
          className="text-xl font-bold flex mb-0 p-0 items-center"
          onClick={() => setIsShownWarranties((prev) => !prev)}
        >
          Warranty information{" "}
          {isShownWarranties ? <CaretDownFilled /> : <CaretUpFilled />}
        </button>
        layout="horizontal"
        bordered
        items={
          isShownWarranties
            ? warranties.map((warranty) => {
                return {
                  key: warranty.id,
                  label: (
                    <p className="text-lg font-bold">{warranty.warrantyName}</p>
                  ),
                  children: (
                    <div
                      className="text-lg"
                      dangerouslySetInnerHTML={{
                        __html: warranty.warrantyValue,
                      }}
                    />
                  ),
                };
              })
            : null
        }
      />
    </div>
  );
}
