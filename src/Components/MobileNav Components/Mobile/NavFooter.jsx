import React, { useState } from "react";
import { FaGreaterThan, FaArrowRight } from "react-icons/fa";

import styled from "styled-components";
const NavFooter = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper className="absolute w-full h-[11vh] bottom-[0%] flex items-center justify-center">
      <div className="bg-white w-[100%] h-[100%] blur-sm absolute "></div>

      <div
        className="flex items-center justify-center z-[1]"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex items-center justify-center gap-[0.6rem] py-[0.4rem] px-[0.7rem] bg-indigo-500 rounded-full text-white transition duration-400 ease-in-out hover:bg-black">
          <h2 className="font-bold capitalize text-[0.95rem]">sign in</h2>

          <div className="text-[0.65rem] flex items-center justify-center">
            {isHover ? <FaArrowRight /> : <FaGreaterThan />}
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
`;

export default NavFooter;
