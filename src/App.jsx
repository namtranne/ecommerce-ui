import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import AppLayout from "./ui/WebLayout";
import CustomerSupport from "./pages/CustomerSupport";
import LoginSignUp from "./pages/LoginSignUp";
import UserContext from "./context/UserContext";
import MyAccount from "./pages/MyAccount";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";
import { login, signUp } from "./services/apiAuthenticate";
import { ConnectServerSocket } from "./hooks/useSocket";
import { getUserDetails } from "./services/apiUser";

function App() {
  const [userDetails, setUserDetails] = useState({});

  const loginUser = async (credentials) => {
    try {
      console.log(credentials);
      await login(credentials);
      const client = await ConnectServerSocket();
      const userDetails = await getUserDetails();
      setUserDetails(userDetails);
    } catch (err) {
      console.log(err);
    }
  };

  const signupUser = async (credentials) => {
    try {
      await signUp(credentials);
      const client = await ConnectServerSocket();
      const userDetails = await getUserDetails();
      setUserDetails(userDetails);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartProvider>
      <UserContext.Provider value={userDetails}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <Routes>
            {/* Has header and footer routes */}
            <Route element={<AppLayout hasHeaderAndFooter />}>
              <Route path="/" exact element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/products/:categoryId" element={<Products />} />
              <Route path="/customer-support" element={<CustomerSupport />} />
              <Route path="my-account" element={<MyAccount />} />
              <Route
                path="/products/product-info"
                element={<SingleProduct />}
              />
              <Route path="checkout" element={<Checkout />} />
            </Route>

            {/* does not have header and footer routes */}
            <Route element={<AppLayout />}>
              <Route
                path="/login"
                element={
                  <LoginSignUp
                    initSignUp={false}
                    loginUser={loginUser}
                    signupUser={signupUser}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <LoginSignUp
                    initSignUp={true}
                    loginUser={loginUser}
                    signupUser={signupUser}
                  />
                }
              />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </CartProvider>
  );
}

export default App;
