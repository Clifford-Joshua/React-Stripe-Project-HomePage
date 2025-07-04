import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Arrow from "../../../../Components/Button/Arrow";
const Title = () => {
  return (
    <Wrapper className="md:w-[50%]">
      <div className="flex flex-col gap-[1.5rem] md:gap-[2rem]">
        <h4 className="text-[1.15rem] md:text-[1.18rem] text-cyan-400 font-bold">
          Designed for developers
        </h4>

        <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] text-white font-bold pr-[5rem] leading-[2.5rem] lg:leading-[3rem]">
          Ship faster with powerful and easy-to-use APIs
        </h2>

        <article className="md:w-[65%] flex flex-col gap-[1rem]">
          <p className="text-gray-400 text-[1.1rem] pr-[1.4rem] ">
            Save engineering time with unified payments functionality. We obsess
            over the maze of gateways, payments rails, and financial
            institutions that make up the global economic landscape so that your
            teams can build what you need on one platform.
          </p>

          <Link className="px-[1.2rem] py-[0.4rem] bg-cyan-400 text-green-700 font-bold text-[0.9rem] rounded-full w-max shadow group flex items-center gap-[0.4rem] cursor-pointer hover:bg-black">
            Read the docs
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
