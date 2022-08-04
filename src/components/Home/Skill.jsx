import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Vector2 } from "../../assets";
import { Cv } from "../../assets";

const Skill = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={Vector2}
        alt=""
        className="lg:opacity-50 xs:opacity-20 absolute lg:w-1/4 xs:w-2/3 lg:-left-10 lg:-bottom-10 xs:bottom-1/3 xs:-right-10 -z-10"
      />
      <div className="w-full h-full lg:py-20 flex lg:justify-between lg:items-center lg:px-32 flex-col lg:flex-row px-10 mb-10">
        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-5 order-2 xl:ml-20">
          <div className="shadow-xl rounded-xl lg:p-10 lg:w-60 lg:h-60 w-40 h-40 p-2 flex flex-col justify-center items-cente">
            <CircularProgressbar
              strokeWidth={5}
              value={70}
              text="70%"
              styles={buildStyles({
                pathColor: "orange",
                textColor: "orange",
              })}
            />
            <p className="mt-2 font-medium text-lg text-gray-600">
              Graphic Design
            </p>
          </div>
          <div className="shadow-xl rounded-xl lg:p-10 lg:w-60 lg:h-60 w-40 h-40 p-2 flex flex-col justify-center items-center">
            <CircularProgressbar
              strokeWidth={5}
              value={95}
              text="95%"
              styles={buildStyles({
                pathColor: "purple",
                textColor: "purple",
              })}
            />
            <p className="mt-2 font-medium text-lg text-gray-600">Web Design</p>
          </div>
          <div className="shadow-xl rounded-xl lg:p-10 lg:w-60 lg:h-60 w-40 h-40 p-2 flex flex-col justify-center items-center">
            <CircularProgressbar strokeWidth={5} value={85} text="85%" />
            <p className="mt-2 font-medium text-lg text-gray-600 text-center">
              Web Developement
            </p>
          </div>
          <div className="shadow-xl rounded-xl lg:p-10 lg:w-60 lg:h-60 w-40 h-40 p-2 flex flex-col justify-center items-center">
            <CircularProgressbar
              strokeWidth={5}
              value={85}
              text="85%"
              styles={buildStyles({
                pathColor: "navy",
                textColor: "navy",
              })}
            />
            <p className="mt-2 font-medium text-lg text-center text-gray-600">
              App Developement
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full my-20">
          <p className="drop-shadow-md text-2xl font-medium text-cyan-500">
            My Skills
          </p>
          <p className="drop-shadow-md my-5 lg:text-3xl text-2xl font-bold text-slate-700">
            Beautiful & Unique Digital Experiences
          </p>
          <p className="text-lg text-gray-500">
            Nostrum exercitationem ullam corporis suscipit laborioa nisi ut
            aliquid exrea commodi consequatur magni dolores aos qui ratione
            voluptatem nesciunt.
          </p>
          <p className="text-lg text-gray-500 my-3 mb-10">
            Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
            consequntar magni dolores.
          </p>
          <a href={Cv} download>
            <button className="rounded-full py-3">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skill;
