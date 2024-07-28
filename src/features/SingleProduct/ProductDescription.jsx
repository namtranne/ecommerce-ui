import { DownCircleFilled, UpCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
export function ProductDescription({ description }) {
  const [isShowFullDescription, setShowFullDescription] = useState(false);

  function processDescription(description) {
    const tempDiv = document.createElement("div");

    // Set the inner HTML of the div to the product description
    tempDiv.innerHTML = description;

    // Replace &nbsp; with normal spaces
    const sanitizedDescription = tempDiv.innerHTML.replace(/&nbsp;/g, " ");
    return sanitizedDescription;
  }

  const toggleDescription = () => {
    setShowFullDescription(!isShowFullDescription);
  };

  return (
    <div>
      <button
        className="text-xl font-bold flex mb-0 p-0 items-center"
        // onClick={() => setIsShownWarranties((prev) => !prev)}
      >
        Product description{" "}
      </button>
      <div class="relative">
        <div
          className={
            "mt-8 text-[1.2rem] whitespace-pre-line text-[var(--dark-grayish-blue)] text-base font-medium" +
            (isShowFullDescription ? "" : " max-h-80 overflow-hidden")
          }
          dangerouslySetInnerHTML={{
            __html: processDescription(description),
          }}
        />
        <div className="w-full flex items-center justify-center">
          <button
            onClick={toggleDescription}
            className="text-white bg-black flex self-center p-4 items-center mt-4"
          >
            <span className="text-white mr-2 font-bold">
              {isShowFullDescription ? "Show less" : "Show more"}{" "}
            </span>
            <span>
              {isShowFullDescription ? (
                <UpCircleFilled />
              ) : (
                <DownCircleFilled />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
