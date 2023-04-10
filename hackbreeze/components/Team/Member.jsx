import React from "react";

const Member = ({ name = "Member1", description = "Tech enthusiast" }) => {
  return (
    <div className="py-4 flex items-center">
      <div className="flex-1 flex items-center">
        <div className="w-12 h-12 rounded-full border-dashed border-2 bg-white flex items-center justify-center">
          O
        </div>
        <div className="flex flex-col">
          <div className="ml-4">{name}</div>
          <div className="ml-4">{description}</div>
        </div>
      </div>

      <button className="bg-[#7B2869] rounded-lg text-white hover:scale-105 transition-all py-1 px-4">
        View
      </button>
    </div>
  );
};

export default Member;
