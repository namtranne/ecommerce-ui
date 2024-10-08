import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useCartVisibility } from "../context/CartContext";
import Cart from "../pages/Cart";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Logo } from "../../public/G5TechLogo";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { username, firstName, lastName } = useContext(UserContext) || {};
  const isUserLoggedIn = username != null && username != undefined;
  const queryClient = useQueryClient();

  const { toggleCartVisibility, isVisible } = useCartVisibility();

  const logOut = async () => {
    localStorage.removeItem("token");
    toast.success("Logout successfully!!!");
    queryClient.invalidateQueries(["user"]);
    navigate("/");
  };

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
        navigate("products/0");
        break;
      }
      case "Support": {
        navigate("customer-support");
        break;
      }
      case "Account": {
        navigate("my-account");
        break;
      }
      case "SmartPhone": {
        if (window.location.href.includes("products")) {
          window.location.href = "1789";
        } else {
          navigate("products/1789");
        }
        break;
      }
      case "Laptop": {
        if (window.location.href.includes("products")) {
          window.location.href = "8095";
        } else {
          navigate("products/8095");
        }
        break;
      }
      case "Tablet": {
        if (window.location.href.includes("products")) {
          window.location.href = "1794";
        } else {
          navigate("products/1794");
        }
        break;
      }
      case "Desktop": {
        if (window.location.href.includes("products")) {
          window.location.href = "5172";
        } else {
          navigate("products/5172");
        }
        break;
      }
      case "Accessories": {
        if (window.location.href.includes("products")) {
          window.location.href = "1815";
        } else {
          navigate("products/1815");
        }
        break;
      }
      case "Keyboard": {
        if (window.location.href.includes("products")) {
          window.location.href = "5267";
        } else {
          navigate("products/5267");
        }
        break;
      }
      case "Mouse": {
        if (window.location.href.includes("products")) {
          window.location.href = "3428";
        } else {
          navigate("products/3428");
        }
        break;
      }
      default: {
        localStorage.setItem("brand", dest);
        if (window.location.href.includes("products")) {
          window.location.href = "0";
        } else {
          navigate("products/0");
        }
        break;
      }
    }
  };
  return (
    <>
      {/* Overlay */}
      {/* {showModal && (
        <div className="fixed inset-0 bg-black opacity-60 z-10"></div>
      )} */}
      <header
        className={`w-full h-[10vh] flex justify-between items-center bg-[#393E46] top-0 z-40 ${
          showModal ? " z-20" : ""
        }`}
      >
        <div className="flex-1 flex justify-start pl-4 py-2 h-full">
          <Logo className="hover:fill-[#f7f7f7]" />
        </div>
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
              <div className="flex ">
                <div className="w-1/3 pr-15 m-20">
                  <p className="block w-full font-bold text-3xl pb-5">
                    Categories
                  </p>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("SmartPhone")}
                  >
                    Smartphones
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Laptop")}
                  >
                    Laptops
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Tablet")}
                  >
                    Tablets
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Desktop")}
                  >
                    Desktops
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Accessories")}
                  >
                    Accessories
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Keyboard")}
                  >
                    Keyboards
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Mouse")}
                  >
                    Mouse
                  </button>
                </div>
                <div className="w-1/3 pl-15 m-20">
                  <p className="block w-full font-bold text-3xl pb-5">Brands</p>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Samsung")}
                  >
                    Samsung
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Apple")}
                  >
                    Apple
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Dell")}
                  >
                    Dell
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Asus")}
                  >
                    Asus
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Acer")}
                  >
                    Acer
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("MSI")}
                  >
                    MSI
                  </button>
                  <button
                    className="block w-full font-light text-3xl text-left pb-2"
                    onClick={() => navigateTo("Xiaomi")}
                  >
                    Xiaomi
                  </button>
                </div>
                <div className="w-2/3">
                  <img
                    className="w-full h-full object-cover object-center rounded-r-md"
                    src="https://imgur.com/fBMFh5i.png"
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
          <button
            className={`mx-2 p-2 z-20 font-bold text-2xl text-[#99a0ac] hover:text-white`}
            onClick={() => navigateTo("Support")}
          >
            Customer Support
          </button>
        </nav>
        <div className="flex-1 flex justify-end">
          {isUserLoggedIn ? (
            <>
              <button
                className={`mx-2 p-2 z-20 font-bold text-2xl text-[#99a0ac] hover:text-white`}
                onClick={toggleCartVisibility} // Toggle cart visibility
              >
                <ShoppingCartOutlined />
              </button>
              <Cart />
              <button
                onClick={() => navigateTo("Account")}
                className={`mx-2 p-2 z-20 font-bold text-2xl text-[#99a0ac] hover:text-white`}
              >
                {firstName + " " + lastName}
              </button>
              <button
                onClick={() => logOut()}
                className={`mx-2 p-2 z-20 font-bold text-2xl text-[#99a0ac] hover:text-white`}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
