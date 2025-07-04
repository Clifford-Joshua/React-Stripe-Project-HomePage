import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../../../Components/Button/Arrow";

import dotIcon from "../../../../assets/Images/dots-icon.png";
import messageIcon from "../../../../assets/Images/message-icon.png";
import hexaIcon from "../../../../assets/Images/hexa-icon.png";
import gearIcon from "../../../../assets/Images/gear-icon.png";

const Footer = () => {
  return (
    <Wrapper>
      <div className="grid gap-[2rem] [grid-template-columns:repeat(auto-fit,_minmax(150px,_1fr))]">
        <div className="flex flex-col gap-[1rem]">
          <img
            src={gearIcon}
            alt=""
            className="w-[50px] h-[50px] object-cover"
          />
          <h2 className="font-bold text-[0.9rem] text-white pl-[0.5rem] border-l-2 border-cyan-400">
            Use Stripe with your stack
          </h2>
          <p className="text-gray-400 font-[500] text-[1rem]">
            We offer client and server libraries in everything from React and
            PHP to .NET and iOS.
          </p>
          <Link
            className="flex gap-[0.4rem] items-center  text-cyan-400 group hover:text-white text-[0.9rem] font-bold"
            onClick={() => toast.error("Sorry link not clickable")}
          >
            See libraries{" "}
            <span>
              <Arrow />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <img
            src={dotIcon}
            alt=""
            className="w-[50px] h-[50px] object-cover"
          />
          <h2 className="font-bold text-[0.9rem] text-white pl-[0.5rem] border-l-2 border-cyan-400">
            Build AI agents
          </h2>
          <p className="text-gray-400 font-[500] text-[1rem]">
            Create agents that can manage money and handle support tasks using
            the Stripe API.
          </p>
          <Link
            className="flex gap-[0.4rem] items-center  text-cyan-400 group hover:text-white text-[0.9rem] font-bold"
            onClick={() => toast.error("Sorry link not clickable")}
          >
            View docs{" "}
            <span>
              <Arrow />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <img
            src={hexaIcon}
            alt=""
            className="w-[50px] h-[50px] object-cover"
          />
          <h2 className="font-bold text-[0.9rem] text-white pl-[0.5rem] border-l-2 border-cyan-400">
            Explore prebuilt integrations
          </h2>
          <p className="text-gray-400 font-[500] text-[1rem]">
            Connect Stripe to over a hundred tools including Adobe, Salesforce,
            and Xero.
          </p>
          <Link
            className="flex gap-[0.4rem] items-center  text-cyan-400 group hover:text-white text-[0.9rem] font-bold"
            onClick={() => toast.error("Sorry link not clickable")}
          >
            Browse App Marketplace{" "}
            <span>
              <Arrow />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <img
            src={messageIcon}
            alt=""
            className="w-[50px] h-[50px] object-cover"
          />
          <h2 className="font-bold text-[0.9rem] text-white pl-[0.5rem] border-l-2 border-cyan-400">
            Build on Stripe Apps
          </h2>
          <p className="text-gray-400 font-[500] text-[1rem]">
            Create an app just for your team or for the millions of businesses
            on Stripe.
          </p>
          <Link
            className="flex gap-[0.4rem] items-center  text-cyan-400 group hover:text-white text-[0.9rem] font-bold"
            onClick={() => toast.error("Sorry link not clickable")}
          >
            Learn about Apps{" "}
            <span>
              <Arrow />
            </span>
          </Link>
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

export default Footer;
