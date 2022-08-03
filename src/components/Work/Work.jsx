import React from "react";
import WorkCard from "./WorkCard";
import { work } from "../../assets/data";

const Work = () => {
  return (
    <>
      <div className="h-full flex justify-center items-center flex-col lg:p-32 xs:py-20 xs:px-5">
        <div className="text-center">
          <p className="drop-shadow-md text-xl font-medium text-cyan-500">
            Work Experiance
          </p>
          <p className="drop-shadow-md my-5 text-2xl font-bold text-slate-700">
            My Work Journey
          </p>
        </div>
        <div className="mt-10">
          {work.map((item, index) => {
            return (
              <WorkCard
                key={index}
                project={item.project}
                role={item.role}
                technologies={item.technologies}
                details={item.details}
                source={item.source}
                preview={item.preview}
                date={item.date}
                location={item.location}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
