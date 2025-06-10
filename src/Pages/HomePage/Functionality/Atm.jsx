import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ATMCARD } from "../../../Local Data/NavData";
import atmChip from "../../../assets/Images/ATM.png";
const Atm = () => {
  const [data] = useState(ATMCARD);
  const [index, setIndex] = useState(0);

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

  const getSlidePosition = (ind, index, length, active, last, next) => {
    if (ind === index) return active;
    if (ind === index - 1 || (index === 0 && ind === length - 1)) return last;
    return next;
  };

  return (
    <Wrapper className="w-[100%] md:w-[50%] lg:w-[40%] h-[500px] ">
      <div className="  text-[white]  relative w-[100%] h-[100%] z-[20] overflow-hidden">
        {data.map(
          (
            {
              color,
              bank,
              logo,
              serial_number,
              card_type,
              owner,
              number,
              month_year,
              expiry_date,
            },
            ind
          ) => {
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
                className={`p-[0.7rem] pl-[1.5rem]  flex flex-col gap-[1.3rem] lg:gap-[1.8rem] rounded-[10px] absolute w-[100%] transition duration-300 ease-in-out ${position}`}
                style={{
                  backgroundColor: `${color}`,
                }}
                key={ind}
              >
                {/* ================================================== */}
                {/* header */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-[0.3rem]">
                      <img
                        src={logo}
                        alt={bank}
                        className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] rounded-full"
                      />
                      <h2 className="text-[1.2rem] lg:text-[1.5rem]">{bank}</h2>
                    </div>
                    <p className="text-[0.5rem]">
                      Lorem, ipsum dolor sit amet consectetur
                    </p>
                  </div>
                  <h2 className="text-[1.2rem] lg:text-[1.5rem] style_text">
                    premium
                  </h2>
                </div>
                {/* ====================================================== */}
                {/* gold chip */}
                <div>
                  <img
                    src={atmChip}
                    alt="atm chip"
                    className="w-[50px] h-[35px] lg:w-[60] lg:h-[45px] object-cover border-[1px] rounded"
                  />
                </div>

                {/* ============================================================ */}
                {/* acct number */}
                <div className="w-[100%] flex items-end justify-between ">
                  <div className="flex flex-col gap-[0.2rem] lg:gap-[0.5rem]">
                    <h3 className="text-[1.2rem] lg:text-[1.5rem] font-bold">
                      {number}
                    </h3>
                    <div className="flex items-start gap-[1rem] text-[0.6rem] lg:text-[0.7rem]">
                      <p>
                        <span>{serial_number}</span>
                      </p>
                      <p className="flex flex-col">
                        <span>MONTH / YEAR</span>
                        <span className="text-[0.65] lg:text-[0.8rem] font-bold">
                          {month_year}
                        </span>
                      </p>
                      <p className="flex flex-col">
                        <span>EXPIRES END</span>
                        <span className="text-[0.65] lg:text-[0.8rem] font-bold">
                          {expiry_date}
                        </span>
                      </p>
                    </div>
                    <h2 className="text-[0.8rem] lg:text-[0.9rem] font-bold">
                      {owner}
                    </h2>
                  </div>
                  <div>
                    <div className="w-[70px] h-[40px] lg:w-[100px] lg:h-[50px] flex items-center justify-center relative">
                      <div className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] bg-[#ff0000ce] rounded-full absolute left-[15%] z-[1]"></div>
                      <div className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] bg-orange-400 rounded-full absolute right-[15%] "></div>
                    </div>
                    <h3 className="text-[0.8rem]">{card_type}</h3>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  /* ====================================================== */

  .style_text {
    font-weight: 600;
    font-style: normal;
    font-optical-sizing: auto;
    font-family: "Lobster", sans-serif;
  }

  .activeSlide {
    bottom: 0%;
    z-index: 5;
    animation: height 2s linear 3s infinite;
  }
  .lastSlide {
    top: 0%;
    z-index: 2;
  }
  .nextSlide {
    top: 25%;
    z-index: 3;
  }

  @keyframes height {
    from {
      height: 300px;
    }
    to {
      height: 0px;
    }
  }

  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default Atm;
