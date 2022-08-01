import React from "react";
import {
  AppDev,
  UiUx,
  WebDesign,
  WebDev,
  Vector3,
  Vector5,
} from "../../assets";

const Expertise = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={Vector3}
        className="absolute opacity-50 lg:-right-10 right-0 top-32 w-52 lg:w-96"
        alt=""
      />
      <img
        src={Vector5}
        className="absolute opacity-50 -bottom-10 left-0 w-52 lg:w-96"
        alt=""
      />
      <div className="w-full h-full flex flex-col lg:justify-center lg:items-center lg:px-32 px-5 bg-slate-100 pb-10 lg:py-20 py-10">
        <div className="text-center mb-10">
          <p className="drop-shadow-md  text-2xl font-medium text-cyan-500">
            My Expertise
          </p>
          <p className="drop-shadow-md my-5 lg:text-4xl text-3xl font-bold text-slate-700">
            Provide Wide Range of Digital Services
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 lg:justify-center lg:items-center">
          <div className="flex lg:flex-row flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-white">
            <div className="w-1/2 flex justify-center items-center mx-5">
              <div className="bg-cyan-50 rounded-full w-28 p-5">
                <img src={UiUx} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl font-bold text-orange-400">
                UI/UX Design
              </p>
              <p className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                praesentium modi, sequi nobis ducimus, commodi harum laboriosam
                nulla eveniet non recusandae quidem doloribus. Impedit minus
                autem fugit facere? Blanditiis, quasi.
              </p>
              <a href="/" className="font-medium text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-white">
            <div className="w-1/2 flex justify-center items-center mx-5">
              <div className="bg-cyan-50 rounded-full w-28 p-5">
                <img src={WebDesign} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl font-bold text-orange-400">
                Web Design
              </p>
              <p className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                praesentium modi, sequi nobis ducimus, commodi harum laboriosam
                nulla eveniet non recusandae quidem doloribus. Impedit minus
                autem fugit facere? Blanditiis, quasi.
              </p>
              <a href="/" className="font-medium text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-white">
            <div className="w-1/2 flex justify-center items-center mx-5">
              <div className="bg-cyan-50 rounded-full w-28 p-5">
                <img src={WebDev} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl font-bold text-orange-400">
                Web Developement
              </p>
              <p className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                praesentium modi, sequi nobis ducimus, commodi harum laboriosam
                nulla eveniet non recusandae quidem doloribus. Impedit minus
                autem fugit facere? Blanditiis, quasi.
              </p>
              <a href="/" className="font-medium text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-white">
            <div className="w-1/2 flex justify-center items-center mx-5">
              <div className="bg-cyan-50 rounded-full w-28 p-5">
                <img src={AppDev} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl font-bold text-orange-400">
                App Development
              </p>
              <p className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                praesentium modi, sequi nobis ducimus, commodi harum laboriosam
                nulla eveniet non recusandae quidem doloribus. Impedit minus
                autem fugit facere? Blanditiis, quasi.
              </p>
              <a href="/" className="font-medium text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
