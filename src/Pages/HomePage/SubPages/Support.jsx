import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ScrollProvider } from "../utils/ScrollContext";
import { Title, Review } from "./Support Component";

const Support = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;

  const { navWidth } = useSelector((store) => store.NavBar);

  return (
    <Wrapper className="flex flex-col justify-center items-center bg-slate-50 py-[4rem] gap-[2rem]">
      <ScrollProvider>
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
        </div>

        <Review />
      </ScrollProvider>
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

export default Support;
