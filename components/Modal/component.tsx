import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { AuthContext, DateContext, ModalContext } from "../../context";
import { backend } from "../../libs";

export const Modal: FC<any> = () => {
  const { open, onClose, message, desk } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const { date } = useContext(DateContext);
  const router = useRouter();

  // Isolate me later
  const bookDesk = async () => {
    const userRef = getCookie("user");

    try {
      await backend.post("/bookings/create", {
        date,
        booked_by: user.name,
        userRef,
        deskRef: desk,
      });
      onClose();
      router.push("/");
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="bg-backdrop absolute top-0 left-0 h-screen w-screen z-40 grid items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Stop event bubbling
            className="bg-background max-w-lg mx-auto px-8 py-4 rounded-sm shadow-xl"
          >
            <h2 className="text-[24px]">Confirm booking</h2>
            <p className="my-4 text-[16px]">{message}</p>
            <div className="float-right">
              <button
                onClick={bookDesk}
                className="mr-6 bg-green-700 rounded-sm py-1 px-3 text-[14px] text-white hover:bg-green-500 active:scale-95 transition-all duration-200"
              >
                Confirm
              </button>
              <button
                onClick={onClose}
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
