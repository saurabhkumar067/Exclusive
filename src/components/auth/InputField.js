import React from "react";

function InputField({type = "text", placeholder, onChange, value, name}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-b bg-transparent placeholder:text-base border-gray-500 my-4 outline-none"
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}

export default InputField;
