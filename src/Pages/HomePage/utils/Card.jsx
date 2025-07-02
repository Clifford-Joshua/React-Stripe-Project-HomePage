import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Arrow from "../../../Components/Button/Arrow";
const Card = ({ title, social, text }) => {
  return (
    <Wrapper className="w-[330px] md:w-[430px]">
      <div className="h-full rounded-[10px] pb-[1.5rem]  justify-between  bg-white shadow shadow-gray-700 flex flex-col gap-[1.8rem] overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl">
        <div className="h-[10px] bg-blue-600"></div>

        <div className="w-[100%] px-[1.5rem] md:px-[3rem] flex flex-col gap-[2rem]">
          {/* ====================================================================================== */}
          {/* title */}
          <h2 className="text-[1.8rem] font-bold">{title}</h2>

          {/* ====================================================================================== */}
          {/* body */}
          <article className="flex flex-col gap-[3rem] ">
            <p className="text-gray-600 font-[460] text-[1.1rem]">{text}</p>

            {/* ====================================================================================== */}
            {/* links */}
            <Link
              className="flex gap-[0.4rem] items-center text-blue-600 group hover:text-black text-[0.9rem] font-bold"
              onClick={() => toast.error("Sorry link not clickable")}
            >
              Learn more{" "}
              <span>
                <Arrow />
              </span>
            </Link>
          </article>

          {/* ====================================================================================== */}
          {/* Footer */}
          <div className="flex items-center justify-between py-[1rem] md:py-[1.5rem] border-t border-gray-300">
            {social.map((iconName, index) => {
              return (
                <h3
                  className="font-extrabold text-[0.9rem] md:text-[1rem] text-gray-500"
                  key={index}
                >
                  {iconName}
                </h3>
              );
            })}
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

export default Card;
