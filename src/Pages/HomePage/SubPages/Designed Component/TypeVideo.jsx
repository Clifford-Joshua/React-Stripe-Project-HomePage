import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { useTypewriter } from "react-simple-typewriter";

const TypeVideo = () => {
  const [text] = useTypewriter({
    words: [
      'const express = require ("express");',
      'const cors = require ("cors");',
      'const stripe = require ("stripe") (process.env.STRIPE_SECRET_KEY); ',
      'const dotenv = require ("dotenv") . config();',
      'app . listen(4242, () => console.log ("Server running on http://localhost:4242"));',
      `const session = await stripe. checkout. sessions. create({mode : payment line_items : [ { price : priceId , quantity: 1,} ],
`,
    ],
    loop: 0,
  });

  const [text1] = useTypewriter({
    words: [
      "$ node server.js && stripe listen",
      "> Ready! waiting for request .....",
      `${
        new Date().toISOString().split("T")[0]
      } 04T12:45:30.123Z  [200] payment_intent.created`,
      `${
        new Date().toISOString().split("T")[0]
      } 04T12:45:30.123Z [200] charge.succeeded`,
      `${
        new Date().toISOString().split("T")[0]
      } 04T12:45:30.123Z payment_intent.succeeded`,
    ],
    loop: 0,
  });

  const colorGenerator = (ind) => {
    switch (ind) {
      case 0:
        return "text-blue-500"; // const express
      case 1:
        return "text-purple-400"; // const cors
      case 2:
        return "text-yellow-400"; // stripe config
      case 3:
        return "text-green-500"; // dotenv config
      case 4:
        return "text-pink-500"; // app.listen
      case 5:
        return "text-cyan-400"; // stripe.session.create
      case 6:
        return "text-cyan-300"; // mode
      case 7:
        return "text-indigo-300"; // line_items array start
      case 8:
        return "text-rose-400"; // price
      case 9:
        return "text-rose-300"; // quantity
      case 10:
        return "text-orange-400"; // array/object close
      case 11:
        return "text-lime-400"; // success/cancel URL
      case 12:
        return "text-fuchsia-400"; // response return
      case 13:
        return "text-emerald-400"; // error catch
      case 14:
        return "text-sky-400"; // process.env or config details
      default:
        return "text-gray-300"; // fallback
    }
  };

  return (
    <Wrapper className="md:w-[50%]">
      <div className="h-[65vh] flex flex-col justify-between">
        {/* code editor */}
        <div className={"h-[46%] bg-[#02245f] rounded-[10px] p-[1rem] w-full"}>
          {/* first text */}
          <h2 className="flex flex-wrap gap-[0.4rem] w-[100%]">
            {text.split(" ").map((word, index) => {
              return (
                <span
                  className={`${colorGenerator(
                    index
                  )} text-[0.95rem] font-[550]`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>

        {/* text editor heading */}
        <div className="h-[6%] flex items-center">
          <div className="w-[60%] flex gap-[0.5rem] h-[100%] items-center">
            {/* Normal */}
            <div className="flex items-center h-[100%]">
              <div className="w-[70px] h-[80%] bg-sky-400 flex items-center justify-center">
                <h2 className="text-[0.8rem] font-bold">NORMAL</h2>
              </div>
              <div className="w-[15px] h-[80%] bg-sky-400 triangle"></div>
            </div>
            <h2 className="text-sky-700 font-bold text-[1rem]">Server.js</h2>
          </div>

          <p className="text-gray-500 text-[1rem] font-[490] w-[40%] flex items-center justify-end gap-[0.2rem]">
            100%
            <span className="px-[0.3rem] text-[0.8rem]">
              <FaBars />
            </span>
            6/6 ln : 4
          </p>
        </div>

        {/* terminal */}
        <div className="h-[46%] bg-[#00050e] border-3 border-[#043b99] rounded-[10px] p-[1rem]">
          {/* second text */}
          <h2 className="flex flex-wrap gap-[0.4rem] w-[100%]">
            {text1.split(" ").map((word, index) => {
              return (
                <span
                  className={`${colorGenerator(
                    index
                  )} text-[0.95rem] font-[550]`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ====================================================== */
  /* Mobile View */
  /* ====================================================== */

  .triangle {
    clip-path: polygon(0 1%, 0% 100%, 100% 48%);

    /* #00163d */
  }

  /* ====================================================== */

  /* ====================================================== */
  /* Ipad View */
  /* ====================================================== */

  /* ====================================================== */
`;

export default TypeVideo;
