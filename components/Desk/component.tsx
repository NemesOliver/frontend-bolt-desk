import React, { FC } from "react";

type Props = {
  name: string;
  isBooked: boolean;
  bookedBy: string;
};

export const Desk: FC<Props> = ({ name, isBooked, bookedBy }) => {
  return (
    <div className="relative group z-30">
      <div className=" cursor-pointer bg-background shadow-md hover:scale-[1.03] transition-transform rounded-sm flex justify-between items-center py-2 px-3 mb-2">
        <p className="cursor-pointer">{name}</p>
        <div className="flex items-center">
          <p className="text-[14px] cursor-pointer">
            {isBooked ? "Unavailble" : "Availble"}
          </p>
          {isBooked ? (
            <div className="w-[8px] h-[8px] bg-red-600 ml-3 rounded-full mt-[2px]"></div>
          ) : (
            <div className="w-[8px] h-[8px] bg-green-600 ml-3 rounded-full mt-[2px]"></div>
          )}
        </div>
        {/* Hidden submenu */}
        <div className="hidden absolute left-[280px] min-w-[332px] border scale-0 sm:flex justify-between bg-background rounded-sm shadow-xl py-2 px-4  group-hover:scale-100 transition-all duration-300 ease-in-out delay-75">
          <p className="pr-6">{isBooked ? bookedBy : "Empty"}</p>
          <button
            disabled={isBooked}
            onClick={() => console.log(name)}
            className="bg-primary text-[16px] text-white px-4 rounded-sm active:scale-95 transition-all disabled:bg-gray-300"
          >
            BOOK
          </button>
        </div>
      </div>
    </div>
  );
};
