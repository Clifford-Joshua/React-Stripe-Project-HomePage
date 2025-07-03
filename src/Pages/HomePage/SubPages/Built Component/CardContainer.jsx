import React from "react";

import CardDesign from "./CardDesign";
import styled from "styled-components";

import AtlasIcon from "../../../../assets/Images/Atlas-icon-text.png";
import PaymentIcon from "../../../../assets/Images/Payment-icon-text.png";
import CheckoutIcon from "../../../../assets/Images/Checkout-icon-text.png";
import InvocingIcon from "../../../../assets/Images/invoicing-icon-text.png";
import AtlasHome from "../../../../assets/Images/atlas_home_rocketrides_Latin_English__United_States_.png";

const CardContainer = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-[2rem] md:flex-row">
        <div className="flex flex-col gap-[2rem] md:mt-[4rem]">
          <CardDesign
            {...{
              icon: AtlasIcon,
              AtlasHome,
              title: "Incorporate your company",
              text: "Form a legal entity, issue stock, and start accepting payments.",
              btn: "Learn about Atlas",
              color:
                "linear-gradient(to right,#f6f9fc,rgba(255, 166, 0, 0.695),rgba(255, 166, 0, 0.792))",
            }}
          />

          <CardDesign
            {...{
              icon: CheckoutIcon,
              AtlasHome,
              title: "Sell products and services",
              text: "Launch a business with a prebuilt payment page that’s optimized for conversion.",
              btn: "Start with Checkout",
              color:
                "linear-gradient(to right,#f6f9fc,rgba(0, 0, 255, 0.338),rgba(0, 0, 255, 0.77)))",
            }}
          />
        </div>

        <div className="flex flex-col gap-[2rem]">
          <CardDesign
            {...{
              icon: PaymentIcon,
              AtlasHome,
              title: "Validate your idea",
              text: "Test your product idea by launching payments with little to no code.",
              btn: "Try Payment Links",
              color:
                "linear-gradient(to right,#f6f9fc,rgba(40, 255, 25, 0.338),rgba(40, 255, 25, 0.77))",
            }}
          />

          <CardDesign
            {...{
              icon: InvocingIcon,
              AtlasHome,
              title: "Launch any pricing model",
              text: "Offer usage-based billing to charge customers based on how much they use.",
              btn: "Explore invoicing",
              color:
                "linear-gradient(to right,#f6f9fc,rgba(200, 80, 25, 0.338),rgba(200, 80, 25, 0.77))",
            }}
          />
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

export default CardContainer;
