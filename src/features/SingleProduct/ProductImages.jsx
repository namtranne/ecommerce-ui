import React from "react";
export function ProductImages({
  selectedImage,
  productImages,
  setSelectedImage,
}) {
  return (
    <section class="img">
      <img
        src={selectedImage?.url}
        alt=""
        className="max-w-full rounded-[5%] cursor-pointer mb-14"
      />

      <div class="img-btns">
        {productImages?.map((image) => {
          return (
            <button
              class="img-btn"
              key={image.id}
              onClick={() => setSelectedImage(image)}
            >
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
  );
}
