import { FaRegCheckCircle } from "react-icons/fa";
import { BillData } from "../../../Local Data/NavData";
import React, { useEffect, useRef, useState } from "react";
import getSlidePosition from "./getSlidePosition";

import styled from "styled-components";
const Bill = () => {
  const [data] = useState(BillData);
  const refContainer = useRef(null);
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const SlideInterval = setInterval(() => {
      setIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > data.length - 1) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(SlideInterval);
  }, [data]);

  useEffect(() => {
    const updateSize = () => {
      if (!refContainer.current) return;
      const container = refContainer.current.getBoundingClientRect().height;
      setHeight(container);
    };

    // Run once on mount
    updateSize();

    // Add event listener
    window.addEventListener("resize", updateSize);

    // Clean up
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Wrapper className="w-[100%]  lg:w-[50%]">
      <div className="shadow p-[1.2rem] rounded-[15px]">
        <div className="flex flex-col gap-[1rem]">
          {/* ===================================================================================== */}
          {/* Header */}
          <div className="flex gap-[4.5rem] items-center justify-between">
            {/* Title */}
            <div className="relative w-[100px] h-[28px] overflow-hidden ">
              {data.map(({ title, img }, ind) => {
                const position = getSlidePosition(
                  ind,
                  index,
                  data.length,
                  "activeSlide",
                  "lastSlide",
                  "nextSlide"
                );

                return (
                  <div
                    className={`flex items-center gap-[0.5rem] absolute transition duration-500 ease-in-out ${position} opacity-0`}
                    key={ind}
                  >
                    <img
                      src={img}
                      alt={title}
                      className="w-[25px] h-[25px] rounded-full object-cover"
                    />
                    <h2 className="text-[0.75rem] text-gray-500 font-[500]">
                      {title}
                    </h2>
                  </div>
                );
              })}
            </div>

            {/* ===================================================================================== */}
            {/* list */}
            <div className="flex items-center gap-[0.5rem] text-[0.7rem]">
              <p>Products</p>
              <p>Pricing</p>
              <p>Contact</p>
            </div>
          </div>

          {/* Slide container */}
          <div
            className=" flex items-center justify-center w-[100%] relative overflow-hidden"
            style={{ height: `${height + 40}px ` }}
          >
            {data.map(({ names, content, btnColor, bgcolor }, ind) => {
              const position = getSlidePosition(
                ind,
                index,
                data.length,
                "active",
                "last",
                "next"
              );
              return (
                <div
                  className={`flex  justify-center gap-[0.5rem]  absolute top-0 transition duration-500 ease-in-out opacity-0  ${position}`}
                  key={ind}
                  ref={refContainer}
                >
                  {names.map((_, ind) => {
                    return (
                      <div
                        className="flex flex-col gap-[0.5rem]  text-[0.7rem] md:text-[1rem] p-[0.8rem] md:p-[1rem] rounded-[10px] w-[105px] md:w-[200px] lg:w-[150px] "
                        key={ind}
                        style={{ backgroundColor: `${bgcolor[ind]}` }}
                      >
                        <h3 className=" font-bold">{names[ind]}</h3>
                        <p className="text-[0.6rem] md:text-[0.7rem]">
                          Digital access
                        </p>

                        <div className="flex items-center gap-[0.4rem] py-[0.15rem]">
                          <h2 className="font-bold text-[1.2rem] md:text-[1.4rem]">
                            $49
                          </h2>
                          <p className="text-[0.6rem] md:text-[0.7rem]">
                            /month
                          </p>
                        </div>

                        <button
                          className=" rounded text-[0.6rem] text-[white] md:text-[0.8rem] font-bold p-[0.25rem]"
                          style={{ backgroundColor: `${btnColor}` }}
                        >
                          subscribe
                        </button>

                        <div className="flex flex-col gap-[0.4rem]">
                          <p className="text-[0.6rem] md:text-[0.7rem]">
                            This includes:
                          </p>

                          {content[ind].map((items, ind) => {
                            return (
                              <div
                                className="flex gap-[0.2rem] md:gap-[0.4rem] text-[0.4rem] md:text-[0.5rem]"
                                key={ind}
                              >
                                <FaRegCheckCircle className="text-green-500" />
                                <p>{items}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  /* ====================================================== */
  .shadow {
    box-shadow: 0px 0px 40px 3px lightgray;
  }

  .activeSlide {
    opacity: 1;
    transform: translateY(0);
  }
  .lastSlide {
    transform: translateY(-100%);
  }
  .nextSlide {
    transform: translateY(100%);
  }

  .active {
    opacity: 1;
    transform: translate(0);
  }
  .last {
    transform: translate(-100%);
  }
  .next {
    transform: translate(100%);
  }

  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default Bill;
