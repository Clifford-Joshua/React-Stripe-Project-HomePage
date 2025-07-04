import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Arrow from "../../../Components/Button/Arrow";

import dotIcon from "../../../assets/Images/dots-icon.png";
import gearIcon from "../../../assets/Images/gear-icon.png";

const Ready = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;

  const { navWidth } = useSelector((store) => store.NavBar);
  return (
    <Wrapper className="flex flex-col justify-center items-center bg-slate-200 py-[6rem] gap-[2rem]">
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
        <div className="flex flex-col gap-[3rem] md:flex-row">
          <div className="flex flex-col gap-[1.5rem]">
            <h2 className="font-bold text-[1.8rem] py-[0.6rem]">
              Ready to get started?
            </h2>

            <p className="text-[1.13rem] font-[480] text-gray-600">
              Create an account instantly to get started or contact us to design
              a custom package for your business.
            </p>

            <div className="flex items-center">
              <div className="lg:bg-slate-200  lg:justify-center  lg:gap-[1.5rem] lg:rounded-[2rem] lg:p-[0.3rem] input">
                <Link className="flex items-center justify-center gap-[0.3rem] border rounded-[2rem] text-[0.9rem] lg:text-[1rem]  px-[0.7rem] py-[0.3rem] text-white bg-blue-700 group hover:bg-black">
                  <h4 className="font-bold">Start now</h4>
                  <Arrow />
                </Link>
              </div>

              <Link className="flex items-center justify-center gap-[0.3rem]  rounded-[2rem]   px-[0.7rem] py-[0.3rem]   text-blue-700  hover:text-black group">
                <p className="font-[500]">Contact sales</p>
                <Arrow />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[2rem] md:flex-row">
            <div className="flex flex-col gap-[0.6rem]">
              <img
                src={gearIcon}
                alt=""
                className="w-[55px] h-[55px] object-cover"
              />

              <h2 className="text-[1rem] font-bold">
                Always know what you pay
              </h2>

              <p className="text-[0.95rem] font-[480] text-gray-600">
                Integrated per-transaction pricing with no hidden fees.
              </p>

              <Link className="flex w-max items-center justify-center gap-[0.3rem]  rounded-[2rem]  py-[0.3rem]  text-blue-700  hover:text-black group">
                <p className="font-[500] text-[0.95rem]">Pricing details </p>
                <Arrow />
              </Link>
            </div>

            <div className="flex flex-col gap-[0.6rem]">
              <img
                src={dotIcon}
                alt=""
                className="w-[55px] h-[55px] object-cover"
              />

              <h2 className="text-[1rem] font-bold">Start your integration</h2>

              <p className="text-[0.95rem] font-[480] text-gray-600">
                Get up and running with Stripe in as little as 10 minutes.
              </p>

              <Link className="flex w-max items-center justify-center gap-[0.3rem]  rounded-[2rem]   py-[0.3rem]  text-blue-700  hover:text-black group">
                <p className="font-[500] text-[0.95rem]">API reference</p>
                <Arrow />
              </Link>
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

export default Ready;
