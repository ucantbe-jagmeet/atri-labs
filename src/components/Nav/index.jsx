import React from "react";
import logo from "./images/logo.svg";
const index = () => {
  return (
    <>
      <nav className=" flex justify-around items-center h-[12vh] ">
        <div className="flex justify-center items-center">
          <img src={logo} />
          <ul className="flex justify-center items-center text-lg text-[#696969] font-semibold font-sans ml-5 tracking-wider">
            <li className="mx-4">
              <a href="">Home</a>
            </li>
            <li className="mx-4">
              <a href="">About</a>
            </li>
            <li className="mx-4">
              <a href="">Menu</a>
            </li>
            <li className="mx-4">
              <a href="">Pages</a>
            </li>
            <li className="mx-4">
              <a href="">Cart</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="border-2 px-5 py-2 rounded-full font-semibold mr-4 ">
            Order online
          </button>
          <button className="border-2 px-5 py-2 rounded-full font-semibold bg-[#FF7629] text-white ml-3 border-none">
            Reservate
          </button>
        </div>
      </nav>
    </>
  );
};

export default index;
