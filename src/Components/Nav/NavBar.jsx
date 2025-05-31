/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import styled from "styled-components";

import {
  CloseDesktopModal,
  setNavHeight,
} from "../../Features/NavBars/NavSlice";

import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const { navHeight } = useSelector((store) => store.NavBar);

  const navContainer = useRef(null);

  useEffect(() => {
    // =========================================================
    // Set initial nav height
    // and use if in the intro text as top  position
    const containerHeight = navContainer.current.getBoundingClientRect().height;
    if (containerHeight !== navHeight) {
      dispatch(setNavHeight(containerHeight));
    }
  }, [navHeight]);

  const removeDesktopModal = (e) => {
    if (e.target.classList.contains("navLink-container")) {
      dispatch(CloseDesktopModal());
    }
  };

  return (
    <Wrapper className="absolute w-[100%] z-[999]" ref={navContainer}>
      <nav
        className="p-[1.5rem] lg:p-[0.8rem]"
        onMouseOver={removeDesktopModal}
      >
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
