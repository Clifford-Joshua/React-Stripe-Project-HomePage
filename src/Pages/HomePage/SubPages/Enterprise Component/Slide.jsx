import React, { useState, useEffect, useRef } from "react";
import Arrow from "../../../../Components/Button/Arrow";
import styled from "styled-components";
import { toast } from "react-toastify";
import { IoCard } from "react-icons/io5";
import { EnterprisesData } from "../../../../Local Data/NavData";
import getSlidePosition from "../../utils/getSlidePosition";

const Slide = () => {
  const [data] = useState(EnterprisesData);
  const [index, setIndex] = useState(0);
  const slideHeight = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (slideHeight.current) {
        const height = slideHeight.current.getBoundingClientRect().height;
        setHeight(`${height + 20}px`);
      }
    };

    window.addEventListener("resize", updateHeight);

    // Initial call
    updateHeight();

    // Cleanup
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

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

  const currentColor = (ind, color, noColor) => {
    if (ind === index) return color;
    return noColor;
  };

  return (
    <Wrapper>
      <div className="py-[2rem] flex flex-col items-center gap-[2rem]">
        <div className="flex flex-col w-[100%] gap-[2rem] md:flex-row">
          {/* ===================================================================== */}
          {/* Slide header */}

          <div
            className="flex items-center w-[100%] md:w-[30%] overflow-hidden relative"
            style={{ height }}
          >
            {data.map(
              (
                {
                  head_para,
                  head_text,
                  body_para,
                  body_text,
                  icon1,
                  icon1_text,
                  icon2,
                  icon2_text,
                  footer_text,
                },
                ind
              ) => {
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
                    className={`w-[100%] flex flex-col absolute gap-[2rem] duration-500 ease-in-out opacity-0  ${position}`}
                    key={ind}
                    ref={slideHeight}
                  >
                    <div className="flex flex-col gap-[0.7rem]">
                      <h2 className="text-[1.4rem] font-extrabold border-l border-blue-600 pl-[0.4rem]">
                        {head_text}
                      </h2>
                      <p className="text-[0.95rem] font-[500] text-gray-500 pr-[1.5rem]">
                        {head_para}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[0.7rem]">
                      <h2 className="text-[1.4rem] font-extrabold border-l border-blue-600 pl-[0.4rem]">
                        {body_text}
                      </h2>
                      <p className="text-[0.95rem] font-[500] text-gray-500 pr-[1.5rem]">
                        {body_para}
                      </p>
                    </div>

                    <div className="hidden md:block">
                      <h2 className="text-[1.4rem] font-extrabold border-l border-blue-600 pl-[0.4rem]">
                        {footer_text}
                      </h2>

                      <div className="flex flex-col gap-[1rem] py-[1rem]">
                        <div className="flex items-center gap-[1rem]">
                          <img
                            src={icon1}
                            alt={icon1_text}
                            className="h-[30px] object-cover"
                          />
                          <p className="text-gray-500 capitalize font-[500]">
                            {icon1_text}
                          </p>
                        </div>

                        <div className="flex items-center gap-[1rem]">
                          <img
                            src={icon2}
                            alt={icon2_text}
                            className="h-[30px] object-cover"
                          />
                          <p className="text-gray-500 capitalize font-[500]">
                            {icon2_text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* ===================================================================== */}
          {/* Slide card */}

          <div
            className="flex items-center w-[100%]   relative overflow-hidden shadow-2xl"
            style={{ height }}
          >
            {data.map(({ nav_img, closing_text, background, linear }, ind) => {
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
                  className={`border  rounded-2xl p-[1rem] w-[100%] h-[100%]  flex flex-col group overflow-hidden justify-between absolute gap-[2rem] duration-500 ease-in-out opacity-0 ${position}`}
                  style={{
                    background: `linear-gradient(${linear}), url(${background}) center/cover no-repeat`,
                  }}
                  key={ind}
                >
                  <div className="flex justify-between items-center">
                    <img
                      src={nav_img}
                      alt=""
                      className="h-[28px] object-cover"
                    />

                    <span className="text-[1.5rem] text-white">
                      <IoCard />
                    </span>
                  </div>

                  <div className="flex flex-col md:gap-[1rem] text-white ">
                    <h2 className="md:text-[1.5rem] font-extrabold">
                      {closing_text}
                    </h2>
                    <button
                      className="flex items-center gap-[0.4rem] text-[0.9rem] md:text-[1rem] font-extrabold w-max capitalize cursor-pointer h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-[35px] group-hover:opacity-100"
                      onClick={() => toast.error("Sorry link is not clickable")}
                    >
                      read more
                      <span>
                        <Arrow />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ===================================================================== */}
        {/* Slide footer */}

        <div className="w-[100%]">
          <div className="lg:py-[3rem]">
            {/* ========================================= */}
            {/* mobile div line */}
            <div className="flex items-center justify-center gap-[1rem] lg:hidden">
              {data.map((_, ind) => {
                const activeColor = currentColor(ind, "color", "gray");
                return (
                  <div
                    className={`h-[3px]  w-[20px] rounded ${activeColor}`}
                    key={ind}
                  ></div>
                );
              })}
            </div>

            {/* ========================================= */}
            {/*  div line desktop container */}

            <div className="hidden  w-[100%] lg:grid grid-cols-4">
              {data.map(({ color, grayImg, img }, ind) => {
                return (
                  <div
                    className="flex flex-col items-center justify-between h-[80px] cursor-pointer"
                    key={ind}
                    onClick={() => setIndex(ind)}
                  >
                    {/* ========================================= */}
                    {/*  div line */}
                    <div
                      className={`h-[3px] transition-all duration-500 ease-in-out ${
                        ind === index ? "w-full" : "w-0"
                      }`}
                      style={{
                        background: `${color}`,
                      }}
                    ></div>
                    <img
                      src={ind === index ? img : grayImg}
                      alt={img}
                      className=" w-[80px] h-[90px] object-contain"
                    />
                  </div>
                );
              })}
            </div>
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

  .color {
    background-color: blue;
  }

  .gray {
    background-color: gray;
  }

  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default Slide;
