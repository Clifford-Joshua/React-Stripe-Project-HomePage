import React from "react";
import { DesktopNav, MobileNav } from "./ResponsiveNav/main";

const NavBar = () => {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
    </div>
  );
};

export default NavBar;
