import React from "react";
import styled from "styled-components";
const TotalNumber = () => {
  return (
    <Wrapper className="py-[5rem]">
      {/* ========================================================================== */}
      {/* Container */}
      <div className="text-white grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[1.5rem] items-center">
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="font-extrabold text-[1.4rem] border-l-[0.3rem] border-cyan-400 pl-[0.5rem]">
            500M+
          </h3>
          <p className="text-[1rem] text-gray-400">
            Api requests per day,peaking at 13,000 requests a second
          </p>
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="font-extrabold text-[1.4rem]  border-l-[0.3rem] border-cyan-400 pl-[0.5rem]">
            99.999%
          </h3>
          <p className="text-[1rem] text-gray-400">
            historical uptime for{" "}
            <span className="text-cyan-400 font-bold :hover:text-white">
              Stripe services.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="font-extrabold text-[1.4rem]  border-l-[0.3rem] border-cyan-400 pl-[0.5rem]">
            90%
          </h3>
          <p className="text-[1rem] text-gray-400">
            of U.S. adults have used a Stripe product, including
          </p>
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="font-extrabold text-[1.4rem]  border-l-[0.3rem] border-cyan-400 pl-[0.5rem]">
            135+
          </h3>
          <p className="text-[1rem] text-gray-400">
            currencies and payment methods supported, including
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

export default TotalNumber;
