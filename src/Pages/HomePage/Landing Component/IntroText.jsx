import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const IntroText = () => {
  const { navHeight } = useSelector((store) => store.NavBar);

  return (
    <Wrapper>
      <div style={{ top: `${navHeight}px` }} className="absolute">
        navbar
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
`;

export default IntroText;
