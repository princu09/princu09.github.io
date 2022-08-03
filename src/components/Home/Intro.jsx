import React from "react";
import { Portfolio, Vector7 } from "../../assets/";
import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="relative">
      <img
        src={Vector7}
        alt=""
        className="absolute w-1/3 -bottom-40 -left-56 opacity-25 -z-10"
      />
      <div className="w-full h-screen lg:px-32 px-5 flex lg:justify-between lg:items-center lg:flex-row flex-col justify-center items-center">
        <div className="w-full">
          <div className="lg:text-7xl font-bold mb-10">
            <p className="my-5 lg:text-5xl text-3xl">Hi,</p>
            <p className="my-5 text-6xl">
              I'm <span className="text-orange-400">Prince.</span>
            </p>
            <p className="my-5 lg:text-4xl text-3xl text-slate-700">
              Full Stack Developer
            </p>
          </div>
          <Link to="/about">
            <button>Contact</button>
          </Link>

          <div className="social-media flex absolute bottom-10">
            <a
              target="_blank"
              rel="noreferrer"
              href="//twitter.com/princu09"
              className="text-xl px-3 text-slate-500 hover:text-[#1DA1F2] drop-shadow-lg"
            >
              <BsTwitter />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="//linkedin.com/in/princu09/"
              className="text-xl px-3 text-slate-500 hover:text-[#0A66C2] drop-shadow-lg"
            >
              <BsLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="//github.com/princu09"
              className="text-xl px-3 text-slate-500 hover:text-[#333] drop-shadow-lg"
            >
              <BsGithub />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="//instagram.com/princu09"
              className="text-xl px-3 text-slate-500 hover:text-[#E4405F] drop-shadow-lg"
            >
              <BsInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:pri2232@outlook.com"
              className="text-xl px-3 text-slate-500 hover:text-[#FF6600] drop-shadow-lg"
            >
              <BsFillEnvelopeFill />
            </a>
          </div>
        </div>
        <div className="w-full">
          <img src={Portfolio} alt="" className="w-full drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
