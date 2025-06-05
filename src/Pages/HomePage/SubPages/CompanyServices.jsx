import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { Box } from "../Functionality/main";

const CompanyServices = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;

  const { navWidth } = useSelector((store) => store.NavBar);
  return (
    <Wrapper className="flex justify-center bg-slate-50 py-[4rem]">
      <div
        style={{
          width:
            navWidth === 0
              ? "90%"
              : responsiveScreenSize
              ? `${navWidth}px`
              : "100%",
        }}
        className="flex flex-col gap-[8rem] items-center justify-center"
      >
        {/* =============================================================== */}
        {/* Modular solution */}
        <div className="flex flex-col lg:flex-row lg:gap-[5rem] gap-[3rem] items-center">
          <div className="flex flex-col gap-[1.2rem] lg:w-[50%]">
            <h3 className="font-extrabold text-[1.1rem] md:text-[1.3rem] text-blue-600">
              Modular solutions
            </h3>

            <h2 className="font-bold text-[2.5rem] md:text-[3rem] leading-[3rem] md:leading-[3.5rem]">
              A fully integrated suite of financial and payments products
            </h2>

            <p className="text-[1.15rem] md:text-[1.2rem] text-gray-800">
              Reduce costs, grow revenue, and run your business more efficiently
              on a fully integrated, AI-powered platform. Use Stripe to handle
              all of your payments-related needs, manage revenue operations, and
              launch (or invent) new business models.
            </p>
          </div>
          <Box />
        </div>

        {/* =============================================================== */}
        {/*payment */}
        <div className="flex flex-col lg:flex-row lg:gap-[5rem] gap-[3rem] items-center">
          <div className="flex flex-col gap-[1.2rem] lg:w-[50%]">
            <h3 className="font-extrabold text-[1.1rem] md:text-[1.3rem] text-blue-600">
              Payments
            </h3>

            <h2 className="font-bold text-[2.5rem] md:text-[3rem] leading-[3rem] md:leading-[3.5rem]">
              Accept and optimize payments, globally
            </h2>

            <p className="text-[1.15rem] md:text-[1.2rem] text-gray-800">
              Increase authorization rates, offer local payment methods to boost
              conversion, and reduce fraud using AI.
            </p>
          </div>
          <Box />
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

export default CompanyServices;
