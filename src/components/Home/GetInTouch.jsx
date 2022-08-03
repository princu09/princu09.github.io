import React from "react";
import {
  BsEnvelope,
  BsPhoneVibrate,
  BsPinMap,
} from "react-icons/bs";

const GetInTouch = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center lg:px-32 px-5 bg-slate-100 lg:py-20 py-10">
        <div className="text-center">
          <p className="drop-shadow-md text-2xl font-medium text-cyan-500">
            Get in Touch
          </p>
          <p className="drop-shadow-md my-5 lg:text-4xl text-3xl font-bold text-slate-700">
            Any Questions? Feel Free to Contact
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 justify-center items-center">
          <div className="bg-orange-100 rounded-lg py-10 my-10">
            <div className="flex items-center justify-start p-5 drop-shadow-md">
              <div className="bg-white w-14 h-14 mx-5 rounded-full flex justify-center items-center">
                <BsPinMap className="text-cyan-500 text-3xl" />
              </div>
              <div className="">
                <p className="text-md text-black font-bold">Address :</p>
                <p className="text-lg text-slate-600">Motera , Ahmedabad ,</p>
                <p className="text-lg text-slate-600">Gujarat , India.</p>
              </div>
            </div>
            <div className="flex items-center justify-start p-5 drop-shadow-md">
              <div className="bg-white w-14 h-14 mx-5 rounded-full flex justify-center items-center">
                <BsEnvelope className="text-cyan-500 text-3xl" />
              </div>
              <div className="">
                <p className="text-md text-black font-bold">Email :</p>
                <a
                  href="mailto:NorthFoxGroup@hotmail.com"
                  className="text-lg text-slate-600"
                >
                  pri2232@outlook.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-start p-5 drop-shadow-md">
              <div className="bg-white w-14 h-14 mx-5 rounded-full flex justify-center items-center">
                <BsPhoneVibrate className="text-cyan-500 text-3xl" />
              </div>
              <div className="">
                <p className="text-md text-black font-bold">Phone :</p>
                <a href="tel:+919033717372" className="text-lg text-slate-600">
                  +91 9033 71 7372
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <form action="" method="" className="drop-shadow-md">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <label className="block">
                  <span className="block text-md font-medium text-slate-700 mb-3">
                    Name
                  </span>
                  <input type="text" className="w-full h-10 px-4 rounded-md" />
                </label>
                <label className="block">
                  <span className="block text-md font-medium text-slate-700 mb-3">
                    Email
                  </span>
                  <input
                    type="email"
                    className="w-full h-10 px-4 rounded-md peer"
                  />
                  <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                    Please provide a valid email address.
                  </p>
                </label>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <label className="block">
                  <span className="block text-md font-medium text-slate-700 mb-3">
                    Phone
                  </span>
                  <input
                    type="number"
                    className="w-full h-10 px-4 rounded-md peer"
                  />
                </label>
                <label className="block">
                  <span className="block text-md font-medium text-slate-700 mb-3">
                    Subject
                  </span>
                  <input
                    type="text"
                    className="w-full h-10 px-4 rounded-md peer"
                  />
                </label>
              </div>
              <div className="mt-5">
                <label className="block">
                  <span className="block text-md font-medium text-slate-700 mb-3">
                    Message
                  </span>
                  <textarea className="w-full py-2 px-4 rounded-md h-20" />
                </label>
              </div>
              <button className="rounded-md mt-5">Contact</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
