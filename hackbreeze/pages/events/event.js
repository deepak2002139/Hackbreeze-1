import React from "react";
import { FaGreaterThan } from "react-icons/fa";

export default function Event() {
  return (
    <>
      {/* //Your past Terms */}
      <div className="h-screen bg-white-200 p-16 flex flex-col md:flex-row w-full">
        <div className="flex flex-col w-1/2">
          <div className="bg-pink-100  text-white text-center mt-11 overflow-hidden text-5xl py-4 pt-px-[169px] m-4 max-w-fit rounded-xl h-40">
            <div className="bg-pink-600 -m-4  rounded-xl">
              <p className="bg-white-300 text-xl">Your past Teams</p>
            </div>
            <div className="flex flex-row space-x-0 m-4 ">
              <div class="flex m-8 -space-x-4">
                <div class=" w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                  AS
                </div>
                <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                  SA
                </div>
                <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                  MA
                </div>
                <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                  HY
                </div>
                <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                  AS
                </div>
                <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                  DS
                </div>
                <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                  AR
                </div>
                <a
                  class="flex items-center justify-center w-14 h-14 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                >
                  +99
                </a>
              </div>
              <a className="m-12 px-10">
                <FaGreaterThan className="text-black  text-xl rotate-90 ml-36" />
              </a>
            </div>
          </div>
          {/* Friends with similar interest */}
          <div className="bg-pink-100 flex-1 text-white text-center overflow-hidden text-5xl m-3 py-4  rounded-lg ">
            <div className="bg-pink-600 -m-4   rounded-xl">
              <p className="bg-white-300 text-xl">
                Friends with similar interest
              </p>
            </div>

            <div className="flex flex-row overflow-auto  m-2">
              <div className="text-xl text-bold text-black py-5 flex m-3 overflow-auto">
                <div className="flex flex-row m-4 ">
                  <div class="flex m-2">
                    <ol className=" text-black list-decimal">
                      <li className="px-10">
                        <div class=" w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                          AS
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <p className="m-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, at.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Join other teams */}
        <div className="flex flex-col">
          <div className="bg-pink-100 flex-1 text-white text-center overflow-hidden text-5xl mb-2 m-2 mt-11 py-4 rounded-lg ">
            <div className="bg-pink-600 -m-4 rounded-xl">
              <p className="bg-white-300 text-xl">Join other teams</p>
            </div>
            <div className="text-xl text-bold text-black py-5 flex m-3 overflow-auto">
              <p>Team ABC</p>
              <div className="flex flex-row space-x-0 m-4 ">
                <div class="flex m-2  -space-x-4">
                  <div class=" w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                    AS
                  </div>
                  <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                    SA
                  </div>
                  <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                    MA
                  </div>
                  <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                    HY
                  </div>
                  <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                    AS
                  </div>
                  <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                    DS
                  </div>
                  <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                    AR
                  </div>
                  <a
                    class="flex items-center justify-center w-14 h-14 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                    href="#"
                  >
                    +99
                  </a>
                </div>
              </div>

              <button className="bg-purple-700 rounded-full m-8 w-24 h-10">
                Join
              </button>
            </div>
          </div>
          {/* People with similar ideas */}
          <div className="bg-pink-100 text-white overflow-hidden text-center text-5xl py-4 w-[679px] h-40 m-2.5 rounded-lg ">
            <div className="bg-pink-600 -m-4 rounded-xl">
              <p className="bg-white-300 text-xl">People with similar ideas</p>
            </div>

            <div class="flex m-14 space-x-4">
              <div class=" w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                AS
              </div>

              <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                SA
              </div>
              <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                MA
              </div>
              <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                HY
              </div>
              <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                AS
              </div>
              <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                DS
              </div>
              <div class="w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                AR
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
