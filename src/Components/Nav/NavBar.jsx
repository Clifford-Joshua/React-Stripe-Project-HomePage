import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper className="absolute w-[100%] z-[5]">
      <nav className="p-[1.5rem]">
        <MobileNav />
        <DesktopNav />
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  /* ====================================================== */

  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default NavBar;
