import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Title, CardContainer } from "./Built Component";

const Built = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;

  const { navWidth } = useSelector((store) => store.NavBar);

  return (
    <Wrapper className="flex flex-col justify-center items-center bg-slate-50 py-[4rem] gap-[2rem]">
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
        <Title />
        <CardContainer />
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

export default Built;
