import React from "react";
import { Vector1, Vector8 } from "../../assets/";
import { CW } from "../../assets/data";

const CreativeWorks = () => {
  return (
    <>
      <div className="relative">
        <div
          className="relative w-full bg-slate-200 overflow-hidden"
          style={{ minHeight: "50vh" }}
        >
          <img
            src={Vector8}
            alt=""
            className="w-1/3 absolute lg:-left-32 lg:-top-56 -top-10 opacity-50"
          />
          <img
            src={Vector1}
            alt=""
            className="w-1/3 absolute lg:-right-80 -right-20 rotate-12 -top-0 opacity-50"
          />
          <div className="text-center mt-10 pt-10">
            <p className="drop-shadow-md text-2xl font-medium text-cyan-500">
              Creative Works
            </p>
            <p className="drop-shadow-md my-5 lg:text-3xl text-2xl font-bold text-slate-700">
              Check My Portfolio
            </p>
          </div>
          <ul className="flex justify-center xl:mt-10 controls">
            <li>All</li>
            <li>Web Design</li>
            <li>ReactJS</li>
            <li>Django</li>
          </ul>
        </div>
        <div className="lg:px-32 lg:-mt-28 -mt-44 mb-20 px-5">
          <div className="grid lg:grid-cols-3 gap-5 container">
            {/* For Loop Here */}
            {CW.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item.img}
                  className={`rounded-lg drop-shadow-md ${item.value}`}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeWorks;
