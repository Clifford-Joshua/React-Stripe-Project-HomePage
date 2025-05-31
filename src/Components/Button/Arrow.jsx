import React from "react";

import styled from "styled-components";

import { FaAngleRight, FaArrowRight } from "react-icons/fa";

const Arrow = () => {
  return (
    <Wrapper className="flex items-center justify-center overflow-hidden relative">
      <FaAngleRight className="group-hover:opacity-0 transition-all duration-[600ms]" />
      <FaArrowRight className="text-[0.7rem] absolute right-4 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-[600ms] ease-in-out" />
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

export default Arrow;
