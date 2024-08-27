import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import NeubrutalismButton from "../../ui/NeubrutalismButton";

export default function PriceBox({ amount, setAmount, handleAddToCart }) {
  return (
    <div class="price-btnbox">
      <div class="price-btns">
        <button
          class="price-btn__remove price-btn"
          onClick={() =>
            setAmount((prev) => {
              if (prev == 0) return 0;
              else return prev - 1;
            })
          }
        >
          <MinusOutlined />
        </button>
        <span class="price-btn__txt">{amount}</span>
        <button
          class="price-btn__add price-btn"
          onClick={() =>
            setAmount((prev) => {
              console.log(prev);
              return prev + 1;
            })
          }
        >
          <PlusOutlined />
        </button>
      </div>
      <NeubrutalismButton
        handleClick={handleAddToCart}
        className="text-white font-bold"
        text="Add to cart"
      />
      <NeubrutalismButton className="text-white font-bold" text="Add to wishlist" background="red" />
    </div>
  );
}
