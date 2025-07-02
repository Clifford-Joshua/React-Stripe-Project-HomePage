import React from "react";
import styled from "styled-components";
import { Title, Slide } from "./Enterprise Component";
import { useSelector } from "react-redux";
const Enterprise = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;

  const { navWidth } = useSelector((store) => store.NavBar);
  return (
    <Wrapper className="flex flex-col justify-center items-center py-[4rem]">
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
        <div className="flex flex-col gap-[1.5rem]">
          <Title />
          <Slide />
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

export default Enterprise;
