import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Wrapper>
      <div>
        <div className="flex flex-col gap-[1.5rem]">
          <h4 className="font-extrabold text-[1.05rem] md:text-[1.3rem] text-blue-600">
            Built for growth
          </h4>

          <h2 className="text-[2.2rem] font-bold leading-[2.8rem] text-gray-800">
            Take your startup further, faster
          </h2>

          <p className="text-[1.17rem] text-gray-500 font-[480]">
            Startups build on Stripe to launch faster, adapt as they grow, and
            automate workflows to do more with less. Build your own API-based
            integration or use our low- to no-code solutions, which are simple
            enough for easy implementation and powerful enough to scale as fast
            and as far as you need.
          </p>
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

export default Title;
