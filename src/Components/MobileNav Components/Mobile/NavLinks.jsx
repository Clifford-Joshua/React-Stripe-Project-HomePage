import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FaGreaterThan } from "react-icons/fa";
import { LocalData } from "../../../Local Data/NavData";

import {
  ChangeTitleHeader,
  OpenSubNavLink,
} from "../../../Features/NavBars/NavSlice";
const NavLinks = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper className="p-[1rem] pt-[0.5rem]">
      <div className="flex flex-col justify-between ">
        <div className="flex flex-col ">
          {LocalData.map((Title, index) => {
            return (
              Title && (
                <div
                  className="flex justify-between items-center text-gray-700 capitalize border-b-[0.1rem] border-dashed border-gray-200 py-[1rem] hover:text-gray-400"
                  key={index}
                  onClick={(e) => {
                    dispatch(ChangeTitleHeader(true));
                    dispatch(OpenSubNavLink(e.target.textContent));
                  }}
                >
                  <h2 className=" text-[1.12rem] font-[550]">{Title}</h2>

                  <div className="text-[1rem] flex items-center justify-center">
                    <FaGreaterThan />
                  </div>
                </div>
              )
            );
          })}
          <div className="flex justify-between items-center text-gray-700 capitalize border-b-[0.1rem] border-dashed border-gray-200 py-[1rem] hover:text-gray-500">
            <h2 className=" text-[1.12rem] font-[550]">contact sales</h2>
          </div>

          <div className="flex justify-between items-center text-gray-700 capitalize border-b-[0.1rem] border-dashed border-gray-200 py-[1rem] hover:text-gray-500">
            <h2 className=" text-[1.15rem] font-[550]">pricing</h2>
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

export default NavLinks;
