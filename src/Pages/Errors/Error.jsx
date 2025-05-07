import React from "react";

import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="w-full bg-white">
      <div className="container bg-slate-100 w-full  p-[1rem]">
        <h2>james</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ===================================================== */
  /* Mobile View */
  /* ===================================================== */
  .container {
    clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
  }

  /* ===================================================== */
  /* Desktop View */
  /* ===================================================== */
`;

export default Error;
