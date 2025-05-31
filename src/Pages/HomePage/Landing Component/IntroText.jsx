import React from "react";
import moment from "moment";
import Title from "./Title";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";
import Arrow from "../../../Components/Button/Arrow";
import Img from "../../../assets/Images/StripePayment.png";

const IntroText = () => {
  // Adjust the navHeight based on screen size
  const responsiveScreenSize = window.innerWidth >= 1024;
  const { navWidth } = useSelector((store) => store.NavBar);

  return (
    <Wrapper className="z-10 relative overflow-hidden">
      <div className="flex justify-center">
        <div
          style={{
            width:
              navWidth === 0
                ? "90%"
                : responsiveScreenSize
                ? `${navWidth}px`
                : "100%",
          }}
          className="lg:py-[2rem] flex flex-col gap-[1.5rem]"
        >
          {/* ======================================================== */}
          {/* Dark div */}
          <div className="bg-[#0000006c] lg:flex  items-center gap-[1rem] max-w-fit py-[0.5rem] px-[0.85rem] lg:px-[0.4rem] lg:py-[0.2rem] rounded lg:rounded-full text-white">
            <h2 className=" lg:flex  lg:item-center lg:gap-[0.5rem] font-extrabold text-[0.89rem] capitalize">
              sessions
              <span>{moment().format("YYYY")}</span>
              <span className="hidden lg:flex items-center justify-center text-[0.5rem]">
                <GoDotFill />
              </span>
            </h2>
            <div className="relative group flex items-center gap-2 text-[0.85rem] font-bold transition duration-300 ease-in-out hover:text-gray-300 cursor-pointer">
              Watch on demand
              <Arrow />
            </div>
          </div>

          {/* ======================================================== */}
          {/* Welcome Text Title container */}
          <Title />

          {/* ================================================================= */}
          {/* Desktop image section */}
          <div className=" hidden  absolute top-0 left-[60%] w-[100%] h-[100%] lg:block">
            <div className="w-[40%] h-[100%] flex justify-center">
              <img
                src={Img}
                alt="Transaction Image"
                className=" object-cover"
              />
            </div>
          </div>
        </div>
      </div>
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

  /* ====================================================== */
  /* DesktopView */

  /* ====================================================== */
`;

export default IntroText;
