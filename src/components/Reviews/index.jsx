import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Img from "./face1.jpg";
const index = () => {
  return (
    <>
      <section className="h-[100vh] flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold">What our clients say</h1>
        <p className=" w-[50vw] my-5 text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
          vitae velit bibendum elementum.
        </p>
        <section className="flex items-center">
          <FaArrowCircleLeft className="text-[#FF7629] text-6xl mr-10" />

          <article className="h-[40vh] w-[48vw] border-2 rounded-2xl flex justify-evenly px-14 py-5 flex-col">
            <div className="flex text-[#FF7629] text-4xl">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h1 className="text-xl font-semibold">
              "You must try these burgers"
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper
              adipiscing massa gravida nisi cras enim quis nibholm varius amet
              gravida ut facilisis neque egestas
            </p>
            <div className="flex">
              <img src={Img} alt="" className="h-14 w-14 rounded-[50%] mr-7" />
              <div>
                <h1>Matt Cannon</h1>
                <h2>San Diego, CA</h2>
              </div>
            </div>
          </article>
          <FaArrowCircleRight className="text-[#FF7629] text-6xl ml-10" />
        </section>

        <div className="flex mt-24">
          <button className="border-2 border-white tracking-wider px-5 py-2 rounded-full font-semibold bg-[#FF7629] text-white mr-3">
            Order Online
          </button>
          <button className="border-2 px-5  py-2 rounded-full font-semibold  ml-4 bg-white ">
            Book a table
          </button>
        </div>
      </section>
    </>
  );
};

export default index;
