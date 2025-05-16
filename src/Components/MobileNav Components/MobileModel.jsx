import React from "react";
import styled from "styled-components";
import { Title, NavLinks, NavFooter, Modal } from "./Mobile/main";

const MobileModel = () => {
  return (
    <Wrapper className="w-full h-[100vh] bg-white fixed top-0 left-0 z-[50]  flex flex-col gap-[0.4rem] ">
      <Title />

      <div className="h-[90%] overflow-hidden relative">
        <NavLinks />
        <Modal />
      </div>
      <NavFooter />
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
  @media screen and (width >= 764px) {
    display: none;
  }
  /* ====================================================== */
`;

export default MobileModel;
