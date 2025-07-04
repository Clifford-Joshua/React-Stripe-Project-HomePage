import React, { useEffect } from "react";
import styled from "styled-components";
import {
  TechIcon,
  CompanyServices,
  Global,
  Support,
  Enterprise,
  Built,
  Designed,
  Launch,
  Ready,
} from "./SubPages/main";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./SubPages/Landing Component/Landing";
import MobileModel from "../../Components/MobileNav Components/MobileModel";

import {
  setAnimationFalse,
  setAnimationTrue,
} from "../../Features/NavBars/NavSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store) => store.NavBar);

  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch(setAnimationTrue());
      setTimeout(() => {
        dispatch(setAnimationFalse());
      }, 4000);
    }, 10000);

    return () => clearInterval(Interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <div>
        <Landing />

        <TechIcon />

        <CompanyServices />

        <Global />

        <Support />

        <Enterprise />

        <Built />

        <Designed />

        <Launch />

        <Ready />

        {isModalOpen && <MobileModel />}
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

export default Home;
