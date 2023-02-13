import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const index = () => {
  return (
    <>
      <section className="h-[100vh] flex justify-center items-center">
        <div className="w-[70vw] flex justify-center items-center">
          <div className=" w-[30rem] h-[19rem] bg-white rounded-3xl flex justify-center  flex-col  text-md">
            <h1 className=" text-3xl pb-3 font-semibold">
              {" "}
              Book your table now
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
              diam vitae velit bibendum elementum.
            </p>
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
        </div>
        <div className="w-[55vw] h-[100vh] bg-[#FF7629] flex justify-center items-center">
          <form
            action="#"
            className="h-[90vh] w-[30vw] border-2 rounded-3xl -translate-x-64"
          >
            <div className="user-details grid grid-col-2">
              <label className="input-box flex flex-col">
                <span>Name</span>
                <input type="text" placeholder="John Carter" required />
              </label>

              <label className="input-box flex flex-col">
                <span>Email</span>
                <input type="email" placeholder="example@gmail.com" required />
              </label>
              <label className="input-box flex flex-col">
                <span>Phone</span>
                <input type="number" placeholder="(123)456-789" required />
              </label>
              <label className="input-box flex flex-col">
                <span>Location</span>
                <input type="text" placeholder="Ex. Los Angeles" required />
              </label>
              <label className="input-box flex flex-col">
                <span>Date</span>
                <input type="date" placeholder="Enter your name" required />
              </label>
              <label className="input-box flex flex-col">
                <span>Schedule</span>
                <input type="text" placeholder="Ex 2:00 PM" required />
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default index;
