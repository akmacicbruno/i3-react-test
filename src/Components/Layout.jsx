import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
