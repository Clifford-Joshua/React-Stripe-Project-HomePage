import React, { useState } from "react";
import Card from "../../utils/Card";
import styled from "styled-components";
import { useGlobalScroll } from "../../utils/ScrollContext";

import { SupportData } from "../../../../Local Data/NavData";
const Review = () => {
  const [data] = useState(SupportData);
  const { scrollRef } = useGlobalScroll();

  return (
    <Wrapper
      className="w-full  overflow-x-scroll py-[4rem] px-[1rem]"
      ref={scrollRef}
    >
      <div className="flex gap-6 items-stretch min-w-max">
        {data.map(({ title, text, social }, index) => {
          return <Card {...{ title, text, social }} key={index} />;
        })}
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

export default Review;
