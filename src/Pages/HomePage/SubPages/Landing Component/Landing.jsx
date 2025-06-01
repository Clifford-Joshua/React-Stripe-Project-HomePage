import React from "react";
import IntroText from "./IntroText";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Stripe from "../../../../assets/Images/Stripe-Color.jpg";
import { CloseDesktopModal } from "../../../../Features/NavBars/NavSlice";
const Landing = () => {
  const dispatch = useDispatch();
  const { navHeight } = useSelector((store) => store.NavBar);

  return (
    <Wrapper onMouseOver={() => dispatch(CloseDesktopModal())}>
      {/* ======================================================================== */}
      {/* container div */}
      <div
        className="min-h-[100vh] md:min-h-[50vh] relative"
        style={{ paddingTop: `${navHeight ? navHeight : 70}px` }}
      >
        {/* ====================================================================== */}
        {/* Hero container */}
        <div className="absolute top-0 w-[100%] h-[100%]">
          <div className="w-[100%] h-[100%] bg-white absolute top-0 z-0 clip_div"></div>
          <img
            src={Stripe}
            alt="Stripe image"
            className="h-[100%] object-cover w-[100%]"
          />
        </div>

        {/* ======================================================================== */}
        {/* Text session */}
        <IntroText />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  /* ====================================================== */
  .clip_div {
    clip-path: polygon(0 71%, 100% 30%, 100% 100%, 0% 100%);
  }
  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default Landing;
