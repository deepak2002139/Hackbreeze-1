import React from "react";

const LeaderboardCard = (props) => {
  return (
    <div className="bg-[#FFEDED] h-[65px] w-[270px] flex">
      <div className="font-poppins text-xl mx-[7px] my-[15px]">
        <h1>{props.id}</h1>
      </div>
      <div>
        <img
          src="{props.img}"
          className="rounded-full border-2 border-black  h-12 w-12 my-[5px] mx-[5px]"
        ></img>
      </div>
      <div>
        <h1 className="font-poppins my-[17px] mx-[7px]">{props.name}</h1>
      </div>
    </div>
  );
};

export default LeaderboardCard;
