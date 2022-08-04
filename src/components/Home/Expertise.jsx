import React from "react";
import {
  WebDev,
  AppDev,
  QA,
  Iot,
  Software,
  Ecommerce_Vector,
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
        className="absolute lg:opacity-50 xs:opacity-20 -bottom-40 -left-40 w-52 lg:w-96"
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
          <div className="transition-colors duration-500 hover:bg-white flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5">
            <div className="bg-green-200 rounded-full p-5">
              <img src={QA} alt="" className="w-10" />
            </div>
            <div>
              <p className="text-xl text-center font-medium my-5 text-black">
                Testing & QA Services
              </p>
              <p className="my-2 text-center">
                Our experts test all solutions and ensuring brilliant
                performances
              </p>
              <a href="/" className="font-medium lg:text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="transition-colors duration-500 hover:bg-white flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5">
            <div className="bg-pink-100 rounded-full p-5">
              <img src={Iot} alt="" className="w-10" />
            </div>
            <div>
              <p className="text-xl text-center font-medium my-5 text-black">
                Internet of Things
              </p>
              <p className="my-2 text-center">
                Our experience tailor mindful IoT solutions for your needs
              </p>
              <a href="/" className="font-medium text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="transition-colors duration-500 hover:bg-white flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5">
            <div className="bg-purple-100 rounded-full p-5">
              <img src={WebDev} alt="" className="w-10" />
            </div>
            <div>
              <p className="text-xl text-center font-medium my-5 text-black">
                Web Developement
              </p>
              <p className="my-2 text-center">
                Create receptive and interactive websites & designs with us
              </p>
              <a href="/" className="font-medium text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="transition-colors duration-500 hover:bg-white flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5">
            <div className="bg-orange-100 rounded-full p-5">
              <img src={AppDev} alt="" className="w-10" />
            </div>
            <div>
              <p className="text-xl text-center font-medium my-5 text-black">
                App Development
              </p>
              <p className="my-2 text-center">
                Get your mobile app ideas enriched with trends and features
              </p>
              <a href="/" className="font-medium text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="transition-colors duration-500 hover:bg-white flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5">
            <div className="bg-cyan-100 rounded-full p-5">
              <img src={Ecommerce_Vector} alt="" className="w-10" />
            </div>
            <div>
              <p className="text-xl text-center font-medium my-5 text-black">
                Ecommerce Development
              </p>
              <p className="my-2 text-center">
                Get your next futuristic ecommerce solutions built from us
              </p>
              <a href="/" className="font-medium text-sm text-cyan-500">
                Read More...
              </a>
            </div>
          </div>
          <div className="transition-colors duration-500 hover:bg-white flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5">
            <div className="bg-red-100 rounded-full p-5">
              <img src={Software} alt="" className="w-10" />
            </div>
            <div>
              <p className="text-xl text-center font-medium my-5 text-black">
                Software Developement
              </p>
              <p className="my-2 text-center">
                We ease complex business need through our Software solutions
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
