import React from "react";
import Payment from "../../assets/Images/Payment.png";
import Author from "../../assets/Images/Authorization.png";
import Capital from "../../assets/Images/Capital.png";
import Billing from "../../assets/Images/Billing.png";
import Connect from "../../assets/Images/Connect.png";
import Data from "../../assets/Images/Data.png";
import Invoicing from "../../assets/Images/Invoicing.png";
import Issuing from "../../assets/Images/Issuing.png";
import Radar from "../../assets/Images/Radar.png";
import Revenue from "../../assets/Images/Revenue.png";
import Sigma from "../../assets/Images/Sigma.png";
import Tax from "../../assets/Images/Tax.png";
import Terminal from "../../assets/Images/Terminal.png";
import Treasury from "../../assets/Images/Treasury.png";

import { toast } from "react-toastify";

import styled from "styled-components";
const Products = () => {
  return (
    <Wrapper>
      <div className="pb-[5rem] lg:pb-0  bg-slate-50 flex flex-col lg:flex-row gap-[0.5rem] ">
        <div className="   flex flex-col  gap-[0.5rem] lg:gap-[0.3rem]">
          {/* ====================================================== */}
          {/* Global Payments */}
          <div className="bg-white p-[1rem]">
            <h2 className="uppercase font-bold text-[0.9rem] lg:text-[0.8rem] py-[0.8rem] text-gray-700">
              Global payments
            </h2>

            <div className="flex flex-col  gap-[1rem] lg:grid lg:grid-cols-[repeat(2,_minmax(330px,_1fr))]">
              {/* ====================================================== */}
              {/* Global Payments */}
              <div className="flex gap-[0.7rem] cursor-pointer">
                <div className="p-[0.2rem]">
                  <img
                    src={Payment}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px]  object-cover"
                  />
                </div>

                <div className="flex flex-col gap-[0.5rem] group/head">
                  <article
                    onClick={() => toast.error(`Sorry link isn't functional`)}
                  >
                    <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem]  text-gray-800">
                      payments
                    </h2>
                    <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem]  group-hover/head:text-gray-900">
                      Online payments
                    </p>
                  </article>

                  <div className="flex flex-col gap-[0.4rem]">
                    <div
                      className="flex gap-[0.7rem] text-[0.9rem]  p-[0.5rem]  rounded-[10px] bg-gray-100 group"
                      onClick={() => toast.error(`Sorry link isn't functional`)}
                    >
                      <p className="font-[500]  capitalize lg:text-[0.75rem]">
                        payment links
                      </p>
                      <p className=" text-gray-500  lg:text-[0.7rem] group-hover:text-gray-950">
                        . No-code payments
                      </p>
                    </div>

                    <div
                      className="flex gap-[0.7rem] text-[0.9rem]  p-[0.5rem]  rounded-[10px] bg-gray-100 group"
                      onClick={() => toast.error(`Sorry link isn't functional`)}
                    >
                      <p className="font-[500]  capitalize lg:text-[0.75rem]">
                        checkout
                      </p>
                      <p className=" text-gray-500 lg:text-[0.7rem] group-hover:text-gray-950">
                        . Prebuilt payment form
                      </p>
                    </div>

                    <div
                      className="flex gap-[0.7rem] text-[0.9rem]  p-[0.5rem]  rounded-[10px] bg-gray-100 group"
                      onClick={() => toast.error(`Sorry link isn't functional`)}
                    >
                      <p className="font-[500] capitalize lg:text-[0.75rem]">
                        elements
                      </p>
                      <p className=" text-gray-500  lg:text-[0.7rem] group-hover:text-gray-950">
                        . Flexible UI components
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[1rem]">
                {/* ====================================================== */}
                {/* Terminal */}
                <div
                  className="flex gap-[0.7rem] group cursor-pointer"
                  onClick={() => toast.error(`Sorry link isn't functional`)}
                >
                  <div className="p-[0.2rem]">
                    <img
                      src={Terminal}
                      alt="Payment image"
                      className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                    />
                  </div>
                  <article>
                    <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                      Terminal
                    </h2>
                    <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                      In-person payments
                    </p>
                  </article>
                </div>

                {/* ====================================================== */}
                {/* Radar */}
                <div
                  className="flex gap-[0.7rem] group cursor-pointer"
                  onClick={() => toast.error(`Sorry link isn't functional`)}
                >
                  <div className="p-[0.2rem]">
                    <img
                      src={Radar}
                      alt="Payment image"
                      className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                    />
                  </div>
                  <article>
                    <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                      Radar
                    </h2>
                    <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out group-hover:text-gray-950">
                      Fraud Prevention
                    </p>
                  </article>
                </div>

                {/* ====================================================== */}
                {/* Authorization */}
                <div
                  className="flex gap-[0.7rem] group cursor-pointer"
                  onClick={() => toast.error(`Sorry link isn't functional`)}
                >
                  <div className="p-[0.2rem]">
                    <img
                      src={Author}
                      alt="Payment image"
                      className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                    />
                  </div>
                  <article>
                    <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                      Authorization
                    </h2>
                    <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem]  transition duration-400 ease-in-out   group-hover:text-gray-950">
                      Acceptance optimizations
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* Money Management */}
          <div className="bg-white p-[1rem]">
            <h2 className="uppercase font-bold text-[0.9rem] lg:text-[0.8rem] py-[0.8rem] text-gray-700">
              Money management
            </h2>

            <div className="flex flex-col gap-[1rem] lg:grid lg:grid-cols-[repeat(2,_minmax(330px,_1fr))]">
              {/* ====================================================== */}
              {/* Connect */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Connect}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Connect
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Payments for platforms
                  </p>
                </article>
              </div>

              {/* ====================================================== */}
              {/* Global Payouts */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Treasury}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Global Payouts
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Send money to third parties
                  </p>
                </article>
              </div>

              {/* ====================================================== */}
              {/* Capital for platforms */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Capital}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Capital for platforms
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Customer financing
                  </p>
                </article>
              </div>

              {/* ====================================================== */}
              {/* Issuing */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Issuing}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Issuing
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Physical and virtual cards
                  </p>
                </article>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* Revenue */}
          <div className="bg-white p-[1rem]">
            <h2 className="uppercase font-bold text-[0.9rem] lg:text-[0.8rem] py-[0.8rem] text-gray-700">
              revenue and finance automation
            </h2>

            <div className="flex flex-col gap-[1rem] lg:grid lg:grid-cols-[repeat(2,_minmax(330px,_1fr))]">
              {/* ====================================================== */}
              {/* Billing */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Billing}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Billing
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Subscriptions and usage-based
                  </p>
                </article>
              </div>

              {/* ====================================================== */}
              {/* Revenue Recognition */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Revenue}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Revenue Recognition
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Accounting automation
                  </p>
                </article>
              </div>

              {/* ====================================================== */}
              {/* Tax */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Tax}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Tax
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Sales tax & VAT automation
                  </p>
                </article>
              </div>

              {/* ====================================================== */}
              {/* Invoicing */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Invoicing}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Invoicing
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Online invoices
                  </p>
                </article>
              </div>

              {/* ====================================================== */}
              {/*  Sigma*/}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Sigma}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Sigma
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Custom reports
                  </p>
                </article>
              </div>

              {/* ====================================================== */}
              {/* Data Pipeline */}
              <div
                className="flex gap-[0.7rem] group cursor-pointer"
                onClick={() => toast.error(`Sorry link isn't functional`)}
              >
                <div className="p-[0.2rem]">
                  <img
                    src={Data}
                    alt="Payment image"
                    className="w-[35px] h-[35px] lg:w-[28px] lg:h-[28px] object-cover"
                  />
                </div>
                <article>
                  <h2 className="font-bold capitalize text-[1rem] lg:text-[0.9rem] text-gray-800">
                    Data Pipeline
                  </h2>
                  <p className="font-[490] text-gray-400 text-[1.02rem] lg:text-[0.85rem] transition duration-400 ease-in-out  group-hover:text-gray-950">
                    Data sync
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* More */}
        <div className=" p-[1rem] md:pr-[6rem] md:pl-[1.5rem]">
          <h2 className="uppercase font-bold text-[0.9rem] lg:text[0.85rem] py-[0.8rem] text-gray-700">
            more
          </h2>

          <div className="flex flex-col gap-[0.5rem] lg:gap-[0.7rem]">
            {/* ====================================================== */}
            {/* Payment methods */}
            <div className="text-[0.9rem] lg:text-[0.85rem]">
              <h2 className="font-bold md:font-[550] md:text-gray-800">
                Payment methods
              </h2>
              <p className="text-gray-400 md:hidden ">
                Access to 100+ globally
              </p>
            </div>

            {/* ====================================================== */}
            {/* Link */}
            <div className="text-[0.9rem] lg:text-[0.85rem">
              <h2 className="font-bold md:font-[550] md:text-gray-800">Link</h2>
              <p className="text-gray-400  md:hidden">Accelerated checkout</p>
            </div>

            {/* ====================================================== */}
            {/* Financial Connections */}
            <div className="text-[0.9rem] lg:text-[0.85rem">
              <h2 className="font-bold md:font-[550] md:text-gray-800">
                Financial Connections
              </h2>
              <p className="text-gray-400 md:hidden ">
                Linked financial account data
              </p>
            </div>

            {/* ====================================================== */}
            {/*Identity  */}
            <div className="text-[0.9rem] lg:text-[0.85rem">
              <h2 className="font-bold md:font-[550] md:text-gray-800">
                Identity
              </h2>
              <p className="text-gray-400  md:hidden">
                Online identity verification
              </p>
            </div>

            {/* ====================================================== */}
            {/* Atlas */}
            <div className="text-[0.9rem] lg:text-[0.85rem">
              <h2 className="font-bold md:font-[550] md:text-gray-800">
                Atlas
              </h2>
              <p className="text-gray-400 md:hidden ">Startup incorporation</p>
            </div>

            {/* ====================================================== */}
            {/* Treasury */}
            <div className="text-[0.9rem] lg:text-[0.85rem">
              <h2 className="font-bold md:font-[550] md:text-gray-800">
                Treasury
              </h2>
              <p className="text-gray-400 md:hidden ">Financial accounts</p>
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

export default Products;
