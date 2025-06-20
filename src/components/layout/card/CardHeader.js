import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function CardHeader({title, SalesCategory,buttons, time}) {
  return (
    <div className="mb-6">
      <h2 className="text-red-700 font-semibold">
        <span className="bg-red-700 p-3 rounded-sm mr-4"></span>{title}
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-end my-6 gap-20">
          <div className="text-4xl rubikFont">{SalesCategory}</div>

          {/* Live Timer */}
          {time}
        </div>
          {buttons}
       
      </div>
    </div>
  );
}

export default CardHeader;
