import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./ui/WebLayout";
import CustomerSupport from "./pages/CustomerSupport";
import LoginSignUp from "./pages/LoginSignUp";
import { useUserDetails } from "./hooks/useAuthentication";
import UserContext from "./context/UserContext";
import MyAccount from "./pages/MyAccount";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000,
    },
  },
});

function App() {
  const userDetails = useUserDetails();

  return (
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
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="my-account" element={<MyAccount />} />
          </Route>

          {/* does not have header and footer routes */}
          <Route element={<AppLayout />}>
            <Route path="/login" element={<LoginSignUp />} />
            <Route path="/signup" element={<LoginSignUp />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
