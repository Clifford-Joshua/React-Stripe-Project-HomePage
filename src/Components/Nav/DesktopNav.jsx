import React from "react";
import { Link } from "react-router-dom";
import { LocalData } from "../../Local Data/NavData";

import styled from "styled-components";

const DesktopNav = () => {
  return (
    <Wrapper>
      <div className="flex justify-center items-center gap-[8rem]">
        <div>
          <ul className="flex gap-5">
            <h2>Stripe</h2>
            {LocalData.map((Title, index) => {
              return <h2 key={index}>{Title}</h2>;
            })}
            <h2>Pricing</h2>
          </ul>
        </div>

        <div className="flex gap-5">
          <Link>Sign in</Link>
          <Link>Contact sales</Link>
        </div>
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
  @media screen and (width >= 764px) {
    display: block;
  }
  /* ====================================================== */
`;

export default DesktopNav;
