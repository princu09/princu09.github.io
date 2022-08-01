import React from "react";
import {
  Vector1,
  Vector8,
  CloudApp,
  AdminDashboard,
  TechNFG,
  Ecommerce,
  NFGJwellery,
  DrFinder,
} from "../../assets/";

const CreativeWorks = () => {
  return (
    <>
      <div className="relative">
        <div className="relative w-full bg-slate-200 overflow-hidden" style={{minHeight : "50vh"}}>
          <img
            src={Vector8}
            alt=""
            className="w-1/3 absolute lg:-left-32 lg:-top-56 -top-10"
          />
          <img
            src={Vector1}
            alt=""
            className="w-1/3 absolute lg:-right-80 -right-20 rotate-12 -top-0 "
          />
          <div className="text-center mt-10 pt-10">
            <p className="drop-shadow-md text-2xl font-medium text-cyan-500">
              Creative Works
            </p>
            <p className="drop-shadow-md my-5 lg:text-4xl text-3xl font-bold text-slate-700">
              Check My Portfolio
            </p>
          </div>
          <ul className="flex justify-center xl:mt-10">
            <li className="">All</li>
            <li className="">Web Design</li>
            <li className="">ReactJS</li>
            <li className="">Django</li>
          </ul>
        </div>
        <div className="lg:px-32 lg:-mt-28 -mt-44 mb-20 px-5">
          <div className="grid lg:grid-cols-3 gap-5">
            <img src={CloudApp} className="rounded-lg drop-shadow-md" alt="" />
            <img
              src={AdminDashboard}
              className="rounded-lg drop-shadow-md"
              alt=""
            />
            <img
              src={NFGJwellery}
              className="rounded-lg drop-shadow-md"
              alt=""
            />
            <img src={Ecommerce} className="rounded-lg drop-shadow-md" alt="" />
            <img src={TechNFG} className="rounded-lg drop-shadow-md" alt="" />
            <img src={DrFinder} className="rounded-lg drop-shadow-md" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeWorks;
