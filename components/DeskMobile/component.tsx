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
        </div>
        <div className="cursor-default flex justify-between items-center">
          <p className="pr-6 text-[16px]">{isBooked ? bookedBy : "Empty"}</p>
          <button
            disabled={isBooked}
            onClick={() => console.log(name)}
            className="bg-primary text-[16px] text-white px-10 py-1 rounded-sm active:scale-95 transition-all disabled:bg-gray-300"
          >
            BOOK
          </button>
        </div>
      </div>
    </div>
  );
};
