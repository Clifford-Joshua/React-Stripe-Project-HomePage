import React from "react";
import styled from "styled-components";
import { useGlobalScroll } from "../../utils/ScrollContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Title = () => {
  const { scrollLeft, scrollRight } = useGlobalScroll();
  return (
    <Wrapper>
      <div className="flex flex-col gap-[1.5rem]">
        <h2 className="font-bold text-[2.3rem] leading-[3rem] text-gray-800">
          Support for any business type
        </h2>

        <div className="md:flex">
          <p className="text-gray-500 text-[1.12rem] font-[500]">
            From global AI companies to category-defining marketplaces,
            successful businesses across industries grow and scale with Stripe.
          </p>

          {/* =========================================================== */}
          {/* Slide icons */}
          <div className="hidden md:flex gap-[0.5rem] items-center justify-end md:w-[30%]">
            <div
              className="border-gray-600 rounded-full p-[0.5rem] text-blue-600 bg-indigo-200 shadow  cursor-pointer"
              onClick={scrollLeft}
            >
              <FaArrowLeft />
            </div>

            <div
              className="border-gray-600 rounded-full p-[0.5rem] text-blue-600 bg-indigo-200 shadow cursor-pointer"
              onClick={scrollRight}
            >
              <FaArrowRight />
            </div>
          </div>
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
