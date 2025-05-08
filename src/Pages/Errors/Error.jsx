import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="w-full h-[80vh] bg-slate-50">
      <div className="  w-full  p-[1.5rem]">
        <header></header>

        <div className="py-[4rem] flex flex-col gap-[2rem]">
          <h2 className="text-[2.2rem] md:text-[2.5rem] font-bold text-gray-700">
            Page not found!
          </h2>

          <p className="text-[1.03rem] md:text-[1.15rem] text-gray-700">
            Sorry, but the page you were looking for could not be found.
          </p>

          <p className="text-[1.03rem] md:text-[1.15rem] text-gray-700">
            You can{" "}
            <Link
              to={"/"}
              className="text-blue-600 hover:text-gray-900 font-bold"
            >
              return to our front page
            </Link>{" "}
            , or{" "}
            <span className="text-blue-600 hover:text-gray-900 cursor-pointer font-bold">
              drop us a line
            </span>{" "}
            if you can't find what you're looking for.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ========================================================== */
  /* Google font */

  font-style: normal;
  font-optical-sizing: auto;
  font-family: "Roboto", sans-serif;

  /* ===================================================== */
  /* Mobile View */
  /* ===================================================== */

  /* ===================================================== */
  /* Desktop View */
  /* ===================================================== */
`;

export default Error;
