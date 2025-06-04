import React from "react";
import { useSelector } from "react-redux";
import Amazon from "../../../assets/Images/Amazon-Logo.png";
import Bmw from "../../../assets/Images/bmw.png";
import Google from "../../../assets/Images/google.png";
import Marriott from "../../../assets/Images/marriott.png";
import Salesforce from "../../../assets/Images/salesforce.png";
import Shopify from "../../../assets/Images/shopify.png";
import urb from "../../../assets/Images/urbn.png";
import whatsApp from "../../../assets/Images/WhatsApp-Emblem.png";

import styled from "styled-components";
const TechIcon = () => {
  const responsiveScreenSize = window.innerWidth >= 1024;

  const { navWidth } = useSelector((store) => store.NavBar);

  return (
    <Wrapper className="flex justify-center">
      <div
        style={{
          width:
            navWidth === 0
              ? "90%"
              : responsiveScreenSize
              ? `${navWidth}px`
              : "100%",
        }}
        className="lg:py-[2rem] flex flex-col gap-[1.5rem]"
      >
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[1.5rem] justify-items-center items-center py-[1rem]">
          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center ">
            <img
              src={Amazon}
              alt="Tec Company Logo"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>

          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center ">
            <img
              src={Salesforce}
              alt="Tec Company Logo"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>

          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center ">
            <img
              src={Bmw}
              alt="Tec Company Logo"
              className="w-[70%] h-[70%] object-contain"
            />
          </div>

          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center ">
            <img
              src={Google}
              alt="Tec Company Logo"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>

          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center ">
            <img
              src={Marriott}
              alt="Tec Company Logo"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>

          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center ">
            <img
              src={Shopify}
              alt="Tec Company Logo"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>

          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center ">
            <img
              src={urb}
              alt="Tec Company Logo"
              className="w-[70%] h-[70%] object-contain bg-black"
            />
          </div>

          <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center ">
            <img
              src={whatsApp}
              alt="Tec Company Logo"
              className="w-[80%] h-[80%] object-contain"
            />
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

export default TechIcon;
