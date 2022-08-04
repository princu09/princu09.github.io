import React from "react";
import { Link } from "react-router-dom";
import { BsFillGrid1X2Fill, BsFileEarmarkCodeFill } from "react-icons/bs";

const PortfolioCard = ({ id, project, sortDesc, img, preview }) => {
  return (
    <div className="rounded-xl shadow-xl">
      <div className="relative">
        <img
          src={img[0]}
          className="rounded-t-xl object-cover lg:h-52 xs:h-auto"
          alt=""
        />
      </div>
      <div className="p-4 flex flex-col justify-around rounded-lg h-48">
        <div>
          <p className="text-xl font-medium mb-2">{project}</p>
        </div>
        <div>
          <p className="text-sm">{sortDesc.substring(0, 50)}...</p>
        </div>
        <div className="flex gap-5">
          <Link to={`/portfolio/${id}`}>
            <button className="flex items-center px-2 mt-4">
              <BsFileEarmarkCodeFill className="mr-2" /> Documentation
            </button>
          </Link>
          {preview !== "" ? (
            <>
              <a href={`//${preview}`} target="_blank" rel="noreferrer">
                <button className="flex items-center px-2 mt-4 bg-cyan-500 text-white hover:border-cyan-500 hover:bg-transparent hover:text-cyan-500 border-cyan-500">
                  <BsFillGrid1X2Fill className="mr-2" /> Preview
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

export default PortfolioCard;
