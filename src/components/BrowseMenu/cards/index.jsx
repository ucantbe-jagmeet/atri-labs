import React from "react";
import Img1 from "./images/img1.jpeg";
import Img2 from "./images/img2.jpeg";
import Img3 from "./images/img3.jpeg";
import Img4 from "./images/img4.jpeg";
import Img5 from "./images/img5.jpeg";
import Img6 from "./images/img6.jpeg";
import Img7 from "./images/img7.jpeg";
import Img8 from "./images/img8.jpeg";

const data = [
  {
    id: 1,
    avatar: Img1,
    cost: "$ 10.99 USD",
    title: "Classic Burger",
  },
  {
    id: 2,
    avatar: Img2,
    cost: "$ 6.99 USD",
    title: "Chocolate Milkshake",
  },
  {
    id: 3,
    avatar: Img3,
    cost: "$ 5.99 USD",
    title: "Classic Fries",
  },
  {
    id: 4,
    avatar: Img4,
    cost: "$ 8.99 USD",
    title: "Pancakes",
  },
  {
    id: 5,
    avatar: Img5,
    cost: "$ 3.99 USD",
    title: "Ice Cream",
  },
  {
    id: 6,
    avatar: Img6,
    cost: "$ 9.99 USD",
    title: "Chichken Burger",
  },
  {
    id: 7,
    avatar: Img7,
    cost: "$ 6.99 USD",
    title: "Egg Toast",
  },
  {
    id: 8,
    avatar: Img8,
    cost: "$ 1.99 USD",
    title: "Regular Soda",
  },
];

const index = () => {
  return (
    <>
      {data.map((links) => {
        const { id, avatar, cost, title } = links;

        return (
          <div
            key={id}
            className="h-[400px] w-[260px] flex justify-center flex-col items-center rounded-3xl mb-4"
          >
            <img src={avatar} alt="" className="rounded-3xl relative" />

            <h2 className=" absolutew-32 h-10 bg-white -translate-y-60 translate-x-14 py-2 px-5 rounded-2xl font-semibold">
              {cost}
            </h2>

            <h1 className="text-xl font-semibold -mt-6">{title}</h1>
            <p className="mx-2 text-gray-500">
              Lorem ipsum dolor sit amet dolor consectetur adipiscing elit
            </p>
          </div>
        );
      })}
    </>
  );
};

export default index;
