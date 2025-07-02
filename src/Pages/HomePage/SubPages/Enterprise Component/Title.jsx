import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../../../Components/Button/Arrow";

const Title = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-[1.5rem]">
        <h4 className="font-extrabold text-[1.05rem] md:text-[1.3rem] text-blue-600">
          Enterprise reinvention
        </h4>

        <h2 className="text-[2.2rem] font-bold leading-[2.8rem] text-gray-800">
          Bring agility to your enterprise
        </h2>

        <article className="md:w-[65%] flex flex-col gap-[1rem]">
          <p className="text-[1.17rem] text-gray-500 font-[480]">
            Quickly build great payments experiences, improve performance,
            expand into new markets, and engage customers with subscriptions and
            marketplaces. Get expert integration guidance from our professional
            services team and certified partners, and connect Stripe to
            Salesforce, SAP, and more through the Stripe App Marketplace.
          </p>

          <Link className="px-[1.2rem] py-[0.4rem] bg-indigo-700 text-white font-bold text-[0.9rem] rounded-full w-max shadow group flex items-center gap-[0.4rem] cursor-pointer hover:bg-black">
            Explore Stripe for enterprises
            <span>
              <Arrow />
            </span>
          </Link>
        </article>
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
