import React from "react";
import EventCards from "./EventCards";

const UpcomingEvents = () => {
  const data = [
    {
      id: 1,
      title: "Event-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
      date: "05-01-2022",
      time: "05:34 am",
    },
    {
      id: 2,
      title: "Event-2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
      date: "05-01-2022",
      time: "05:34 am",
    },
  ];

  return (
    <div className="flex flex-col w-80 h-100">
      <div className="flex bg-[#7B2869] rounded-tl-[30px] rounded-tr-[30px] h-[50px] w-[370px]">
        <h2 className="font-poppins text-white  text-[20px] font-bold pl-[86px] py-[8px]">
          Upcoming
        </h2>
        <h2 className="font-poppins text-white text-[20px] font-bold px-[10px] py-[8px]">
          Events
        </h2>
      </div>
      <div className=" pl-[20px] py-[9px] bg-[#FFEDED] rounded-bl-md rounded-br-md h-[310px] w-[370px] space-y-5 overflow-x-auto">
        {data.map((el) => (
          <EventCards
            key={el.id}
            title={el.title}
            description={el.description}
            date={el.date}
            time={el.time}
          ></EventCards>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
