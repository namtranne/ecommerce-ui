import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function AppLayout({ hasHeaderAndFooter = false }) {
  if (hasHeaderAndFooter) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Outlet />;
  }
}

export default AppLayout;
