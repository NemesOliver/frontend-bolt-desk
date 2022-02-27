import { FC, useState } from "react";

export const Modal: FC = () => {
  const [open, setOpen] = useState(true);

  const closeModal = () => setOpen(false);

  return (
    <>
      {open && (
        <div
          onClick={closeModal}
          className="bg-backdrop absolute top-0 left-0 h-screen w-screen z-40 grid items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background max-w-lg mx-auto px-8 py-4 rounded-sm shadow-xl"
          >
            <h2 className="text-[24px]">Confirm booking</h2>
            <p className="my-4 text-[16px]">
              Are you sure you want to book a Desk 1 for Wednesday 21st of
              October?
            </p>
            <div className="float-right">
              <button className="mr-6 bg-green-700 rounded-sm py-1 px-3 text-[14px] text-white hover:bg-green-500 active:scale-95 transition-all duration-200">
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="bg-red-700 rounded-sm py-1 px-3 text-[14px] text-white hover:bg-red-500 active:scale-95 transition-all duration-200"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
