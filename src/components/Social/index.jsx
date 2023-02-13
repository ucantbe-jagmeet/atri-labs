import React from "react";
import Img1 from "./images/img1.jpeg";
import Img2 from "./images/img2.jpeg";
import Img3 from "./images/img3.jpeg";
import Img4 from "./images/img4.jpeg";
import Img5 from "./images/img5.jpeg";
import Img6 from "./images/img6.jpeg";
const index = () => {
  return (
    <section className="h-[80vh] bg-[#FFF9F3] flex justify-evenly items-center flex-col">
      <div className="flex">
        <h1 className="text-4xl font-semibold tracking-wider mr-96">
          Follow us on Instagram
        </h1>
        <button className="border-2 border-white tracking-wider px-5 py-4 rounded-full ml-96 font-semibold bg-[#FF7629] text-white mr-3">
          Follow us
        </button>
      </div>
      <div className=" flex justify-center ">
        <div className="card ">
          <img src={Img1} alt="" className="h-[40vh] rounded-3xl" />
        </div>
        <div className="card">
          <img src={Img2} alt="" className="h-[40vh] rounded-3xl mx-10" />
        </div>
        <div className="card grid grid-cols-2 gap-7">
          <img src={Img3} alt="" className="h-[16vh] rounded-3xl" />
          <img src={Img4} alt="" className="h-[16vh] rounded-3xl" />
          <img src={Img5} alt="" className="h-[16vh] rounded-3xl" />
          <img src={Img6} alt="" className="h-[16vh] rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default index;
