import { Outlet } from "react-router-dom";
import Header from "./component/header";
import Navigation from "./component/navigation";

import "../../asset/styles/layout.scss";

const Layout = () => {
  return (
    <div className="continer">
      <div className="navbar">
        <Navigation />
      </div>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
