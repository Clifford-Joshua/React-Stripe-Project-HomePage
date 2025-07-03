import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Arrow from "../../../../Components/Button/Arrow";

const CardDesign = ({ title, text, btn, color, icon, AtlasHome }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="h-[450px] rounded-[10px] shadow-2xl shadow-gray-800 p-[0.4rem] bg-white group/bgcolor cursor-pointer">
        <div
          className="h-[55%] rounded-[10px] flex items-end justify-end overflow-hidden transition-all duration-500 ease-in-out  group-hover/bgcolor:h-[43%]"
          style={{
            background: isHovered ? color : "#f1f5f9",
            height: isHovered ? "43%" : "55%",
          }}
        >
          <img
            src={AtlasHome}
            alt={title}
            className="w-[90%] h-[85%] object-cover rounded-tl-[8px]"
          />
        </div>
        <div className="flex flex-col gap-[1rem] p-[1rem]">
          <img
            src={icon}
            alt={title}
            className="w-[100px] h-[25px] object-cover"
          />
          <h2 className="font-bold text-[1.5rem] text-gray-800">{title}</h2>
          <p className="text-gray-500 font-[500] text-[1.15rem]">{text}</p>

          <button
            className="w-max font-bold text-blue-600 flex gap-[0.3rem] items-center group hover:text-gray-900 cursor-pointer h-0 overflow-hidden  transition-all duration-500 ease-in-out group-hover/bgcolor:h-[20px]"
            onClick={() => toast.error("Sorry link is not clickable")}
          >
            {btn}
            <span>
              <Arrow />
            </span>
          </button>
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

export default CardDesign;
