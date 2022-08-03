import React from "react";
import { Link } from "react-router-dom";
import { BsFillGrid1X2Fill, BsFileEarmarkCodeFill } from "react-icons/bs";

const PortfolioCard = ({ id, project, sortDesc, img, preview }) => {
  return (
    <div className="rounded-xl shadow-xl">
      <img src={img[0]} className="rounded-t-xl" alt="" />
      <div className="p-4 flex flex-col rounded-lg">
        <p className="text-2xl font-medium mb-2">{project}</p>
        <p className="text-sm">{sortDesc.substring(0, 100)}...</p>
        <div className="flex gap-5">
          <Link to={`/portfolio/${id}`}>
            <button className="flex items-center px-2 mt-4">
              <BsFileEarmarkCodeFill className="mr-2" /> Documentation
            </button>
          </Link>
          <a href={`//${preview}`} target="_blank" rel="noreferrer">
            <button className="flex items-center px-2 mt-4 bg-cyan-500 text-white hover:border-cyan-500 hover:bg-transparent hover:text-cyan-500 border-cyan-500">
              <BsFillGrid1X2Fill className="mr-2" /> Preview
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
