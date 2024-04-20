import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import TopbarComp from "../TopBar/TopBarComp.jsx";

const Layout = () => {
  return (
    <div>
      <TopbarComp />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
