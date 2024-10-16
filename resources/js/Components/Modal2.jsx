import React, { useEffect, useRef, useState } from "react";

const Modal2 = ({ children, show,title }) => {
    const [modalOpen, setModalOpen] = useState(show);

    const trigger = useRef(null);
    const modal = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!modal.current) return;
            if (
                !show ||
                modal.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setModalOpen(show);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            setModalOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <>
            <div className="container mx-auto py-20">
                <button
                    ref={trigger}
                    onClick={() => setModalOpen(true)}
                    className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
                >
                    Open Modal
                </button>
                <div
                    className={`fixed left-0 top-0 flex  min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
                        modalOpen ? "block" : "hidden"
                    }`}
                >
                    <div
                        ref={modal}
                        onFocus={() => setModalOpen(true)}
                        onBlur={() => setModalOpen(false)}
                        className="w-full h-[700px]  rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
                    >
                      <h2 className="text-3xl font-bold mb-2">
                      {title}
                      </h2>
                        <div className="h-[500px]   overflow-auto my-5">
                            {children}
                        </div>

                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-1/2 px-3">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                                >
                                    Cancel
                                </button>
                            </div>
                            <div className="w-1/2 px-3">
                                <button className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                                    <a href={`/#`}> View Details </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal2;
