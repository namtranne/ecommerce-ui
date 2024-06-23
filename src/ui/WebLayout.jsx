import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function AppLayout({ hasHeaderAndFooter = false }) {
  if (hasHeaderAndFooter) {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  } else {
    return <Outlet />;
  }
}

export default AppLayout;
