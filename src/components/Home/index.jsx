import React from "react";
import Img from "./images/burger.jpeg";
import Site1 from "./images/site1.svg";
import Site2 from "./images/site2.svg";
import Site3 from "./images/site3.svg";
import Site4 from "./images/site4.svg";

const index = () => {
  return (
    <>
      <section className="h-[64vh] flex justify-center ">
        <article className=" w-[70vw]  pl-36 my-auto">
          <h1 className="text-[3.3rem] font-bold mb-3 leading-tight ">
            The best place to <br />
            <span className="text-[#FF7629]">eat burgers in LA.</span>
          </h1>
          <p className="text-[#696969] w-[70%] text-lg  mb-5 ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum eget non vivamus volutpat odio
            cras vestibulum purus aliquam.
          </p>
          <div className="flex ">
            <button className="border-2 px-5 py-2 rounded-full font-semibold bg-[#FF7629] text-white mr-3 border-none">
              Reservate
            </button>
            <button className="border-2 px-5 py-2 rounded-full font-semibold  ml-4 ">
              Order online
            </button>
          </div>
        </article>
        <div className="w-[32%] bg-[#FF7629] flex justify-center items-center">
          <img
            src={Img}
            alt=""
            className=" rounded-xl -translate-x-56 aspect-square h-[52vh]"
          />
        </div>
      </section>
      <article className="h-[24vh] flex justify-center items-center flex-col  font-semibold pt-5  ">
        <h1 className="text-2xl mb-3 ">Order from your favourite app today!</h1>
        <div className="flex">
          <img src={Site1} alt="" className="mx-12 scale-105 " />
          <img src={Site2} alt="" className="mx-12 scale-105 " />
          <img src={Site3} alt="" className="mx-12 scale-105 " />
          <img src={Site4} alt="" className="mx-12 scale-105 " />
        </div>
      </article>
    </>
  );
};

export default index;
