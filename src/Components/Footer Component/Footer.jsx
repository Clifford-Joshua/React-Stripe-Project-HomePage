import React from "react";
import styled from "styled-components";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <Wrapper>
      {/* =================================================== */}
      {/* div container */}
      <div className=" relative h-[25vh] lg:h-[55vh]">
        {/* ================================================== */}
        {/* clip path general container */}
        <div className="w-[100%] absolute h-[100%] flex justify-between bottom-0">
          {/* ================================================ */}
          {/* left clip path container */}
          <div className="w-[30%] lg:w-[15%]  h-[98%] relative">
            {/* ======================================== */}
            {/* clip path parent */}
            <div className=" w-[100%] h-[75%] lg:h-[68%] absolute bottom-0 flex ">
              {/* ======================================== */}
              {/* bigger clip path div */}
              <div className="bg-[#00ffffe5] w-[60%] h-[34%] lg:h-[28%] bottom-[75%] lg:bottom-[80%] absolute  small_top_bottom_clip_path"></div>

              {/* ======================================== */}
              {/* smaller clip path */}
              <div className="bg-[#8001dbcc] w-[100%] h-[100%] absolute small_top_clip_path"></div>
            </div>
          </div>

          {/* ================================================== */}
          {/* right clip path container */}
          <div className="w-[30%] lg:w-[15%]  h-[98%] relative">
            {/* ======================================== */}
            {/* clip path parent */}
            <div className="w-[100%] h-[95%]  absolute bottom-0 flex justify-end ">
              {/* ======================================== */}
              {/* bigger clip path div */}
              <div className="bg-[#8001dbcc]  w-[60%] h-[25%] lg:h-[20%]  bottom-[68%] lg:bottom-[72%] z-10 absolute  small_top_bottom_clip_path"></div>

              {/* ======================================== */}
              {/* smaller clip path */}
              <div className=" bg-[#00ffffe5] w-[100%] h-[100%] absolute small_top_clip_path"></div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* stripe footer container */}
        <div className="w-[100%] absolute h-[80%] bg-gray-100 bottom-0 flex justify-center items-center flex-col gap-[0.2rem] footer_container">
          {/* =========================================== */}
          {/* stripe text */}
          <h1 className="text-[1.7rem] md:text-[2.5rem] font-bold mt-6">
            Stripe
          </h1>
          <h3 className="md:text-[1.4rem] font-bold">
            &copy; {CurrentYear}, Inc.
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* =========================================================== */
  /* Mobile View */
  /* =========================================================== */

  .small_top_clip_path {
    clip-path: polygon(0 11%, 100% 0, 100% 100%, 0% 100%);
  }

  .small_top_bottom_clip_path {
    clip-path: polygon(0 28%, 100% 0, 100% 71%, 0% 100%);
  }

  .footer_container {
    clip-path: polygon(0 38%, 100% 0, 100% 100%, 0% 100%);
  }
`;

export default Footer;
