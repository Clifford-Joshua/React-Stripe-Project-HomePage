import React from "react";
import backgroundImage from "../../../assets/Images/download.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Title, TotalNumber } from "./Global Component/main";
const Global = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;
  const { navWidth } = useSelector((store) => store.NavBar);

  return (
    <Wrapper className=" bg-slate-50 pt-[7rem]">
      {/* ===================================================== */}
      {/* Container div/ clip path */}

      <div className=" flex justify-center clip">
        <div
          className="min-h-[60vh] pt-[13rem] flex flex-col gap-[2rem]"
          style={{
            width:
              navWidth === 0
                ? "90%"
                : responsiveScreenSize
                ? `${navWidth}px`
                : "100%",
          }}
        >
          <Title />
          <TotalNumber />
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
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
    background: url(${backgroundImage}) no-repeat center center, #00163d;
  }
  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default Global;
