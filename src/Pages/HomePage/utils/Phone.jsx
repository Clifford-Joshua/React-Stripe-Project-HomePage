import moment from "moment";
import Loader from "../../../Components/Animation/Loader";
import React, { useEffect, useRef, useState } from "react";
import { slideData } from "../../../Local Data/NavData";
import Chair from "../../../assets/Images/Chair.jpg";
import { FaApple, FaGreaterThan } from "react-icons/fa";

import getSlidePosition from "./getSlidePosition";

import styled from "styled-components";
import { useSelector } from "react-redux";

const Phone = () => {
  const slideContainer = useRef(null);
  const refContainer = useRef(null);
  const [data] = useState(slideData);
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);

  const { isAnimation } = useSelector((store) => store.NavBar);

  const [animate, setAnimate] = useState({ width: 0, height: 0 });

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
      const rect = refContainer.current.getBoundingClientRect();
      setAnimate((prev) => ({
        ...prev,
        width: rect.width,
        height: rect.height,
      }));

      if (!slideContainer.current) return;
      const container = slideContainer.current.getBoundingClientRect().height;
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
    <Wrapper className="">
      <div className="bg-slate-100  rounded-[20px] p-[0.5rem]  shadow w-[300px]">
        {isAnimation ? (
          <Loader animate={animate} />
        ) : (
          <div
            className="bg-white p-[1rem] py-[2rem] rounded-[20px]  flex flex-col items-center justify-center gap-[1rem]"
            ref={refContainer}
          >
            <div className="w-[100%] flex flex-col items-center justify-center gap-[0.4rem] ">
              {/* ===================================================== */}
              {/* image */}
              <img
                src={Chair}
                alt="chair_image"
                className="w-[70px] h-[70px] object-cover"
              />

              {/* ===================================================== */}
              {/* image name */}
              <p className="text-[0.7rem] text-gray-500 font-extrabold">
                Glamour Accent Chair
              </p>

              {/* ===================================================== */}
              {/* amount */}

              <div className="relative flex items-center justify-center w-[100%] h-[25px]  overflow-hidden">
                {data.map(({ price }, ind) => {
                  const position = getSlidePosition(
                    ind,
                    index,
                    data.length,
                    "activeSlide",
                    "lastSlide",
                    "nextSlide"
                  );

                  return (
                    <h3
                      className={`font-extrabold text-[0.85rem]  opacity-0 absolute transition duration-500 ease-in-out ${position}`}
                      key={ind}
                    >
                      ${price}
                    </h3>
                  );
                })}
              </div>
            </div>

            <div className="w-[100%] text-[0.7rem] flex flex-col gap-[0.5rem]">
              {/* ===================================================== */}
              {/* Pay black section */}
              <h2 className="flex items-center justify-center  bg-black text-white capitalize p-[0.4rem] rounded">
                <FaApple />
                pay
              </h2>

              {/* ===================================================== */}
              {/* Pay with link green section */}
              <h2 className="flex items-center justify-center  bg-green-400 text-black capitalize p-[0.4rem] rounded gap-[0.3rem] font-[500]">
                pay with
                <span className="text-[0.5rem] p-[0.3rem] rounded-full bg-black text-white">
                  <FaGreaterThan />
                </span>
                link
              </h2>
            </div>

            {/* =================================================================== */}
            {/* Slide container */}
            <div className="w-[100%] flex flex-col gap-[0.4rem]">
              <div className="flex flex-col gap-[0.4rem]">
                <div className="flex justify-between items-center">
                  <h2 className="capitalize font-bold text-[0.9rem]">
                    today , {moment().format("MMMM Do")}
                  </h2>

                  <p className="text-[0.85rem] font-bold">+$20000</p>
                </div>

                <div
                  className="w-[100%] relative overflow-hidden transition duration-300 ease-in-out "
                  style={{ height: `${height}px` }}
                >
                  {data.map(
                    ({ image, color, bank, names, transaction, tag }, ind) => {
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
                          className={`flex flex-col gap-[1rem] border border-b-0 p-[0.6rem] rounded-t-[10px] w-[100%] absolute opacity-0 transition duration-700 ease-in-out ${position}`}
                          ref={slideContainer}
                          key={ind}
                        >
                          {names.map((name, i) => {
                            return (
                              <div
                                className="flex items-center justify-between"
                                key={i}
                              >
                                <div>
                                  <img
                                    src={image[i]}
                                    alt="profile"
                                    className="w-[40px] h-[40px] rounded-full object-cover"
                                  />
                                </div>

                                <div className="flex items-center justify-between w-[75%]">
                                  <div>
                                    <h2 className="text-[0.8rem] font-bold">
                                      {" "}
                                      {name}
                                    </h2>
                                    <p className="text-[0.75rem] text-gray-600">
                                      {bank[i]}
                                    </p>
                                  </div>

                                  <div className="flex flex-col items-end">
                                    <h2
                                      className="text-[0.8rem] font-bold"
                                      style={{ color: `${color[i]}` }}
                                    >
                                      ${tag[i]}
                                    </h2>
                                    <p className="text-[0.7rem] text-gray-600 capitalize">
                                      {transaction[i]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div>
                <button className=" text-[0.8rem] font-bold bg-black p-[0.3rem] w-[100%] text-white rounded">
                  See more
                </button>
              </div>
            </div>
          </div>
        )}
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

export default Phone;
