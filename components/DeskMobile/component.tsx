import React, { FC } from "react";

type Props = {
  name: string;
  isBooked: boolean;
  bookedBy: string;
};

export const DeskMobile: FC<Props> = ({ name, isBooked, bookedBy }) => {
  return (
    <div className="relative group z-30 ">
      <div className=" bg-background shadow-md  rounded-sm  py-2 px-3 mb-2">
        <div className="flex justify-between items-center pb-4">
          <p>{name}</p>
          <div className="flex items-center">
            <p className="text-[14px] ">
              {isBooked ? "Unavailble" : "Availble"}
            </p>
            {isBooked ? (
              <div className="w-[8px] h-[8px] bg-red-600 ml-3 rounded-full mt-[2px]"></div>
            ) : (
              <div className="w-[8px] h-[8px] bg-green-600 ml-3 rounded-full mt-[2px]"></div>
            )}
          </div>
        </div>
        <div className="cursor-default flex justify-between items-center">
          <button
            disabled={isBooked}
            onClick={() => console.log(name)}
            className="bg-primary text-[12px] text-white px-10 py-1 rounded-sm hover:bg-primaryHover active:scale-95 transition-all duration-300 disabled:bg-gray-300"
          >
            BOOK
          </button>
          <p className="pr-6 text-[16px]">{isBooked ? bookedBy : "Empty"}</p>
        </div>
      </div>
    </div>
  );
};
