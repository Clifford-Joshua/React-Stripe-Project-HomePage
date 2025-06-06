/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Arrow from "../Button/Arrow";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopModel from "./DesktopModel";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  OpenDesktopNav,
  OpenDesktopModal,
  setNavWidth,
} from "../../Features/NavBars/NavSlice";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { LocalData } from "../../Local Data/NavData";

const DesktopNav = () => {
  const dispatch = useDispatch();

  const refContainer = React.useRef(null);

  const { isDesktopModalOpen } = useSelector((store) => store.NavBar);

  const handleMouseEnter = (e) => {
    const getDiv = e.currentTarget.querySelector("div");
    getDiv.classList.add("show_icon");
    dispatch(OpenDesktopModal());
    dispatch(OpenDesktopNav(e.target.textContent));

    // =======================================================
    // model location
    const HoverLink = e.currentTarget.getBoundingClientRect();
    const Center = (HoverLink.left + HoverLink.right) / 2 - 15;
    const Bottom = HoverLink.bottom - 5;
    dispatch(setLocation({ Center, Bottom }));
  };

  const handleMouseLeave = (e) => {
    const getDiv = e.currentTarget.querySelector("div");
    getDiv.classList.remove("show_icon");
  };

  useEffect(() => {
    const updateWidth = () => {
      const nav_width = refContainer.current.getBoundingClientRect().width;
      dispatch(setNavWidth(nav_width));
    };

    updateWidth(); // run initially
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <Wrapper>
      <div className="flex justify-center items-center navLink-container">
        <div className="flex items-center gap-[7rem]" ref={refContainer}>
          <div>
            <ul className="flex items-center gap-[1rem]  lg:gap-[2.2rem]">
              <h2 className="font-extrabold text-[1rem] lg:text-[1.35rem] hover:text-gray-400 cursor-pointer">
                Stripe
              </h2>
              {LocalData.map((Title, index) => {
                return (
                  <h2
                    key={index}
                    className="font-bold flex gap-[0.4rem] lg:text-[0.95rem]  p-[0.8rem] items-center hover:text-gray-400 cursor-default"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {Title}
                    <div className=" flex items-center justify-center ">
                      <FaAngleUp className="up_icon " />
                      <FaAngleDown className="down_icon " />
                    </div>
                  </h2>
                );
              })}
              <h2 className="font-bold hover:text-gray-400 lg:text-[0.9rem]">
                Pricing
              </h2>
            </ul>
          </div>

          <div className="flex gap-5">
            <Link className="font-bold text-[0.98rem] lg:text-[0.95rem]  hover:text-gray-400 flex gap-[0.2rem] lg:gap-[0.5rem] items-center relative group">
              Sign in
              <Arrow />
            </Link>

            <Link className="hidden  font-bold lg:text-[0.95rem] hover:text-gray-400 lg:flex gap-[0.5rem] items-center relative group">
              Contact sales
              <Arrow />
            </Link>
          </div>
        </div>

        {isDesktopModalOpen && <DesktopModel />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  /* ====================================================== */

  display: none;
  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */
  @media screen and (width >= 1024px) {
    display: block;

    .up_icon {
      display: none;
    }

    .show_icon .down_icon {
      display: none;
    }

    .show_icon .up_icon {
      display: block;
    }
  }
  /* ====================================================== */
`;

export default DesktopNav;
