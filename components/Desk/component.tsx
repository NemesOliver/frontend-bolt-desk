import { FC, useContext } from "react";
import { Props } from "./props";
import { ModalContext } from "../../context";

export const Desk: FC<Props> = ({ name, isBooked, bookedBy }) => {
  const { triggerModal, bookedDate } = useContext(ModalContext);

  return (
    <div className="relative group z-30 ">
      <div className="cursor-pointer bg-background shadow-md hover:scale-[1.03] transition-transform rounded-sm flex justify-between items-center py-2 px-3 mb-2">
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
        {/* Hidden submenu - showed on Desktop*/}
        <div className="cursor-default hidden absolute left-[280px] min-w-[332px] border scale-0 sm:flex justify-between bg-background rounded-sm shadow-xl py-2 px-4  group-hover:scale-100 transition-all duration-300 ease-in-out delay-75">
          <button
            disabled={isBooked}
            onClick={() =>
              triggerModal(
                `Are you sure that you want to book ${name} on ${new Date(
                  bookedDate
                ).toDateString()}?`
              )
            }
            className="bg-primary text-[12px] text-white px-4 rounded-sm hover:bg-primaryHover active:scale-95 transition-all duration-300 disabled:bg-gray-300"
          >
            BOOK
          </button>
          <p>{isBooked ? bookedBy : "Empty"}</p>
        </div>
      </div>
    </div>
  );
};
