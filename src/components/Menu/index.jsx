import React from "react";
import Cards from "./cards";
const index = () => {
  return (
    <>
      <section className=" h-[100vh] flex justify-center items-center flex-col ">
        <div className="flex justify-start items-center flex-col">
          <h1 className="text-center text-2xl font-semibold mb-10">
            Browse our menu
          </h1>
          <Cards />
          <div className="flex mt-10 ">
            <button className="border-2 tracking-wider px-5 py-2 rounded-full font-semibold bg-[#FF7629] text-white mr-3 border-none">
              Order Online
            </button>
            <button className="border-2 px-5  py-2 rounded-full font-semibold  ml-4 ">
              Book a table
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
