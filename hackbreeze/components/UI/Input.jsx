import React from "react";

export const Input = ({
  type,
  width,
  placeholder,
  onChange,
  value,
  name,
  onBlur,
}) => {
  return (
    <div>
      <input
        type={type ? type : "text"}
        name={name}
        className={`w-${width} bg-[#FFEDED] rounded-md my-2 p-4 text-center outline-none border-none`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
