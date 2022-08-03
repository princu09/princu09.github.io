import React from "react";
import WorkCard from "./WorkCard";
import { work } from "../../assets/data";

const Work = () => {
  return (
    <>
      <div className="h-full flex justify-center items-center flex-col lg:p-32 xs:py-20 xs:px-5">
        <p className="text-2xl font-medium border-b-2 border-black pb-3">
          Work Experience
        </p>
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
