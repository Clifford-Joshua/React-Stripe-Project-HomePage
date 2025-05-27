import React from "react";
import styled from "styled-components";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";
import { AiFillSlackCircle } from "react-icons/ai";
import { FiActivity, FiAlignJustify } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa6";

const Developers = () => {
  return (
    <Wrapper className="pb-[4rem] lg:pb-[0]  bg-slate-50">
      <div>
        {/* ====================================================== */}
        {/* By Stage */}
        <div
          className="text-[1.05rem] lg:text-[0.9rem] flex gap-[0.5rem]  p-[1rem] lg:p-[1.2rem] bg-white group"
          onClick={() => toast.error(`Sorry link isn't functional`)}
        >
          <div className="text-blue-400 group-hover:text-gray-950 cursor-pointer text-[1.3rem] ">
            <FaBookOpen />
          </div>

          {/* ====================================================== */}
          {/* Documentation */}
          <div className="flex flex-col gap-[0.6rem]">
            <div className="lg:pb-[0.6rem]">
              <h2 className="capitalize font-bold">Documentation</h2>
              <p className="hidden lg:block text-slate-400 font-[545] text-[0.9rem]">
                Start integrating Stripe’s products and tools
              </p>
            </div>

            <div className="flex flex-col  lg:grid lg:grid-cols-[repeat(2,_minmax(250px,_1fr))] lg:items-center lg:justify-center  gap-[0.6rem] lg:gap-[0.2rem]">
              {/* ====================================================== */}
              {/* Get Started */}
              <div className="flex flex-col gap-[0.8rem] lg:gap-[0.5rem]">
                <h2 className="uppercase text-[0.9rem] lg:text-[0.75rem] font-[600] text-gray-800">
                  Get started
                </h2>

                <p className="text-[0.98rem] lg:text-[0.85rem] text-gray-600 font-[500] hover:text-gray-950 cursor-pointer">
                  Prebuilt checkout
                </p>

                <p className="text-[0.98rem] lg:text-[0.85rem] text-gray-600 font-[500] hover:text-gray-950 cursor-pointer">
                  Libraries and SDKs
                </p>

                <p className="text-[0.98rem] lg:text-[0.85rem] text-gray-600 font-[500] hover:text-gray-950 cursor-pointer">
                  App integrations
                </p>
              </div>

              {/* ====================================================== */}
              {/* Guides */}
              <div className="flex flex-col gap-[0.8rem] lg:gap-[0.5rem]">
                <h2 className="uppercase text-[0.9rem] lg:text-[0.75rem] font-[600] pt-[0.6rem] lg:pt-[0] text-gray-800">
                  Guides
                </h2>

                <p className="text-[0.98rem] lg:text-[0.85rem] text-gray-600 font-[500] hover:text-gray-950 cursor-pointer">
                  Accepts online payments
                </p>

                <p className="text-[0.98rem] lg:text-[0.85rem] text-gray-600 font-[500] hover:text-gray-950 cursor-pointer">
                  Manage subscriptions
                </p>

                <p className="text-[0.98rem] lg:text-[0.85rem] text-gray-600 font-[500] hover:text-gray-950 cursor-pointer">
                  Send payments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* slate color section */}
        <div className=" p-[1rem] py-[2.5rem] lg:py-[1.2rem] flex flex-col gap-[1.4rem] lg:grid lg:grid-cols-[repeat(2,_minmax(250px,_1fr))]">
          {/* ====================================================== */}
          {/* Full Api reference*/}
          <div
            className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950  text-[1.3rem]">
              <FiAlignJustify />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Full Api reference
            </h3>
          </div>

          {/* ====================================================== */}
          {/* API status */}
          <div
            className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950  text-[1.3rem]">
              <AiFillSlackCircle />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              API status
            </h3>
          </div>

          {/* ====================================================== */}
          {/* API changelog */}
          <div
            className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950  text-[1.3rem]">
              <FiActivity />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              API changelog
            </h3>
          </div>

          {/* ====================================================== */}
          {/*Build on stripe Apps */}
          <div
            className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950  text-[1.3rem]">
              <IoCopy />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Build on stripe Apps
            </h3>
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

export default Developers;
