import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Products, Developers, Resources, Solutions } from "../../Links/main";
const Modal = () => {
  const { title, isNavLinksClicked } = useSelector((store) => store.NavBar);

  const Product = title === "Products";
  const Solution = title === "Solutions";
  const Developer = title === "Developers";
  const Resource = title === "Resources";

  return (
    <Wrapper
      className={`h-[100%] w-[100%] overflow-y-scroll hide_scrollbar absolute top-0 bg-white transform transition-transform duration-1000 ${
        isNavLinksClicked ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {Product && <Products />}
      {Solution && <Solutions />}
      {Developer && <Developers />}
      {Resource && <Resources />}
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

export default Modal;
