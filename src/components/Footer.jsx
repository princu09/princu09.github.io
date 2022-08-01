import React from "react";
import { Vector11 } from "../assets/";
import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const Footer = () => {

  return (
    <div className="relative overflow-hidden">
      <img src={Vector11} className="absolute top-0 w-64" alt="" />
      <img
        src={Vector11}
        className="absolute bottom-0 right-0 w-64 rotate-180"
        alt=""
      />
      <div className="bg-[#211e39] text-white h-full w-full flex flex-col items-center justify-center lg:px-32 px-5">
        <p className="text-center lg:text-4xl text-3xl font-medium mt-10">Prince Patel.</p>
        <ul className="flex my-10">
          <li className="text-slate-500 px-5 border-slate-700 border-r">
            Home
          </li>
          <li className="text-slate-500 px-5 border-slate-700 border-r">
            Portfolio
          </li>
          <li className="text-slate-500 px-5 border-slate-700 border-r">
            Work
          </li>
          <li className="text-slate-500 px-5">About</li>
        </ul>
        <div className="social-media flex mb-20">
          <a
            href="/"
            className="text-xl bg-white w-10 h-10 mx-3 text-[#1DA1F2] drop-shadow-lg flex justify-center items-center rounded-full"
          >
            <BsTwitter className="text-2xl" />
          </a>
          <a
            href="/"
            className="text-xl bg-white w-10 h-10 mx-3 text-[#0A66C2] drop-shadow-lg flex justify-center items-center rounded-full"
          >
            <BsLinkedin className="text-2xl" />
          </a>
          <a
            href="/"
            className="text-xl bg-white w-10 h-10 mx-3 text-[#333] drop-shadow-lg flex justify-center items-center rounded-full"
          >
            <BsGithub className="text-2xl" />
          </a>
          <a
            href="/"
            className="text-xl bg-white w-10 h-10 mx-3 text-[#E4405F] drop-shadow-lg flex justify-center items-center rounded-full"
          >
            <BsInstagram className="text-2xl" />
          </a>
          <a
            href="/"
            className="text-xl bg-white w-10 h-10 mx-3 text-[#FF6600] drop-shadow-lg flex justify-center items-center rounded-full"
          >
            <BsFillEnvelopeFill className="text-2xl" />
          </a>
        </div>
        <div className="border-t w-full border-slate-600">
          <p className="text-slate-600 text-center my-5 text-sm">
            {new Date().getFullYear()} &copy;{" "}
            <a
              href="//twitter.com/NorthFoxGroup"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300"
            >
              NorthFoxGroup
            </a>{" "}
            {""}| All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
