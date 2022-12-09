import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { Footer } from "../../sections";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
