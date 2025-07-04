import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Wrapper>
      <div>
        <div className="flex flex-col gap-[1.5rem]">
          <h4 className="font-extrabold text-[1.05rem] md:text-[1.3rem] text-blue-600">
            Launch with ease
          </h4>

          <h2 className="text-[2.2rem] font-bold leading-[2.8rem] text-gray-800">
            Low- and no-code options for getting started
          </h2>

          <p className="text-[1.17rem] text-gray-500 font-[480]">
            If you’d like to use Stripe for your business but don’t have
            developers on staff, no problem. We have a few options depending on
            your needs.
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
