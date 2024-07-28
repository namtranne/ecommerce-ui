import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import { Descriptions } from "antd";
import React, { useState } from "react";
export function ProductSpecifications({ specifications }) {
  const [isShownSpecifications, setIsShownSpecifications] = useState(
    new Array(specifications.length).fill(false)
  );

  const handleShownSpecifications = (index) => {
    const updatedShownSpecifications = [...isShownSpecifications]; // Create a copy of the array
    updatedShownSpecifications[index] = !updatedShownSpecifications[index]; // Toggle the value at the specified index
    setIsShownSpecifications(updatedShownSpecifications); // Update the state with the new array
  };

  return (
    <div>
      {specifications.map((specification, i) => {
        return (
          <div className="mb-4">
            <Descriptions
              column={1}
              title=<button
                className="text-xl font-bold flex mb-0 p-0 justify-center items-center"
                onClick={() => handleShownSpecifications(i)}
              >
                {specification.name}{" "}
                {isShownSpecifications[i] ? (
                  <CaretDownFilled />
                ) : (
                  <CaretUpFilled />
                )}
              </button>
              layout="horizontal"
              bordered
              items={
                isShownSpecifications[i]
                  ? specification.attributes.map((attribute) => {
                      return {
                        key: attribute.id,
                        label: (
                          <p className="text-lg font-bold">{attribute.name}</p>
                        ),
                        children: (
                          <div
                            className="text-lg"
                            dangerouslySetInnerHTML={{
                              __html: attribute.value,
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
      })}
    </div>
  );
}
