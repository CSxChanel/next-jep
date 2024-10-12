//src/components/Modals/OpenSyarat
import React, { useState, useEffect } from "react";

const OpenSyarat = ({ onClose, syarat }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300); // Durasi yang sama dengan transisi
    };

    return (
        <div
            className={`fixed z-20 inset-0 flex items-center justify-center left-5 right-5 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                className={`fixed top-20 right-0 h-full w-full backdrop-blur ${
                    isVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
            ></div>
            <div
                className={`bg-slate-200 bg-opacity-75 pt-4 border-2 border-rose-500 backdrop-blur rounded-lg overflow-hidden w-full max-w-4xl max-h-[70vh] transition-transform duration-300 ${
                    isVisible ? "scale-100" : "scale-90"
                }`}
            >
                <div className="overflow-y-scroll max-h-[50vh]">
                    <div className="mt-4 p-4">
	                        {syarat.map((fit, index) => (
                            <div key={index}>

                                <p>{fit}</p>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="bg-slate-300 px-4 py-3">
                    <button
                        onClick={handleClose}
                        type="button"
                        className="bg-rose-600 text-slate-100 font-bold border-2 justify-center w-full rounded-md px-4 py-2"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OpenSyarat;
