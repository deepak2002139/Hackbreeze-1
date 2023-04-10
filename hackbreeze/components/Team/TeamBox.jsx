import React from "react";

const TeamBox = ({ title, children }) => {
  return (
    <div className="rounded-lg shadow-md hover:scale-105 transition-all">
      <div className="bg-[#C85C8E] py-2 px-4 rounded-t-lg">{title}</div>
      <div className="bg-[#FEE7E7] px-4 py-2">{children}</div>
    </div>
  );
};

export default TeamBox;
