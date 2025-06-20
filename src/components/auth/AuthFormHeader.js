import React from "react";

function AuthFormHeader({title, subtitle}) {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-base mt-2">{subtitle}</p>
    </>
  );
}

export default AuthFormHeader;
