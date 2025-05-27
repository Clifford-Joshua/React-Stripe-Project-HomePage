import React from "react";
import { toast } from "react-toastify";
import {
  IoCopy,
  IoChatbubbles,
  IoBagSharp,
  IoAtCircleOutline,
} from "react-icons/io5";

import { FaPlusSquare, FaBookDead } from "react-icons/fa";

import { AiFillSlackCircle } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import { HiDatabase } from "react-icons/hi";
import styled from "styled-components";
const Resources = () => {
  return (
    <Wrapper className="pb-[4rem] lg:pb-0  bg-slate-50 ">
      <div>
        {/* ====================================================== */}
        {/* first section */}
        <div className="bg-white p-[1rem]  py-[2.5rem] lg:p-[2rem]  flex flex-col lg:grid lg:grid-cols-[repeat(2,_minmax(200px,_1fr))] gap-[1.8rem] lg:gap-[1.2rem]">
          {/* ====================================================== */}
          {/*  Support center*/}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <IoAtCircleOutline />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Support center
            </h3>
          </div>

          {/* ====================================================== */}
          {/*  Supports plans */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <AiFillSlackCircle />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Supports plans
            </h3>
          </div>

          {/* ====================================================== */}
          {/* Guides */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <FaBookDead />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Guides
            </h3>
          </div>

          {/* ====================================================== */}
          {/* Customer stories */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <FiAlignJustify />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Customer stories
            </h3>
          </div>

          {/* ====================================================== */}
          {/*Blog */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <HiDatabase />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Blog
            </h3>
          </div>

          {/* ====================================================== */}
          {/*Sessions */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <IoBagSharp />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Sessions
            </h3>
          </div>

          {/* ====================================================== */}
          {/*Contact sales */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <IoChatbubbles />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Contact sales
            </h3>
          </div>
        </div>

        {/* ====================================================== */}
        {/* slate color section */}
        <div className=" p-[1rem] py-[2.5rem] lg:p-[2rem] flex flex-col gap-[1.8rem] lg:gap-[1.2rem] lg:grid lg:grid-cols-[repeat(2,_minmax(200px,_1fr))]">
          {/* ====================================================== */}
          {/* Job*/}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <IoBagSharp />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Jobs
            </h3>
          </div>

          {/* ====================================================== */}
          {/* Newsroom */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <BsNewspaper />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Newsroom
            </h3>
          </div>

          {/* ====================================================== */}
          {/* Stripe press */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <IoCopy />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Stripe Press
            </h3>
          </div>

          {/* ====================================================== */}
          {/*Become a partner */}
          <div
            className=" flex gap-[0.5rem] items-center group"
            onClick={() => toast.error(`Sorry link isn't functional`)}
          >
            <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
              <FaPlusSquare />
            </div>
            <h3 className="font-bold text-[0.98rem] lg:text-[0.85rem] text-gray-800">
              Become a partner
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

export default Resources;
