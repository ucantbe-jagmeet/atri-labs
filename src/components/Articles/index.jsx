import React from "react";
import Img1 from "./images/img1.jpeg";
import Img2 from "./images/img2.jpeg";
import Img3 from "./images/img3.jpeg";
import Img4 from "./images/img4.jpeg";
import Img5 from "./images/img5.jpeg";

const data = [
  {
    id: 1,
    avatar: Img2,
  },
  {
    id: 2,
    avatar: Img3,
  },
  {
    id: 3,
    avatar: Img4,
  },
  {
    id: 4,
    avatar: Img5,
  },
];
const index = () => {
  return (
    <>
      <section className="h-[120vh] bg-[#FFF9F3]">
        <div className="h-16 flex justify-between items-center py-10">
          <h1 className="text-3xl font-semibold ml-24">Our articles</h1>
          <button className="border-2 px-5  py-2 rounded-full  mr-20 bg-white border-none">
            Browse our articles
          </button>
        </div>
        <articles className="grid grid-cols-2 ml-24 mt-5">
          <div className="">
            <div className="h-[95vh] w-[40vw] rounded-3xl flex  flex-col bg-white">
              <img
                src={Img1}
                alt=""
                className="h-[68vh] w-[40vw] rounded-tl-3xl rounded-tr-3xl"
              />
              <p className="text-gray-500 ml-6 my-4">September 1, 2022</p>
              <h1 className="text-[28px] font-semibold ml-6 my-2">
                The secret trick to prepare a perfect burger
              </h1>
              <p className="text-gray-500 ml-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elitilmim
                semper adipisc
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {data.map((links) => {
              const { id, avatar } = links;
              return (
                <div
                  key={id}
                  className="h-[42vh] w-[18vw] rounded-3xl flex  flex-col bg-white"
                >
                  <img
                    src={avatar}
                    alt=""
                    className="h-[28vh] w-[18vw] rounded-tl-3xl rounded-tr-3xl"
                  />
                  <p className="text-gray-500 ml-6 my-2">September 1, 2022</p>
                  <h1 className="text-md font-semibold ml-6">
                    The secret trick to prepare a perfect burger
                  </h1>
                </div>
              );
            })}
          </div>
        </articles>
      </section>
    </>
  );
};

export default index;
