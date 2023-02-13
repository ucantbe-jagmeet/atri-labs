import React from "react";
import { AiFillStar } from "react-icons/ai";
import Img1 from "./images/img1.jpeg";
import Img2 from "./images/img2.jpeg";
import Img3 from "./images/img3.jpeg";
import Img4 from "./images/img4.jpeg";
const data = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Contact",
  },
  {
    id: 3,
    title: "Blog Post",
  },
  {
    id: 4,
    title: "Blog",
  },
  {
    id: 5,
    title: "Menu",
  },
  {
    id: 6,
    title: "About",
  },
  {
    id: 7,
    title: "Delivery",
  },
];
import Logo from "./images/logo.svg";
const index = () => {
  return (
    <>
      <section className="h-[65vh] flex justify-evenly mt-20 ">
        <article className="w-[35vw] ">
          <img src={Logo} alt="" />
          <p className="text-gray-500 my-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum.
          </p>
          <div className="flex text-[#FF7629] text-4xl">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </article>
        <div className="flex justify-center ">
          <div>
            <h1 className="text-xl font-semibold mb-7 mr-12 tracking-wider">
              Pages
            </h1>
            {data.map((links) => {
              const { id, title } = links;

              return (
                <ul key={id}>
                  <li className="mb-2">
                    <a href="#">{title}</a>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="">
            <h1 className="text-xl font-semibold mb-7 tracking-wider">
              Utility
            </h1>
            {data.map((links) => {
              const { id, title } = links;

              return (
                <ul key={id}>
                  <li className="mb-2">
                    <a href="#">{title}</a>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="mb-7 text-xl font-semibold">Follow us on Instagram</h1>
          <div className="card grid grid-cols-2 gap-5">
            <img src={Img1} alt="" className="h-[18vh] rounded-3xl" />
            <img src={Img2} alt="" className="h-[18vh] rounded-3xl" />
            <img src={Img3} alt="" className="h-[18vh] rounded-3xl" />
            <img src={Img4} alt="" className="h-[18vh] rounded-3xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
