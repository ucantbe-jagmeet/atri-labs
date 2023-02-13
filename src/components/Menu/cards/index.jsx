import React from "react";
import Img1 from "./images/img1.svg";
import Img2 from "./images/img2.svg";
import Img3 from "./images/img3.svg";
import Img4 from "./images/img4.svg";

const Data = [
  {
    id: 1,
    avatar: Img1,
    title: "Breakfast",
    para: "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quamdiam",
  },
  {
    id: 2,
    avatar: Img2,
    title: "Main Dishes",
    para: "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quamdiam",
  },
  {
    id: 3,
    avatar: Img3,
    title: "Drinks",
    para: "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quamdiam",
  },
  {
    id: 4,
    avatar: Img4,
    title: "Breakfast",
    para: "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quamdiam",
  },
];

const index = () => {
  return (
    <>
      <div className="flex">
        {Data.map((links) => {
          const { id, avatar, title, para } = links;
          return (
            <>
              <div
                key={id}
                className="flex justify-center items-center flex-col w-[15rem] h-[25rem] border-2 border-gray-300 rounded-xl mx-4"
              >
                <img src={avatar} alt="" />
                <h1 className="py-5 font-semibold text-lg tracking-wide">
                  {title}
                </h1>

                <p className="px-8 break-words pb-5 text-gray-500 font-semibold ">
                  {para}
                </p>
                <a href="#" className="text-[#FF7629] text-lg">
                  Explore Menu
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default index;
