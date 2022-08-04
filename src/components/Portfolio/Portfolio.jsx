import React from "react";
import { portfolio } from "../../assets/data";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <div className="h-full flex justify-center items-center flex-col lg:p-32 xs:py-20 xs:px-5">
        <div className="text-center">
          <p className="drop-shadow-md text-xl font-medium text-cyan-500">
            Portfolio
          </p>
          <p className="drop-shadow-md my-5 text-2xl font-bold text-slate-700">
            My Whole Project Works
          </p>
        </div>
        <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-10 mt-10">
          {portfolio.map((item, index) => (
            <>
              <PortfolioCard
                key={index}
                id={item.id}
                img={item.img}
                project={item.project}
                sortDesc={item.sortDesc}
                preview={item.preview}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
