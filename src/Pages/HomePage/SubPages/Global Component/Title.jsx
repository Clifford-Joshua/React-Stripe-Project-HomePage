import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      {/* =================================================================================== */}
      {/* Container  */}
      <div className="flex flex-col gap-[1.2rem] md:gap-[1.7rem] md:w-[50%]">
        <h4 className="text-[1.15rem] md:text-[1.18rem] text-cyan-400 font-bold">
          Global scale
        </h4>

        {/* =============================================================================== */}
        {/* Tilt */}
        <h2 className="text-[2rem] md:text-[2.2rem] text-white font-bold pr-[5rem] leading-[2.5rem]">
          The backbone for global commerce
        </h2>

        <p className="text-gray-400 text-[1.1rem] pr-[1.4rem] ">
          Stripe makes moving money as easy and programmable as moving data. Our
          teams are based in offices around the world and we process hundreds of
          billions of dollars each year for ambitious businesses of all sizes.
        </p>
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
