import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const baseUrl = window.location.origin;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const navigateTo = (dest) => {
    switch (dest) {
      case "Home": {
        navigate("/");
        break;
      }
      case "Login": {
        navigate("Login");
        break;
      }
      case "Register": {
        navigate("signup");
        break;
      }
      case "Shop": {
        navigate("products/0/24/1");
      }
    }
  };
  return (
    <>
      {/* Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black opacity-60 z-10"></div>
      )}
      <header
        className={`w-full flex justify-between items-center bg-[#212f4d] absolute top-0 z-40 ${
          showModal ? "relative z-20" : ""
        }`}
      >
        <div className="flex-1"></div>
        <nav className="flex py-3">
          <button
            onClick={() => navigateTo("Home")}
            className={`mx-2 p-2 z-20 font-bold text-2xl text-[#99a0ac] hover:text-white`}
          >
            Home
          </button>
          <div>
            <button
              className={`mx-2 p-2 z-20 font-bold text-2xl ${
                showModal ? "text-white" : "text-[#99a0ac]"
              }`}
              onMouseEnter={() => setShowModal(true)}
              onMouseLeave={() => setShowModal(false)}
              onClick={() => navigateTo("Shop")}
            >
              Shop
            </button>
            <div
              className={`absolute w-3/4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-md transition-opacity duration-500 ease-in-out ${
                showModal ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setShowModal(true)}
              onMouseLeave={() => setShowModal(false)}
            >
              <div className="flex">
                <div className="w-1/3 pr-15 m-20">
                  <p className="block w-full font-bold text-3xl pb-5">
                    Categories
                  </p>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Smartphones
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Laptops
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Tablets
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Desktops
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Accessories
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Keyboards
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Mouse
                  </button>
                </div>
                <div className="w-1/3 pl-15 m-20">
                  <p className="block w-full font-bold text-3xl pb-5">Brands</p>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Samsung
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Apple
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Dell
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Asus
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Acer
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    MSI
                  </button>
                  <button className="block w-full font-light text-3xl text-left pb-2">
                    Xiaomi
                  </button>
                </div>
                <div className="w-2/3">
                  <img
                    className="w-full h-full object-cover object-center rounded-r-md"
                    src="src/ui/assets/shop-header.jpg"
                    alt="Shop Header"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className={`mx-2 p-2 z-20 font-bold text-2xl text-[#99a0ac] hover:text-white`}
            onClick={scrollToBottom}
          >
            Contact
          </button>
        </nav>
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => navigateTo("Login")}
            className={`mx-2 p-2 z-20 font-bold text-2xl text-[#99a0ac] hover:text-white`}
          >
            Login
          </button>
          <button
            onClick={() => navigateTo("Register")}
            className={`mx-2 p-2 z-20 font-bold text-2xl text-[#99a0ac] hover:text-white`}
          >
            Register
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
