import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../../Components/Button/Arrow";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <div className="lg:flex  lg:gap-[4rem]">
        {/* ================================================ */}
        {/* Text div */}

        <div className="flex flex-col gap-[2rem]  py-[1rem] lg:py-[1.5rem] lg:pr-[1.5rem] lg:w-[60%]">
          {/* ======================================================== */}
          {/* title */}
          <h2 className="font-extrabold text-[3rem] lg:text-[5rem] leading-[3rem] lg:leading-[5rem]">
            Financial infrastructure to grow your revenue
          </h2>

          {/* ======================================================== */}
          {/* paragraph text */}
          <p className="text-slate-500 font-[500] text-[1.08rem] lg:text-[1.15rem]">
            Join the millions of companies that use Stripe to accept payments
            online and in person, embed financial services, power custom revenue
            models, and build a more profitable business.
          </p>

          {/* ======================================================== */}
          {/* Button/Links container */}
          <div className="flex items-center">
            <div className="lg:bg-slate-200 focus-within:outline-blue-700 focus-within:outline-2 lg:flex lg:items-center lg:justify-center  lg:gap-[1.5rem] lg:rounded-[2rem] lg:p-[0.3rem] input">
              <input
                type="email"
                className="hidden lg:block border-none outline-none pl-[1.5rem]  text-[0.95rem] text-gray-900 font-[550]"
                placeholder="Email address"
              />

              <Link className="flex items-center justify-center gap-[0.3rem] border rounded-[2rem] text-[0.9rem] lg:text-[1rem]  px-[0.7rem] py-[0.3rem] text-white bg-slate-950 group hover:bg-slate-500">
                <h4 className="font-bold">Start now</h4>
                <Arrow />
              </Link>
            </div>

            <Link className="flex items-center justify-center gap-[0.3rem]  rounded-[2rem] lg:hidden  px-[0.7rem] py-[0.3rem]   text-slate-900  hover:text-slate-500 group">
              <p className="font-[500]">Contact sales</p>
              <Arrow />
            </Link>
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

  /* ====================================================== */
  /* DesktopView */

  /* ====================================================== */
`;

export default Title;
