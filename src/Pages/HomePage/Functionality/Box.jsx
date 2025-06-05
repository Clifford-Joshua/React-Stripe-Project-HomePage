import React, { useEffect, useState } from "react";
import styled from "styled-components";

// icons
import {
  AiFillAlipayCircle,
  AiFillAndroid,
  AiFillAppstore,
  AiFillBilibili,
  AiFillIdcard,
  AiFillInstagram,
  AiFillOpenAI,
  AiFillSetting,
  AiFillWechat,
  AiFillSlackSquare,
} from "react-icons/ai";

const Box = () => {
  const [RedLine, setRedLine] = useState(false);
  const [AquaLine, setAquaLine] = useState(false);
  const [BlueLine, setBlueLine] = useState(false);
  const [GreenLine, setGreenLine] = useState(false);
  const [PurpleLine, setPurpleLine] = useState(false);

  useEffect(() => {
    // ==================================================================
    // Lines logic using setinterval and settimeout
    const interval = setInterval(() => {
      setGreenLine(true);

      setTimeout(() => {
        setGreenLine(false);
        setPurpleLine(true);

        setTimeout(() => {
          setPurpleLine(false);
          setBlueLine(true);

          setTimeout(() => {
            setBlueLine(false);
            setRedLine(true);

            setTimeout(() => {
              setRedLine(false);
              setAquaLine(true);

              setTimeout(() => {
                setAquaLine(false);
              }, 1500);
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
    }, 8000);

    return () => clearInterval(interval); // Proper cleanup
  }, []);

  const toggleIconClass = (e, action) => {
    const div = e.currentTarget.querySelector("div");
    const h2 = e.currentTarget.querySelector("h2");

    div?.classList[action ? "add" : "remove"]("Icon");
    if (h2) h2.style.display = action ? "block" : "none";
  };

  return (
    <Wrapper>
      <div className="grid grid-cols-[repeat(4,_auto)]  justify-center items-center gap-[0.7rem] md:gap-[1.4rem] lg:gap-[1rem] ">
        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px]  rounded-[10px] "></div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50 relative z-[1] "
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out ${
              PurpleLine && "Icon"
            }`}
          >
            <AiFillAlipayCircle />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white ${
                PurpleLine ? "block" : "hidden"
              }`}
            >
              tax
            </h2>
          </div>
        </div>

        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] "></div>

        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] "></div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50 relative z-[1] "
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out ${
              GreenLine && "Icon"
            }`}
          >
            <AiFillAppstore />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white ${
                GreenLine ? "block" : "hidden"
              }`}
            >
              billing
            </h2>
          </div>
        </div>

        {/* ================================================= */}
        {/* straight line div */}
        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] flex justify-center items-center relative"
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div className={`green_line ${GreenLine && " width_100"}`}></div>
          <div
            className={`purple_line absolute bottom-[-10%] ${
              PurpleLine && " height_100"
            }`}
          ></div>
        </div>

        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50  relative z-[1] ">
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out ${
              GreenLine || RedLine ? "Icon" : ""
            }`}
          >
            <AiFillBilibili />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white ${
                GreenLine || RedLine ? "block" : "hidden"
              }`}
            >
              invoicing
            </h2>
          </div>
        </div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50 "
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out `}
          >
            <AiFillIdcard />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white hidden`}
            >
              checkout
            </h2>
          </div>
        </div>

        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] "></div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50 relative z-[1]"
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out ${
              PurpleLine || BlueLine ? "Icon" : ""
            }`}
          >
            <AiFillAndroid />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white ${
                BlueLine || PurpleLine ? "block" : "hidden"
              }`}
            >
              payments
            </h2>
          </div>
        </div>

        {/* ================================================= */}
        {/*first curve  line div */}
        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] flex justify-center relative">
          {/* red curve line div */}
          <div
            className={`half-red_curve absolute bottom-[-10%] left-[55%] flex items-end justify-end ${
              RedLine && "red_height_45 width_50"
            }`}
          >
            <div className="w-[94%] h-[93%] bg-slate-50 [border-top-left-radius:10px]"></div>
          </div>

          {/*red straight line div */}
          <div
            className={`red_line absolute bottom-[-10%]  ${
              RedLine && "height_100"
            }`}
          ></div>
        </div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50 relative z-[1]"
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out ${
              RedLine && "Icon"
            }`}
          >
            <AiFillInstagram />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white ${
                RedLine ? "block" : "hidden"
              }`}
            >
              climate
            </h2>
          </div>
        </div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50 relative z-[2]"
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out ${
              BlueLine || AquaLine ? "Icon" : ""
            }`}
          >
            <AiFillOpenAI />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white ${
                BlueLine || AquaLine ? "block" : "hidden"
              }`}
            >
              connect
            </h2>
          </div>
        </div>

        {/* ================================================= */}
        {/*second curve line div */}
        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] flex justify-center relative">
          {/* purple curve line div */}
          <div
            className={`half-purple_curve absolute top-[-10%] left-[50%] flex justify-end  ${
              PurpleLine && "purple_height_45 width_50"
            } `}
          >
            <div className="w-[95%] h-[93%] bg-slate-50 [border-end-start-radius:10px]"></div>
          </div>

          {/*blue curve line div */}
          <div
            className={`half-blue_curve absolute top-[-10%] right-[55%]   ${
              BlueLine && "blue_height_45 width_50"
            }`}
          >
            <div className="w-[95%] h-[94%] bg-slate-50 [border-bottom-right-radius:10px]"></div>
          </div>

          {/*blue straight line div */}
          <div
            className={`blue_line absolute top-[-10%]  ${
              BlueLine && "height_100"
            }`}
          ></div>
        </div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50 relative z-[1]"
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out ${
              PurpleLine || RedLine ? "Icon" : ""
            }`}
          >
            <AiFillSetting />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white ${
                PurpleLine || RedLine ? "block" : "hidden"
              }`}
            >
              radar
            </h2>
          </div>
        </div>

        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] "></div>

        {/* ================================================= */}
        {/*last curve line div */}
        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] flex justify-center relative z-[1]">
          {/* aqua curve line div */}
          <div
            className={`half-aqua_curve absolute top-[-10%] left-[50%] flex justify-end ${
              AquaLine && "aqua_height_45 width_50"
            }`}
          >
            <div className="w-[95%] h-[93%] bg-slate-50 [border-end-start-radius:10px]"></div>
          </div>
        </div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50 relative z-[1]"
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out ${
              BlueLine || AquaLine ? "Icon" : ""
            }`}
          >
            <AiFillWechat />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white ${
                BlueLine || AquaLine ? "block" : "hidden"
              }`}
            >
              terminal
            </h2>
          </div>
        </div>

        <div
          className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px] border border-gray-600 bg-slate-50"
          onMouseEnter={(e) => toggleIconClass(e, true)}
          onMouseLeave={(e) => toggleIconClass(e, false)}
        >
          <div
            className={`text-[3rem] lg:text-[2rem] w-[100%] h-[100%] flex flex-col items-center justify-center text-gray-400 rounded-[10px] transition duration-500 ease-in-out`}
          >
            <AiFillSlackSquare />

            <h2
              className={`capitalize text-[0.75rem] lg:text-[0.6rem] font-extrabold text-white hidden`}
            >
              capital
            </h2>
          </div>
        </div>

        <div className="w-[80px] h-[80px] lg:w-[60px] lg:h-[60px] rounded-[10px]"></div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  /* ====================================================== */

  .Icon {
    color: yellow;
    transform: scale(1.08);
    background-color: black;
    box-shadow: 0px 0px 6px 3px blue;
  }

  .green_line {
    width: 0;
    left: -10%;
    height: 2px;
    position: absolute;
    transition: all 0.8s ease-in-out;
    animation: colorAnimation 2s ease-in infinite;
    background: linear-gradient(to right, #ffc400, #00ff00);
  }

  :is(.purple_line, .blue_line, .red_line) {
    width: 3px;
    height: 0px;
    transition: all 0.8s ease-in-out;
    animation: colorAnimationUp 2s ease-in infinite;
    background: linear-gradient(to top, purple, pink);
  }

  .blue_line {
    animation: colorAnimationDown 2s ease-in infinite;
    background: linear-gradient(to top, skyblue, #f104f1);
  }

  .red_line {
    background: linear-gradient(to top, yellow, red);
  }

  :is(.half-purple_curve, .half-blue_curve, .half-red_curve, .half-aqua_curve) {
    width: 0px;
    height: 0px;
    transition: all 0.8s ease-in-out;
  }

  .half-purple_curve {
    border-end-start-radius: 10px;
    animation: colorAnimationUp 2s ease-in infinite;
    background: linear-gradient(to top, purple, pink);
  }

  .half-blue_curve {
    border-bottom-right-radius: 10px;
    animation: colorAnimationDown 2s ease-in infinite;
    background: linear-gradient(to top, skyblue, #f104f1);
  }

  .half-red_curve {
    border-top-left-radius: 10px;
    animation: colorAnimationUp 2s ease-in infinite;
    background: linear-gradient(to top, yellow, red);
  }

  .half-aqua_curve {
    border-end-start-radius: 10px;
    animation: colorAnimationUp 2s ease-in infinite;
    background: linear-gradient(to top, aqua, orange);
  }

  /* style for green line add width */
  .width_100 {
    width: 100px;
  }

  /* style for half purple curve height */
  :is(.purple_height_45, .blue_height_45, .red_height_45, .aqua_height_45) {
    height: 45px;
    border-left: 3px solid;
    border-image: linear-gradient(to top, purple, pink) 1;
  }

  /* style for half blue curve height */
  .blue_height_45 {
    border-image: linear-gradient(to top, skyblue, #f104f1) 1;
  }

  /* style for half red curve height */
  .red_height_45 {
    border-image: linear-gradient(to top, yellow, red) 1;
  }

  /* style for half aqua curve height */
  .aqua_height_45 {
    border-image: linear-gradient(to top, aqua, orange) 1;
  }

  /* style for purple line height */
  .height_100 {
    height: 100px;
  }

  /* style for half purple curve  and blue curve for width*/
  .width_50 {
    width: 50px;
    border: none;
    border-image: none;
  }

  /* =========================================================== */
  /* Animation flow leftSide */
  @keyframes colorAnimation {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 100px 0;
    }
  }

  /* =========================================================== */
  /* Animation flow upwards */
  @keyframes colorAnimationUp {
    0% {
      background-position: 0 100px;
    }
    100% {
      background-position: 0 0px;
    }
  }

  /* =========================================================== */
  /* Animation flow downwards */
  @keyframes colorAnimationDown {
    0% {
      background-position: 0 0px;
    }
    100% {
      background-position: 0 100px;
    }
  }

  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */
  @media screen and (width>= 764px) {
    .height_100 {
      height: 150px;
    }
  }

  /* ====================================================== */

  /* ====================================================== */
  /* Desktop View */
  /* ====================================================== */
  @media screen and (width>= 764px) {
    .height_100 {
      height: 100px;
    }
  }

  /* ====================================================== */
`;

export default Box;
