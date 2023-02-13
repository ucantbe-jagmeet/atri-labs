import React from "react";
import Img from "./img.jpeg";
const index = () => {
  return (
    <>
      <div className="h-auto bg-[#FF7629] flex justify-center items-center">
        <div className="w-[45%] flex flex-col justify-center  pl-36">
          <h1 className="text-white text-4xl font-semibold">
            Taste the most delicious <br /> burger in Los Angeles, <br /> CA
          </h1>
          <p className="w-[55%] text-white my-10">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum. Order online{" "}
          </p>
          <div className="flex ">
            <button className="border-2 px-5  py-2 rounded-full font-semibold  mr-4 bg-white ">
              Order online
            </button>
            <button className="border-2 border-white tracking-wider px-5 py-2 rounded-full font-semibold bg-[#FF7629] text-white ml-3">
              Reservate
            </button>
          </div>
        </div>
        <div className="w-[55%]">
          <img src={Img} alt="" />
        </div>
      </div>
    </>
  );
};

export default index;
