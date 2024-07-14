import { Spin } from "antd";

function NeubrutalismButton({ text, handleClick, isLoading }) {
  return (
    <button
      className="px-20 py-2 font-medium bg-black text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
      onClick={() => handleClick()}
    >
      {isLoading ? <Spin /> : text}{" "}
    </button>
  );
}

export default NeubrutalismButton;
