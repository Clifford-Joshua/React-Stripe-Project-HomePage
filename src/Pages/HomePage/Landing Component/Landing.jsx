import React from "react";
import IntroText from "./IntroText";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Stripe from "../../../assets/Images/Stripe-Color.jpg";
import { CloseDesktopModal } from "../../../Features/NavBars/NavSlice";
const Landing = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper onMouseOver={() => dispatch(CloseDesktopModal())}>
      <div className=" relative h-[100vh]">
        <img
          src={Stripe}
          alt=""
          className="absolute w-[100%] h-[100%] object-cover"
        />
        <div className="w-[100%] h-[100%] bg-white absolute clip_div"></div>

        {/* ============================================================= */}
        {/* Landing Page Text */}

        <IntroText />
        {/* ============================================================= */}
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
