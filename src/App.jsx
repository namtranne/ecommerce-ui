import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast } from "react-toastify";

import UserContext from "./context/UserContext";
import SocketClientContext from "./context/SocketClientContext";
import { CartProvider } from "./context/CartContext";

import { useUserDetails } from "./hooks/useUser";
import { ConnectServerSocket } from "./hooks/useSocket";

import { login, signUp } from "./services/apiAuthenticate";
import { isLogin } from "./utils/axios";

// Import your components
import AppLayout from "./ui/WebLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import CustomerSupport from "./pages/CustomerSupport";
import LoginSignUp from "./pages/LoginSignUp";
import MyAccount from "./pages/MyAccount";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import Error from "./pages/Error";

function App() {
  const queryClient = useQueryClient();
  const userDetails = useUserDetails();
  const [socketClient, setSocketClient] = useState(null);
  const [userSubscription, setUserSubscription] = useState(null);

  useEffect(() => {
    const connectSocket = async () => {
      if (isLogin() && userDetails?.id) {
        try {
          const client = await ConnectServerSocket();
          setSocketClient(client);

          // Subscribe to user-specific topic
          if (client && client.connected) {
            const subscription = client.subscribe(
              `/topic/${userDetails.id}`,
              (message) => {
                // Handle the message (e.g., update state, show notification)
                toast.info(`New message: ${message.body}`);
              }
            );
            setUserSubscription(subscription);
          }
        } catch (err) {
          console.error("Cannot connect to chat server:", err);
          // toast.error("Cannot connect to chat server");
        }
      }
    };

    connectSocket();

    // Cleanup function
    return () => {
      if (userSubscription) {
        userSubscription.unsubscribe();
      }
      if (socketClient) {
        socketClient.deactivate();
      }
    };
  }, [userDetails?.id]); // Depend on userDetails.id to re-run when user logs in or out

  const handleRefetchUserDetails = () => {
    queryClient.invalidateQueries("user");
  };

  const loginUser = async (credentials) => {
    try {
      await login(credentials);
      handleRefetchUserDetails();
    } catch (err) {
      throw err;
    }
  };

  const signupUser = async (credentials) => {
    try {
      await signUp(credentials);
      handleRefetchUserDetails();
    } catch (err) {
      throw err;
    }
  };

  return (
    <SocketClientContext.Provider value={{ client: socketClient }}>
      <CartProvider>
        <UserContext.Provider value={userDetails}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Router>
            <Routes>
              {/* Routes with header and footer */}
              <Route element={<AppLayout hasHeaderAndFooter />}>
                <Route path="/" element={<Home />} />
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

              {/* Routes without header and footer */}
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
                <Route
                  path="/payment/success/:payment"
                  element={<PaymentSuccess />}
                />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </Router>
        </UserContext.Provider>
      </CartProvider>
    </SocketClientContext.Provider>
  );
}

export default App;
