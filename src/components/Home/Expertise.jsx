import React from "react";
import {
  AppDev,
  UiUx,
  WebDesign,
  Ecommerce_Vector,
  Software,
  WebDev,
  Vector3,
  Vector5,
} from "../../assets";

const Expertise = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={Vector3}
        className="absolute opacity-50 lg:-right-10 xs:-right-10 lg:top-32 xs:top-10 w-52 lg:w-96 xs:opacity-20"
        alt=""
      />
      <img
        src={Vector5}
        className="absolute lg:opacity-50 xs:opacity-20 -bottom-10 left-0 w-52 lg:w-96"
        alt=""
      />
      <div className="w-full h-full flex flex-col lg:justify-center lg:items-center lg:px-32 px-5 bg-slate-100 pb-10 lg:py-20 py-10">
        <div className="text-center mb-10">
          <p className="drop-shadow-md  text-2xl font-medium text-cyan-500">
            My Expertise
          </p>
          <p className="drop-shadow-md my-5 lg:text-3xl text-2xl font-bold text-slate-700">
            Provide Wide Range of Digital Services
          </p>
        </div>
        <div className="grid lg:grid-cols-3 xs:grid-cols-1 xs:gap-5 lg:gap-16 lg:justify-center lg:items-center">
          <div className="flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-gray-100">
            <div className="lg:w-1/2 xs:w-1/4 flex justify-center items-center mx-5">
              <div className="bg-orange-100 rounded-full w-28 p-5">
                <img src={UiUx} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl text-center font-bold text-orange-400">
                UI/UX Design
              </p>
              <p className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                praesentium modi, sequi nobis ducimus, commodi harum laboriosam
                nulla eveniet non recusandae quidem doloribus. Impedit minus
                autem fugit facere? Blanditiis, quasi.
              </p>
              <a href="/" className="font-medium lg:text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-gray-100">
            <div className="lg:w-1/2 xs:w-1/4 flex justify-center items-center mx-5">
              <div className="bg-orange-100 rounded-full w-28 p-5">
                <img src={WebDesign} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl text-center font-bold text-orange-400">
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
          <div className="flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-gray-100">
            <div className="lg:w-1/2 xs:w-1/4 flex justify-center items-center mx-5">
              <div className="bg-orange-100 rounded-full w-28 p-5">
                <img src={WebDev} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl text-center font-bold text-orange-400">
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
          <div className="flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-gray-100">
            <div className="lg:w-1/2 xs:w-1/4 flex justify-center items-center mx-5">
              <div className="bg-orange-100 rounded-full w-28 p-5">
                <img src={AppDev} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl text-center font-bold text-orange-400">
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
          <div className="flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-gray-100">
            <div className="lg:w-1/2 xs:w-1/4 flex justify-center items-center mx-5">
              <div className="bg-orange-100 rounded-full w-28 p-5">
                <img src={Ecommerce_Vector} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl text-center font-bold text-orange-400">
                Ecommerce Development
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
          <div className="flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-gray-100">
            <div className="lg:w-1/2 xs:w-1/4 flex justify-center items-center mx-5">
              <div className="bg-orange-100 rounded-full w-28 p-5">
                <img src={Software} alt="" className="" />
              </div>
            </div>
            <div>
              <p className="my-2 text-xl text-center font-bold text-orange-400">
                Software Developement
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
