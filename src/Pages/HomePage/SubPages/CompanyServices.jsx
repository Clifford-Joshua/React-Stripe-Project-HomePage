import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { Box } from "../Functionality/main";

const CompanyServices = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;

  const { navWidth } = useSelector((store) => store.NavBar);
  return (
    <Wrapper className="flex justify-center bg-slate-50 py-[2rem]">
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
        <Box />
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

export default CompanyServices;
