//src/components/ListHarga/InternetOnly
import React, { useState, useEffect, useRef } from "react";
import BoxList from "./BoxList.jsx";
import { InternetOnly } from "@/services/Datas.js";
import { PulseLoader } from "react-spinners";

const InternetJitu = () => {
  const internetOnly = [...InternetOnly];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="my-5 mr-5">
      <div className="mt-16 w-full mx-auto text-center">
        {loading ? (
          <div className="flex justify-center items-center h-10">
            <PulseLoader color="#e11d48" size={15} />
          </div>
        ) : (
          <>
            <div className="border-t-2 border-slate-300 my-8">
              <h3 className="font-bold text-2xl sm:text-3xl sm:mt-5 mt-3 text-rose-600">
                Paket 1P (internet)
              </h3>
            </div>
          </>
        )}
      </div>
      {!loading && (
        <div
          className="flex space-x-6 ml-5 overflow-x-auto no-scrollbar scroll-smooth cursor-pointer md:grig md:grid-cols-3 md:gap-3 md:space-x-0"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {internetOnly.map((pkg) => (
            <BoxList
              key={pkg.id}
              mbps={pkg.mbps}
              type={pkg.type}
              title={pkg.title}
              price={pkg.price}
              benevit={pkg.benevit}
              benevit2={pkg.benevit2}
              benevit3={pkg.benevit3}
              benevit4={pkg.benevit4}
              benevit5={pkg.benevit5}
              syarat={pkg.syarat}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InternetJitu;
