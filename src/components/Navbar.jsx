import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { FaReact, FaInfoCircle } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [button, setButton] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full flex justify-between lg:px-32 px-10 py-3 border-b z-20 bg-white">
        <div className="">
          <p className="text-xl font-medium cursor-pointer">Prince Patel.</p>
        </div>
        {/* Laptop Navbar */}
        <div className="lg:flex items-center hidden">
          <ul className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : undefined
              }
            >
              <li>
                <FaHome className="mx-2" />
                Home
              </li>
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : undefined
              }
            >
              <li>
                <AiFillProject className="mx-2" />
                Portfolio
              </li>
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : undefined
              }
            >
              <li>
                <FaReact className="mx-2" />
                Work
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : undefined
              }
            >
              <li>
                <FaInfoCircle className="mx-2" />
                About
              </li>
            </NavLink>
          </ul>
        </div>

        {/* Mobile Navbar */}
        <button
          className="xs:block p-0 text-3xl absolute right-5 lg:hidden"
          onClick={() => setButton(!button)}
        >
          {!button ? <BiMenuAltRight /> : <TiTimes />}
        </button>
        <div className={`nav lg:hidden ${button ? "block" : "hidden"}`}>
          <div className="flex items-center">
            <ul className="flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : undefined
                }
                onClick={() => {
                  setButton(!button);
                }}
              >
                <li>
                  <FaHome className="mx-2" />
                  Home
                </li>
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : undefined
                }
                onClick={() => {
                  setButton(!button);
                }}
              >
                <li>
                  <AiFillProject className="mx-2" />
                  Portfolio
                </li>
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : undefined
                }
                onClick={() => {
                  setButton(!button);
                }}
              >
                <li>
                  <FaReact className="mx-2" />
                  Work
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : undefined
                }
                onClick={() => {
                  setButton(!button);
                }}
              >
                <li>
                  <FaInfoCircle className="mx-2" />
                  About
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
