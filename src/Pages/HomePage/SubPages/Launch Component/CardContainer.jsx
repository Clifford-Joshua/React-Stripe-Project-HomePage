import React from "react";

import CardDesign from "../Built Component/CardDesign";
import styled from "styled-components";

import AtlasHome from "../../../../assets/Images/atlas_home_rocketrides_Latin_English__United_States_.png";

const CardContainer = () => {
  return (
    <Wrapper>
      <div className="grid  gap-[1.5rem] items-stretch [grid-template-columns:repeat(auto-fit,_minmax(350px,_1fr))]">
        <CardDesign
          {...{
            AtlasHome,
            title: "Use a pre-integrated platform",
            text: "Explore our directory to find out-of-the-box solutions that connect with Stripe.",
            btn: "See directory ",
            color:
              "linear-gradient(to right,#f6f9fc,rgba(255, 166, 0, 0.695),rgba(255, 166, 0, 0.792))",
            height: 500,
          }}
        />

        <CardDesign
          {...{
            AtlasHome,
            title: "Build with Stripe-certified experts",
            text: "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.",
            btn: "View partners ",
            color:
              "linear-gradient(to right,#f6f9fc,rgba(0, 0, 255, 0.338),rgba(0, 0, 255, 0.77))",
            height: 500,
          }}
        />

        <CardDesign
          {...{
            AtlasHome,
            title: "Try our no-code products",
            text: "Set up usage-based billing, accept an in-person payment with your phone, or share a payment link .",
            btn: "Explore no-code",
            color:
              "linear-gradient(to right,#f6f9fc,rgba(40, 255, 25, 0.338),rgba(40, 255, 25, 0.77))",
            height: 500,
          }}
        />
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

export default CardContainer;
