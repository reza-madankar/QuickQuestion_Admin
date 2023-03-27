import { Outlet } from "react-router-dom";
import Navigation from "./component/navigation";

const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
