import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import Dot from "../../../assets/Images/dot.jpg";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { connectData } from "../../../Local Data/NavData";
import getSlidePosition from "./getSlidePosition";

const Connect = () => {
  const [data] = useState(connectData);
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCheck((prev) => !prev); // Use functional update to avoid stale closure
    }, 2000);

    return () => clearInterval(interval); // Correct cleanup
  }, []); // Empty dependency array: run once on mount

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

  return (
    <Wrapper className="w-[100%] lg:w-[50%] flex justify-center">
      <div
        className="p-[1rem] border border-gray-400 rounded-[10px] flex flex-col gap-[1rem]"
        style={{
          backgroundImage: `url(${Dot})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center w-[310px] h-[95px] relative overflow-hidden">
          {data.map(({ total, status, color, company }, ind) => {
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
                className={`flex w-[98%] justify-center shadow rounded-[10px] opacity-0 absolute transition duration-500 ease-in-out  ${position}`}
                key={ind}
              >
                <div className="flex items-center justify-between w-[100%] p-[1rem] bg-white rounded-[10px] relative z-[1]">
                  <div className="flex flex-col gap-[0.5rem]">
                    <div className="flex gap-[0.5rem] text-[0.8rem] font-bold items-center">
                      <h2 className="text-gray-700">#9124</h2>
                      <p className="text-gray-400 text-[0.75rem]">{company}</p>
                    </div>
                    <p
                      className="text-[0.55rem]  rounded w-[50%] p-[0.2rem] flex items-center justify-center"
                      style={{ backgroundColor: `${color}` }}
                    >
                      {status}
                    </p>
                  </div>
                  <h2 className="text-[0.8rem] font-[500] text-gray-600">
                    {total}
                  </h2>
                </div>
                <div className="absolute w-[90%] h-[100%] bg-gray-300 top-[6%] rounded-[10px]"></div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-[0.5rem] items-center relative w-[100%] ">
          <div className="rounded-[10px] absolute z-[1]  animate  w-[100%] h-[30px] flex items-center justify-center overflow-hidden">
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
                <button
                  className={`px-[0.8rem] p-[0.1rem] text-[0.7rem] font-bold text-black  shadow-xl/30 bg-white absolute ${position} rounded-[10px]`}
                  key={ind}
                >
                  {price}
                </button>
              );
            })}
          </div>

          <div className="border border-dotted border-gray-400 p-[0.1rem] rounded-[10px] relative z-[2]">
            <button className=" px-[1.5rem] py-[0.18rem] text-[0.8rem] font-bold text-white bg-purple-600 rounded-[10px]">
              Buyers
            </button>
          </div>
          <div className="text-[0.5rem] text-cyan-300 h-[65px] overflow-hidden">
            <div className="flex flex-col  gap-[0.2rem]  arrow">
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
            </div>
          </div>

          <div className="border border-dotted border-gray-400 p-[0.1rem] rounded-[10px] relative z-[2]">
            <button className=" px-[1.5rem] py-[0.28rem] text-[0.8rem] font-bold text-white bg-purple-600 rounded-[10px]">
              Platform
            </button>
          </div>

          <div className="text-[0.5rem] text-cyan-300 h-[65px] overflow-hidden">
            <div className="flex flex-col gap-[0.2rem] arrow">
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
              <TbTriangleInvertedFilled />
            </div>
          </div>
          <div className="border border-dotted border-gray-400 p-[0.15rem] rounded-[10px] relative z-[2] overflow-hidden">
            <button className="flex  items-center gap-[0.4rem] px-[1.5rem] py-[0.28rem] text-[0.8rem] font-bold text-white bg-linear-to-r from-cyan-300 to-blue-400 rounded-[10px]">
              <FaCheckCircle
                className={`transition duration-300 ease-in-out transform ${
                  check ? "translate-x-0" : "-translate-x-10"
                }`}
              />
              Sellers or service providers
            </button>
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
    box-shadow: 0px 0px 10px 4px lightgray;
  }

  .activeSlide {
    opacity: 1;
    transform: translateY(0);
  }
  .lastSlide {
    transform: translateY(-130%);
  }
  .nextSlide {
    transform: translateY(130%);
  }

  .animate {
    animation: slide_down 4s linear infinite;
  }

  .arrow {
    animation: down 4s linear infinite;
  }

  @keyframes down {
    from {
      transform: translateY(-30%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide_down {
    0% {
      transform: translateY(0);
    }

    45% {
      transform: translateY(115px);
    }
    50% {
      transform: translateY(115px);
    }
    55% {
      transform: translateY(115px);
    }

    95% {
      transform: translateY(228px);
    }
    100% {
      transform: translateY(228px);
    }
  }

  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default Connect;
