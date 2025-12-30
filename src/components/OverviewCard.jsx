import React from "react";

function OverviewCard({icon,heading, description, classBorder}) {
  return (
    <div className="">
      <div  className={`py-6 md:py-10 flex flex-col lg:flex-row gap-2 lg:gap-10 h-full ${classBorder} mb-3`}>
        <div className="">
          <img
            src={icon}
            alt="calendar icon"
            className="w-16 h-w-16"
          />
        </div>
        <h3 className="text-lg leading-8 font-manrope md:text-[28px] lg:w-[40%] font-medium">
          {heading}
        </h3>
        <p className="text-sm lg:w-[50%]  text-white md:text-xl font-manrope">
          {description}
        </p>
      </div>
    </div>
  );
}

export default OverviewCard;
