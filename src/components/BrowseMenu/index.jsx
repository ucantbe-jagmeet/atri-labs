import React from "react";
import Cards from "./cards";
const index = () => {
  return (
    <>
      <div className="h-auto flex justify-center items-center flex-col mt-36">
        <h1 className="text-[2.3rem] font-semibold text-center">
          Browse our menu
        </h1>
        <p className=" w-[45%] text-gray-500  mx-auto my-4 text-md">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
          vitae velit bibendum elementum.
        </p>
        <div className="grid grid-cols-4 grid-rows-2 gap-x-5">
          <Cards />
        </div>
        <div className="flex pb-32 ">
          <button className="border-2 tracking-wider px-5 py-2 rounded-full font-semibold bg-[#FF7629] text-white mr-3 border-none">
            Order Online
          </button>
          <button className="border-2 px-5  py-2 rounded-full font-semibold  ml-4 bg-white ">
            Book a table
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
