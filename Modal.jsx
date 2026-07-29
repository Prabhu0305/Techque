import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
       <button class="w-full mx-2 mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Order now
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-400 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <IoIosCloseCircleOutline />
                  </button>
                </div>
                {/*body*/}
                <div className="relative  p-6 mx-32 flex flex-col justify-center items-center">

                <SiTicktick size={48} color="green" />
                <p className="my-2">Your order has placed successfully!</p>
                <p>We will remind you before 20 minutes</p>
                <div className="flex">
                    <p className="text-3xl my-6">Your virtual queue ID is 69</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}