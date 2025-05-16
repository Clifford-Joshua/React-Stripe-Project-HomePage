import React from "react";
import styled from "styled-components";
import { FaXmark } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import {
  ChangeTitleHeader,
  CloseModal,
} from "../../../Features/NavBars/NavSlice";

const Title = () => {
  const dispatch = useDispatch();

  const { isLinkOpen } = useSelector((store) => store.NavBar);

  return (
    <Wrapper className="border-b-[0.1rem] border-dashed border-gray-200 p-[1rem] ">
      <div className="flex justify-between items-center ">
        {isLinkOpen ? (
          <h2
            className="font-bold text-[1.2rem] text-blue-700 flex items-center gap-[0.5rem]"
            onClick={() => dispatch(ChangeTitleHeader(false))}
          >
            <div className="text-[0.9rem] flex items-center justify-center py-[0.8rem]">
              <FaLessThan />
            </div>
            Back
          </h2>
        ) : (
          <h2 className="font-extrabold text-[1.6rem] text-blue-700">stripe</h2>
        )}

        <div
          className="flex justify-center items-center text-[1.35rem] text-gray-400"
          onClick={() => dispatch(CloseModal())}
        >
          <FaXmark />
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

export default Title;
