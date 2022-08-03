import React from "react";
import { Testi, Vector10, Vector9 } from "../../assets";
// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { reviews } from "../../assets/data";

const Testimonials = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="relative bg-slate-200">
      <img
        src={Vector10}
        className="opacity-25 w-96 absolute bottom-0"
        alt=""
      />
      <img src={Vector9} className="opacity-25 w-96 absolute right-0" alt="" />

      <div className="flex justify-center items-center h-full w-screen lg:px-32 px-5 flex-col lg:flex-row lg:py-10">
        <div className="w-1/2 flex justify-center items-center order-2 my-10">
          <img src={Testi} alt="" />
        </div>
        <div className="lg:w-1/2 w-full mt-10">
          <div className="">
            <p className="drop-shadow-md  text-2xl font-medium text-cyan-500">
              Testimonials
            </p>
            <p className="drop-shadow-md my-5 lg:text-4xl  text-3xl font-bold text-slate-700">
              Happy Clients Feedback
            </p>
          </div>
          <div className="w-full">
            <Swiper
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {reviews.map((item) => {
                return (
                  <SwiperSlide>
                    <div className="mt-10">
                      <p className="text-gray-400 text-lg xl:text-xl">
                        {item.review}
                      </p>
                      <p className="text-lg xl:text-2xl text-black font-medium mt-5">
                        ~ {item.name} | {item.postion}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className="prev"></div>
              <div className="next"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
