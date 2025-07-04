import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { Box, Phone, Bill, ConNect, ATM } from "../utils/main";
import Arrow from "../../../Components/Button/Arrow";

import payment from "../../../assets/Images/Payment.png";
import Billing from "../../../assets/Images/Billing.png";
import Connect from "../../../assets/Images/Connect.png";
import Issuing from "../../../assets/Images/Issuing.png";

import { toast } from "react-toastify";

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
        <div className="flex flex-col lg:flex-row lg:gap-[5rem] gap-[3rem] items-center  w-[100%]">
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
        <div className="flex flex-col lg:flex-row lg:gap-[5rem] gap-[3rem] items-center  w-[100%]">
          <div className="flex flex-col gap-[1.2rem] lg:w-[50%]">
            <h3 className="font-extrabold text-[1.1rem] md:text-[1.3rem]  flex items-center ">
              <img
                src={payment}
                alt="payment"
                className="w-[40px] h-[40px] object-cover"
              />
              Payments
            </h3>

            <h2 className="font-bold text-[2.2rem] md:text-[2.6rem] leading-[3rem] md:leading-[3.5rem]">
              Accept and optimize payments, globally
            </h2>

            <p className="text-[1.15rem] md:text-[1.2rem] text-gray-800">
              Increase authorization rates, offer local payment methods to boost
              conversion, and reduce fraud using AI.
            </p>

            <div>
              <button
                className="px-[1rem] py-[0.3rem] bg-indigo-500 text-white font-bold rounded-[15px] text-[0.95rem] flex gap-[0.5rem] transition duration-700 ease-in-out hover:bg-gray-700 group cursor-pointer"
                onClick={() => toast.error(`Sorry , link isn't clickable`)}
              >
                Start with Payments
                <Arrow />
              </button>
            </div>

            <div className="pt-[2rem] flex flex-col gap-[0.5rem]">
              <h4 className="text-[0.95rem] text-gray-800 font-bold">
                See also
              </h4>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                {" "}
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Tax{" "}
                </span>{" "}
                for automating tax registration, collection, and filing
              </p>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Radar{" "}
                </span>
                for AI-powered fraud protection
              </p>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Terminal{" "}
                </span>
                for custom in-person payments
              </p>
            </div>
          </div>
          <Phone />
        </div>

        {/* =============================================================== */}
        {/*billing */}
        <div className="flex flex-col lg:flex-row lg:gap-[5rem] gap-[3rem] items-center  w-[100%]">
          <div className="flex flex-col gap-[1.2rem] lg:w-[50%]">
            <h3 className="font-extrabold text-[1.1rem] md:text-[1.3rem]  flex items-center ">
              <img
                src={Billing}
                alt="payment"
                className="w-[40px] h-[40px] object-cover"
              />
              Billing
            </h3>

            <h2 className="font-bold text-[2.2rem] md:text-[2.6rem] leading-[3rem] md:leading-[3.5rem]">
              Capture recurring revenue
            </h2>

            <p className="text-[1.15rem] md:text-[1.2rem] text-gray-800">
              Manage flat rate, usage-based, and hybrid pricing models, minimize
              churn, and automate finance operations.
            </p>

            <div>
              <button
                className="px-[1rem] py-[0.3rem] bg-indigo-500 text-white font-bold rounded-[15px] text-[0.95rem] flex gap-[0.5rem] transition duration-700 ease-in-out hover:bg-gray-700 group cursor-pointer"
                onClick={() => toast.error(`Sorry , link isn't clickable`)}
              >
                Start with Billing
                <Arrow />
              </button>
            </div>

            <div className="pt-[2rem] flex flex-col gap-[0.5rem]">
              <h4 className="text-[0.95rem] text-gray-800 font-bold">
                See also
              </h4>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                {" "}
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Invoicing{" "}
                </span>{" "}
                for invoice creation, collection, and tracking
              </p>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Usage-based billing{" "}
                </span>
                for metering, billing, and consumption insights
              </p>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Sigma{" "}
                </span>
                for custom revenue reports—no SQL required
              </p>
            </div>
          </div>
          <Bill />
        </div>

        {/* =============================================================== */}
        {/*Connect */}
        <div className="flex flex-col lg:flex-row lg:gap-[5rem] gap-[3rem] items-center w-[100%]">
          <div className="flex flex-col gap-[1.2rem] lg:w-[50%]">
            <h3 className="font-extrabold text-[1.1rem] md:text-[1.3rem]  flex items-center ">
              <img
                src={Connect}
                alt="payment"
                className="w-[40px] h-[40px] object-cover"
              />
              Connect
            </h3>

            <h2 className="font-bold text-[2.2rem] md:text-[2.6rem] leading-[3rem] md:leading-[3.5rem]">
              Set up multiparty payments and payouts
            </h2>

            <p className="text-[1.15rem] md:text-[1.2rem] text-gray-800">
              Integrate payments into your platform or marketplace for
              end-to-end payments experiences.
            </p>

            <div>
              <button
                className="px-[1rem] py-[0.3rem] bg-indigo-500 text-white font-bold rounded-[15px] text-[0.95rem] flex gap-[0.5rem] transition duration-700 ease-in-out hover:bg-gray-700 group cursor-pointer"
                onClick={() => toast.error(`Sorry , link isn't clickable`)}
              >
                Start with Connect
                <Arrow />
              </button>
            </div>

            <div className="pt-[2rem] flex flex-col gap-[0.5rem]">
              <h4 className="text-[0.95rem] text-gray-800 font-bold">
                See also
              </h4>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                {" "}
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Terminal{" "}
                </span>{" "}
                for custom in-person payments
              </p>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Instant Payouts{" "}
                </span>
                for fast payments to users
              </p>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Payment Elements{" "}
                </span>
                for customizable UIs
              </p>
            </div>
          </div>
          <ConNect />
        </div>

        {/* =============================================================== */}
        {/*Issuing */}
        <div className="flex flex-col lg:flex-row lg:gap-[5rem] gap-[3rem] items-center  w-[100%]">
          <div className="flex flex-col gap-[1.2rem] lg:w-[50%]">
            <h3 className="font-extrabold text-[1.1rem] md:text-[1.3rem]  flex items-center ">
              <img
                src={Issuing}
                alt="payment"
                className="w-[40px] h-[40px] object-cover"
              />
              Issuing
            </h3>

            <h2 className="font-bold text-[2.2rem] md:text-[2.6rem] leading-[3rem] md:leading-[3.5rem]">
              Build a fintech offering with banking-as-a-service
            </h2>

            <p className="text-[1.15rem] md:text-[1.2rem] text-gray-800">
              Launch, manage, and scale a commercial card program without any
              setup fees.
            </p>

            <div>
              <button
                className="px-[1rem] py-[0.3rem] bg-indigo-500 text-white font-bold rounded-[15px] text-[0.95rem] flex gap-[0.5rem] transition duration-700 ease-in-out hover:bg-gray-700 group cursor-pointer"
                onClick={() => toast.error(`Sorry , link isn't clickable`)}
              >
                Start with Issuing
                <Arrow />
              </button>
            </div>

            <div className="pt-[2rem] flex flex-col gap-[0.5rem]">
              <h4 className="text-[0.95rem] text-gray-800 font-bold">
                See also
              </h4>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                {" "}
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Treasury{" "}
                </span>{" "}
                for financial accounts
              </p>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                <span className="text-indigo-500 hover:text-black">
                  {" "}
                  Capital{" "}
                </span>
                for offering fast, flexible financing
              </p>
              <p className="text-[0.9rem] font-[550] text-gray-500">
                <span className="text-indigo-500 hover:text-black">
                  Connect{" "}
                </span>
                for powering platform payments
              </p>
            </div>
          </div>
          <ATM />
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
