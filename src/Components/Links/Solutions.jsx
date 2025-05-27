import React from "react";
import { IoRocket, IoStorefrontSharp } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { PiBuildings } from "react-icons/pi";
import { MdBarChart } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { FaLightbulb, FaBookDead, FaBookOpen } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { TiGlobe } from "react-icons/ti";
import { SiBookstack } from "react-icons/si";
import { AiFillEdit } from "react-icons/ai";
import { HiDatabase } from "react-icons/hi";
import { LiaAtomSolid } from "react-icons/lia";

import { toast } from "react-toastify";

import styled from "styled-components";
const Solutions = () => {
  return (
    <Wrapper>
      <div className="pb-[4rem] lg:pb-0  bg-slate-50 flex flex-col gap-[0.4rem] lg:gap-[0.3rem]">
        {/* ====================================================== */}
        {/* By Stage */}
        <div className="bg-white  p-[1rem] lg:p-[1.5rem] flex flex-col gap-[1.4rem]">
          {/* ====================================================== */}
          {/* Header */}
          <p className="font-[600] uppercase text-[0.9rem] lg:text-[0.8rem]">
            by stage
          </p>

          <div className="flex flex-col gap-[1.4rem] lg:gap-[0.8rem] lg:grid lg:grid-cols-[repeat(2,_minmax(280px,_1fr))]">
            {/* ====================================================== */}
            {/* enterprises */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950 text-[1.3rem]">
                <PiBuildings />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                enterprises
              </h2>
            </div>

            {/* ====================================================== */}
            {/* startups */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950 ">
                <IoRocket />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                startups
              </h2>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* Global Payments */}
        <div className="bg-white  p-[1rem] lg:p-[1.5rem] flex flex-col gap-[1.4rem]">
          {/* ====================================================== */}
          {/* Header */}
          <p className="font-[600] uppercase text-[0.9rem] lg:text-[0.8rem]">
            by business model
          </p>

          <div className="flex flex-col gap-[1.4rem] lg:gap-[0.8rem] lg:grid lg:grid-cols-[repeat(2,_minmax(280px,_1fr))]">
            {/* ====================================================== */}
            {/* ecommerce */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <FaBookDead />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                ecommerce
              </h2>
            </div>

            {/* ====================================================== */}
            {/* saas */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <TfiReload />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">saas</h2>
            </div>

            {/* ====================================================== */}
            {/* retail*/}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <FaInbox />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">retail</h2>
            </div>

            {/* ====================================================== */}
            {/* platforms */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <HiDatabase />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                platforms
              </h2>
            </div>

            {/* ====================================================== */}
            {/* marketplaces */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <IoStorefrontSharp />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                marketplaces
              </h2>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* Global Payments */}
        <div className="bg-white  p-[1rem] lg:p-[1.5rem] flex flex-col gap-[1.4rem]">
          {/* ====================================================== */}
          {/* Header */}
          <p className="font-[600] uppercase text-[0.9rem] lg:text-[0.8rem]">
            by use case
          </p>

          <div className="flex flex-col gap-[1.4rem] lg:gap-[0.8rem] lg:grid lg:grid-cols-[repeat(2,_minmax(280px,_1fr))]">
            {/* ====================================================== */}
            {/* Finance automation */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <MdBarChart />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                Finance automation
              </h2>
            </div>

            {/* ====================================================== */}
            {/* Embedded finance*/}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <AiTwotonePieChart />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                Embedded finance
              </h2>
            </div>

            {/* ====================================================== */}
            {/* Global businesses */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <TiGlobe />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                Global businesses
              </h2>
            </div>

            {/* ====================================================== */}
            {/* Crypto*/}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <SiBookstack />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">Crypto</h2>
            </div>

            {/* ====================================================== */}
            {/* Creator economy */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <FaLightbulb />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                Creator economy
              </h2>
            </div>

            {/* ====================================================== */}
            {/* AI companies */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <LiaAtomSolid />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                AI companies
              </h2>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* Global Payments */}
        <div className="bg-white  p-[1rem] lg:p-[1.5rem] flex flex-col gap-[1.4rem]">
          {/* ====================================================== */}
          {/* Header */}
          <p className="font-[600] uppercase text-[0.9rem] lg:text-[0.8rem]">
            ecosystem
          </p>

          <div className="flex flex-col gap-[1.4rem] lg:gap-[0.8rem] lg:grid lg:grid-cols-[repeat(2,_minmax(280px,_1fr))]">
            {/* ====================================================== */}
            {/* Stripe app marketplaces */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <AiFillEdit />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                Stripe app marketplaces
              </h2>
            </div>

            {/* ====================================================== */}
            {/* partners */}
            <div
              className="text-[1.05rem] flex gap-[0.5rem] items-center group cursor-pointer"
              onClick={() => toast.error(`Sorry link isn't functional`)}
            >
              <div className="text-blue-400 group-hover:text-gray-950">
                <FaBookOpen />
              </div>
              <h2 className="capitalize font-bold lg:text-[0.85rem]">
                partners
              </h2>
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

export default Solutions;
