import React from "react";
import styled from "styled-components";
import { TechIcon } from "./SubPages/main";
import { useSelector } from "react-redux";
import Landing from "./SubPages/Landing Component/Landing";
import MobileModel from "../../Components/MobileNav Components/MobileModel";

const Home = () => {
  const { isModalOpen } = useSelector((store) => store.NavBar);
  return (
    <Wrapper>
      <div>
        <Landing />

        <TechIcon />

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
