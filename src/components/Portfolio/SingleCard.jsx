import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillGrid1X2Fill, BsFileEarmarkCodeFill } from "react-icons/bs";
import Loading from "../Loading";
import { portfolio } from "../../assets/data";

const SingleCard = () => {
  let { id } = useParams();
  const [nData, setNData] = useState("");
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    const getData = async () => {
      const newData = await portfolio.filter((data) => data.id === id);
      setNData(newData);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!nData ? (
        <Loading />
      ) : (
        <div className="h-full flex justify-center items-center flex-col lg:p-32 xs:py-20 xs:px-5">
          <div className="text-center">
            <p className="drop-shadow-md text-xl font-medium text-cyan-500">
              Project Details
            </p>
            <p className="drop-shadow-md my-5 text-2xl font-bold text-slate-700">
              Know More About {nData[0].project}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-5 xs:gap-10 mt-10">
            <div>
              <img
                src={mainImg ? mainImg : nData[0].img[0]}
                className="rounded-xl"
                alt=""
              />
              {nData[0].img.length > 1 ? (
                <div className="flex gap-5 justify-center mt-5">
                  {nData[0].img.slice(0, 4).map((item, index) => {
                    return (
                      <img
                        key={index}
                        src={item}
                        className="w-1/5 rounded-sm"
                        alt=""
                        onClick={(e) => setMainImg(e.target.src)}
                      />
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              {nData.map((item, index) => {
                return (
                  <div key={index} className="grid grid-cols-4 gap-5">
                    <div className="font-medium">Project</div>
                    <div className="col-span-3">: {item.project}</div>
                    <div className="font-medium">Project Details</div>
                    <div className="col-span-3">: {item.sortDesc}</div>
                    <div></div>
                    <div className="lg:col-span-3 xs:col-span-4 flex gap-5">
                      <a
                        href={`//${item.preview}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="flex items-center px-2 mt-4">
                          <BsFillGrid1X2Fill className="mr-2" />
                          Live Preview
                        </button>
                      </a>
                      <a href={item.source} target="_blank" rel="noreferrer">
                        <button className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white flex items-center px-2 mt-4">
                          <BsFileEarmarkCodeFill className="mr-2" />
                          Source Code
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-slate-100 mt-10 p-5 rounded-lg overflow-x-scroll">
            <p className="drop-shadow-md text-center text-xl font-medium text-cyan-500">
              ReadMe.
            </p>
            {nData[0].readme.map((item, index) => {
              return (
                <div key={index}>
                  <div className="grid lg:grid-cols-4 xs:grid-cols-1">
                    <p className="col-span-1 my-5 font-medium">
                      {item.heading}
                    </p>
                    <p className="col-span-3 my-5">{item.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCard;
