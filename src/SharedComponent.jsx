import React from "react";
import { NavBar, Footer } from "./Components/main";
import { Outlet } from "react-router-dom";

const SharedComponent = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedComponent;
