import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Products, Developers, Resources, Solutions } from "../Links/main";

const DesktopModel = () => {
  const container = useRef();

  const { location, title } = useSelector((store) => store.NavBar);

  useEffect(() => {
    const model = container.current;
    const { Center, Bottom } = location;

    model.style.left = `${Center}px`;
    model.style.top = `${Bottom}px`;
  }, [location]);

  return (
    <Wrapper className="absolute  w-[100%] h-[100%] z-[-1] ">
      <div className=" bubble_model bg-slate-50 " ref={container}>
        {title === "Products" && <Products />}
        {title === "Solutions" && <Solutions />}
        {title === "Developers" && <Developers />}
        {title === "Resources" && <Resources />}
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
  .bubble_model {
    top: 0rem;
    left: 15%;
    z-index: 335;
    padding: 0.3rem;
    position: absolute;
    border-radius: 0.5rem;
    transform: translateX(-20%);
    transition: all 0.3s linear;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .bubble_model::before {
    content: "";
    width: 0;
    height: 0;
    left: 20%;
    top: -5px;
    display: block;
    position: absolute;
    transform: translateX(-20%);
    border-bottom: 5px solid white;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  /* ====================================================== */
`;

export default DesktopModel;
