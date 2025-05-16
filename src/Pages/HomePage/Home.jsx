import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Landing } from "./Landing Component/main";
import MobileModel from "../../Components/MobileNav Components/MobileModel";

const Home = () => {
  const { isModalOpen } = useSelector((store) => store.NavBar);
  return (
    <Wrapper>
      <div>
        <Landing />

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
