import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { BsFillGrid1X2Fill, BsFileEarmarkCodeFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

const WorkCard = ({
  project,
  role,
  technologies,
  source,
  preview,
  date,
  location,
  details,
}) => {
  return (
    <div className="relative pb-20">
      <div className="before:absolute before:w-0.5 before:bg-[#34495E] before:h-full lg:before:left-36 before:opacity-25 lg:pl-52 xs:pl-10 xs:before:left-2">
        <BiCurrentLocation className="absolute lg:left-32 xs:-left-2 ml-0.5 text-3xl top-4 text-white bg-orange-400 rounded-full p-1" />
        <div className="lg:absolute lg:-left-12 lg:pl-0 xs:relative pb-10 p-2">
          <p className="font-medium">{date}</p>
          <p className="font-medium">{location}</p>
        </div>
        <div className="">
          <p className="text-2xl font-medium">{project}</p>
          <p className="text-lg font-medium text-gray-500 my-3">
            Role : {role}
          </p>
        </div>

        <p className="text-lg font-medium text-gray-700 my-3">
          Technologies : {technologies}
        </p>
        <div>
          {details.map((item, index) => {
            return (
              <p
                className="grid grid-flow-col gap-3 items-center justify-start font-medium"
                key={index}
              >
                <MdDoubleArrow />
                {item}
              </p>
            );
          })}
        </div>

        <div className="flex gap-5 lg:w-1/2 xs:w-full mt-10">
          {source ? (
            <>
              <a href={source} target="_blank" rel="noreferrer">
                <button className="px-2 flex items-center">
                  <BsFileEarmarkCodeFill className="text-lg mr-2" /> Source Code
                </button>
              </a>
              <a href={preview} target="_blank" rel="noreferrer">
                <button className="px-2 grid grid-flow-col items-center">
                  <BsFillGrid1X2Fill className="text-lg mr-2" /> Live Preview
                </button>
              </a>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
