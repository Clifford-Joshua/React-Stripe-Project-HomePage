import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Title, TypeVideo, Footer } from "../SubPages/Designed Component";
const Designed = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;

  const { navWidth } = useSelector((store) => store.NavBar);
  return (
    <Wrapper>
      <div>
        <div className="relative flex bg-slate-50 ">
          {/* ====================================================================== */}
          {/* Left Side design div */}
          <div className="h-[92%] md:h-[93%]  w-[20%] absolute bottom-0">
            {/* top */}
            <div className="bg-[#00ffffe5]  w-[50%] h-[5%] md:h-[7%] absolute bottom-[96%]  md:bottom-[95%] smallLeftClip"></div>

            {/* bottom */}
            <div className="bg-[#8001dbcc]  w-[100%] h-[100%] leftClip"></div>
          </div>

          {/* ====================================================================== */}
          {/* main content container */}
          <div className="w-full min-h-[100vh] relative z-[1] clip py-[20rem] md:py-[16rem] flex justify-center">
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
              <div className="flex flex-col gap-[3rem] md:gap-[1rem] md:flex-row">
                <Title />
                <TypeVideo />
              </div>

              <Footer />
            </div>
          </div>

          {/* ====================================================================== */}
          {/* Right side design div */}
          <div className="h-[92%] md:h-[93%] w-[20%] right-0 top-0 absolute">
            <div className="bg-[#00ffffe5] h-[100%] w-[100%]  rightClip"></div>

            <div className="bg-[#8001dbcc] h-[3%] md:h-[5%]  w-[50%] z-[1] right-0  absolute top-[96%] smallRightClip"></div>
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
  .clip {
    background: #00163d;
    clip-path: polygon(0 12%, 100% 0, 100% 88%, 0% 100%);
  }

  .leftClip {
    clip-path: polygon(0 2%, 100% 0, 100% 64%, 0% 100%);
  }

  .smallLeftClip {
    clip-path: polygon(0 35%, 100% 25%, 100% 75%, 0 86%);
  }

  .rightClip {
    clip-path: polygon(0 37%, 100% 0, 100% 97%, 0 100%);
  }

  .smallRightClip {
    clip-path: polygon(0 44%, 100% 0, 100% 61%, 0 100%);
  }
  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default Designed;
