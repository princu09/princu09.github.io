import React from "react";
import { Portfolio } from "../../assets";
import { MdDoubleArrow } from "react-icons/md";
import { Cv } from "../../assets";

const About = () => {
  return (
    <div className="my-10 lg:px-32 xs:px-5">
      <div className="relative h-screen grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-10 justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={Portfolio} className="w-10/12" alt="" />
        </div>
        <div className="flex justify-center flex-col">
          <p className="text-3xl font-medium text-cyan-500">
            Hello, I am Prince K. Patel
          </p>
          <p className="my-5 font-medium text-gray-500 text-sm">
            Over 3+ years of IT experience which includes 1+ years of Extensive
            experience as a React JS Developer and 2 years of Experience as a
            UI/UX Developer and Python Django Developer
          </p>
          <div className="grid grid-cols-3 gap-5 w-full">
            <p className="font-bold">Name </p>
            <p className="font-medium col-span-2">: Prince Patel</p>
            <p className="font-bold">Age </p>
            <p className="font-medium col-span-2">
              : {new Date().getFullYear() - 2002} Years
            </p>
            <p className="font-bold">Address </p>
            <p className="font-medium col-span-2">
              : Ahmedabad , Gujarat , India.
            </p>
            <p className="font-bold">Mobile </p>
            <p className="font-medium col-span-2">
              : <a href="tel:+91 90337 17372"> 90337 17372</a>
            </p>
            <p className="font-bold">Email </p>
            <p className="font-medium col-span-2">
              :{" "}
              <a href="mailto:pri2232@outlook" target="_blank" rel="noreferrer">
                pri2232@outlook.com
              </a>
            </p>
            <a href={Cv} download>
              <button className="w-40">Download CV</button>
            </a>
          </div>
        </div>
      </div>
      <div className="skill flex justify-center items-center flex-col xs:mt-10 lg:mt-0">
        <p className="text-center drop-shadow-md text-2xl font-medium text-cyan-500">
          Professional Summary
        </p>
        <div className="font-medium lg:w-10/12 xs:w-full mt-5">
          <p className="grid grid-flow-col gap-3 items-center">
            <MdDoubleArrow />
            Extensive experience in developing web pages using HTML5, CSS3,
            JavaScript, React JS, Redux, JQuery, JSON, Node.js, Ajax, Bootstrap,
            Tailwind CSS.
          </p>
          <p className="grid grid-flow-col gap-3 items-center">
            <MdDoubleArrow />
            Some Experienced in MERN stack development Mongo dB, Express, Node ,
            React. Experience with front-end development with back-end system
            integration.
          </p>
          <p className="grid grid-flow-col gap-3 items-center">
            <MdDoubleArrow />
            Involved in writing application level code to interact with APIs,
            RESTful Web Services using AJAX, JSON, Redux, Context API, Fetch
            API.
          </p>
          <p className="grid grid-flow-col gap-3 items-center">
            <MdDoubleArrow />
            Experience in Version Control tools like GIT , Github , GitLab. •
            Expertise in using IDE tools such as Notepad ++, Sublime Text
            Editor, IntelliJ IDEA, PyCharm, VsCode.
          </p>
        </div>
      </div>
      <div className="skill flex justify-center items-center flex-col my-10 mt-28">
        <p className="text-center drop-shadow-md text-2xl font-medium text-cyan-500">
          Technologies Known
        </p>
        <div className="font-medium lg:w-10/12 xs:w-full mt-5 grid lg:grid-cols-4 grid-cols-2 gap-5">
          <p className="font-bold">Web Technologies</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : HTML5, CSS3, JavaScript, Ajax, jQuery, Wordpress, JSON,
            Bootstrap4/5, ReactJS, Express JS, Node.js, Github.
          </p>
          <p className="font-bold">Development Tools</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : Vs Code, Notepad++, Sublime, Atom, Brackets.
          </p>
          <p className="font-bold">Debuggin Tools</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : Chrome Developer Tools, Reactjs Developer Tool.
          </p>
          <p className="font-bold">Frameworks</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : ReactJs, NodeJs, Python Django.
          </p>
          <p className="font-bold">Platforms</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : Windows 7/8/10, Linux, Machintosh Operating System. Database :
            MongoDB, Sqlite3.
          </p>
          <p className="font-bold">Front End Tools</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : Adobe Photoshop cs6 , Figma.
          </p>
          <p className="font-bold">Programming Languages</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : Python, MySQL, PHP.
          </p>
          <p className="font-bold">Payment Gateway</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : Stripe, Paytm Payment Gateway, Razorpay.
          </p>
          <p className="font-bold">Online Backend</p>
          <p className="font-medium col-span-3 lg:border-0 xs:border-b xs:pb-5">
            : Sanity.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
