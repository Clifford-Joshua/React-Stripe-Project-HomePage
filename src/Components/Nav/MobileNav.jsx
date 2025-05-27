import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { LocalData } from "../../Local Data/NavData";

import { OpenModal } from "../../Features/NavBars/NavSlice";
const MobileNav = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper className=" py-[1rem]">
      <div className="flex justify-between item-center ">
        <h2 className="text-[1.4rem] hover:text-gray-400 font-bold ">stripe</h2>

        <div
          className="flex items-center py-[0.4rem]  px-[1rem]  rounded-full  relative overflow-hidden font-bold group"
          onClick={() => dispatch(OpenModal())}
        >
          <div className="w-[100%] h-[100%]  absolute top-0 left-0  bg-[pink] blur-sm z-[-1] group-hover:bg-pink-200"></div>
          <FaBars />
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
  @media screen and (width >= 1024px) {
    display: none;
  }

  /* ====================================================== */
`;

export default MobileNav;
