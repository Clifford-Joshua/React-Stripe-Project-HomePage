import React from "react";

const getSlidePosition = (ind, index, length, active, last, next) => {
  if (ind === index) return active;
  if (ind === index - 1 || (index === 0 && ind === length - 1)) return last;
  return next;
};

export default getSlidePosition;
