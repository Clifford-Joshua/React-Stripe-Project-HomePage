import React from "react";
import styled from "styled-components";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";
import { AiFillSlackCircle } from "react-icons/ai";
import { FiActivity, FiAlignJustify } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa6";

const Developers = () => {
  return (
    <Wrapper className="pb-[4rem]  bg-slate-50 ">
      <div>
        {/* ====================================================== */}
        {/* By Stage */}
        <div
          className="text-[1.05rem] flex gap-[0.5rem]  p-[1rem] bg-white group "
          onClick={() => toast.error(`Sorry link isn't functional`)}
        >
          <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem] ">
            <FaBookOpen />
          </div>

          {/* ====================================================== */}
          {/* Documentation */}
          <div className="flex flex-col gap-[0.6rem]">
            <h2 className="capitalize font-bold">Documentation</h2>

            {/* ====================================================== */}
            {/* Get Started */}
            <div className="flex flex-col gap-[0.8rem]">
              <h2 className="uppercase text-[0.9rem] font-[600] text-gray-800">
                Get started
              </h2>

              <p className="text-[0.98rem] text-gray-600 font-[500] hover:text-gray-950">
                Prebuilt checkout
              </p>

              <p className="text-[0.98rem] text-gray-600 font-[500] hover:text-gray-950">
                Libraries and SDKs
              </p>

              <p className="text-[0.98rem] text-gray-600 font-[500] hover:text-gray-950">
                App integrations
              </p>
            </div>

            {/* ====================================================== */}
            {/* Guides */}
            <div className="flex flex-col gap-[0.8rem]">
              <h2 className="uppercase text-[0.9rem] font-[600] pt-[0.6rem] text-gray-800">
                Guides
              </h2>

              <p className="text-[0.98rem] text-gray-600 font-[500] hover:text-gray-950">
                Accepts online payments
              </p>

              <p className="text-[0.98rem] text-gray-600 font-[500] hover:text-gray-950">
                Manage subscriptions
              </p>

              <p className="text-[0.98rem] text-gray-600 font-[500] hover:text-gray-950">
                Send payments
              </p>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* slate color section */}
        <div className=" p-[1rem] py-[2.5rem] flex flex-col gap-[1.4rem]">
          {/* ====================================================== */}
          {/* Full Api reference*/}
          <div
            className="text-[1.05rem] flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <FiAlignJustify />
            </div>
            <h3 className="font-bold text-[0.98rem] text-gray-800">
              Full Api reference
            </h3>
          </div>

          {/* ====================================================== */}
          {/* API status */}
          <div
            className="text-[1.05rem] flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <AiFillSlackCircle />
            </div>
            <h3 className="font-bold text-[0.98rem] text-gray-800">
              API status
            </h3>
          </div>

          {/* ====================================================== */}
          {/* API changelog */}
          <div
            className="text-[1.05rem] flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <FiActivity />
            </div>
            <h3 className="font-bold text-[0.98rem] text-gray-800">
              API changelog
            </h3>
          </div>

          {/* ====================================================== */}
          {/*Build on stripe Apps */}
          <div
            className="text-[1.05rem] flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <IoCopy />
            </div>
            <h3 className="font-bold text-[0.98rem] text-gray-800">
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
