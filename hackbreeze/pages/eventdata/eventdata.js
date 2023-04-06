import Head from "next/head";
import Image from "next/image";
import { IconName, VscLocation, VscCalendar } from "react-icons/vsc";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className=" pl-32">
        <div className="h-screen bg-white-200 p-16 flex flex-col md:flex-row w-full">
          <div className="flex flex-col w-1/2">
            <div className="">
              <h1 className="font-bold text-center text-4xl m-6">EVENT NAME</h1>
            </div>
            <div className="bg-pink-100 flex-1 text-white text-center overflow-hidden text-5xl m-3 py-4  rounded-lg ">
              <div className="flex flex-row">
                <div className="pl-6">
                  <h1 className="font-bold text-black text-xl">
                    Organizer:
                    <span className="text-xl font-normal">Lorem</span>
                  </h1>
                </div>

                <div className="flex flex-col">
                  <a className="px-96">
                    <VscLocation className="text-black text-2xl" />
                    <VscCalendar className="text-black text-2xl" />
                  </a>
                </div>
              </div>

              <p className="text-black text-lg m-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, animi! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Voluptatum maiores, quae veniam officia
                blanditiis nihil ex saepe beatae mollitia ratione laudantium quo
                nulla?
              </p>
            </div>
            <div className="  pl-72 p-12">
              <button className="text-white bg-violet-400 w-20  rounded-lg text-center">
                Register
              </button>
            </div>
          </div>

          <div className="flex flex-col pl-12">
            <div className=" flex-1 text-white text-center overflow-hidden text-5xl mb-12  w-full  rounded-lg ">
              {/* image slider */}
              <div className=" w-full  m-auto py-16 px-4 relative group">
                <div
                  style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                  }}
                  className="w-full h-52 rounded-2xl bg-center bg-cover duration-100"
                ></div>
                {/* Left Arrow */}
                <div className="  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className="flex top-4 justify-center py-2">
                  {slides.map((slides, slideIndex) => (
                    <div
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      className="text-2xl cursor-pointer"
                    >
                      <RxDotFilled />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-pink-100  justify-center text-black font-bold overflow-hidden text-center text-5xl  py-6  w-96 h-40 m-1  rounded-lg ">
              <div className="-m-5">
                <p className="bg-white-300 text-xl">Past Events</p>
              </div>

              <div className="flex flex-row">
                <div className="m-6">
                  <select
                    id="events"
                    class="bg-gray-50 border border-gray-300 text-pink-900 text-sm rounded-lg  block  w-24 p-2  dark:bg-pink-700   dark:text-white"
                  >
                    <option selected>Filter</option>
                    <option value="US">web</option>
                    <option value="CA">dsa</option>
                    <option value="FR">cpp</option>
                    <option value="DE">web3</option>
                  </select>
                </div>
                <div className="m-6 pl-24">
                  <select
                    id="events"
                    class="bg-gray-50 border border-gray-300 text-pink-900 text-sm rounded-lg  block  w-24 p-2  dark:bg-pink-700   dark:text-white"
                  >
                    <option selected>Sort</option>
                    <option value="US">web</option>
                    <option value="CA">dsa</option>
                    <option value="FR">cpp</option>
                    <option value="DE">web3</option>
                  </select>
                </div>
              </div>

              <div className="-ml-52">
                <h1 className="text-black text-xl font-bold">Lorem, ipsum.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
