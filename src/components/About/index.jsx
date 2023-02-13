import React from "react";
import Img from "./images/img.jpeg";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const index = () => {
  return (
    <>
      <div className="h-screen bg-[#FFF9F3] flex jutify-center items-center">
        <section className="w-1/2 ml-28">
          <img
            src={Img}
            alt=""
            className=" w-[470px] h-[540px] rounded-3xl z-0 relative"
          />
          <div className=" w-[27rem] h-[19rem] bg-white rounded-3xl translate-x-40 -translate-y-56 z-50 absolute flex justify-center  flex-col pl-10 text-md">
            <h1 className=" text-2xl pb-3"> Come and Visit us</h1>
            <div className="flex items-center text-gray-500 ">
              <GoLocation className="text-[#FF7629] text-2xl" />
              <p className="ml-4 ">
                837 W. Marshall Lane <br />
                Marshalltown, IA <br />
                50158, Los Angeles
              </p>
            </div>
            <div className="flex text-gray-500 mt-3">
              <BsTelephone className="text-[#FF7629]  text-2xl" />
              <p className="ml-4 ">(414) 857 - 0107</p>
            </div>
            <div className="flex text-gray-500 mt-3 ">
              <HiOutlineMail className="text-[#FF7629] text-2xl" />
              <p className="ml-4">losangeles@restaurantex.com</p>
            </div>
          </div>
        </section>
        <section className="w-[35vw]">
          <h1 className="text-3xl font-semibold mb-7">About us</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum eget non vivamus volutpat odio
            cras vestibulum purus aliquam.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper odio egestas id pulvinar
            consectetur elit tortor non hac pellentesque lacus donec accumsan
            quisque ultricies adipiscing mauris tortor cras est eu accumsan
            mauris.
          </p>
          <div className="flex mt-10 ">
            <button className="border-2 px-5  py-2 rounded-full font-semibold  mr-4 bg-white ">
              About us
            </button>
            <button className="border-2 tracking-wider px-5 py-2 rounded-full font-semibold bg-[#FF7629] text-white ml-3 border-none">
              Join our team
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
