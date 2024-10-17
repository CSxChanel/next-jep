import React, { useState, useEffect, useRef } from "react";
import BoxPromo from "@/components/ListHarga/BoxPromo.jsx";
import { HargaPromo } from "@/services/Datas.js";
import { PulseLoader } from "react-spinners";
import Button from "../Button";

const InternetPromo = ({ onClick, buttonLabel }) => {
  const promo = [...HargaPromo];
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
      <div className="mt-10 w-full mx-auto text-center">
        {loading ? (
          <div className="flex justify-center items-center h-10">
            <PulseLoader color="#e11d48" size={15} />
          </div>
        ) : (
          <>
            <h4 className="font-bold text-2xl sm:text-3xl sm:mt-5 mt-3 text-rose-600">
              Paket 1P (Internet Only)
            </h4>
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
          {promo.map((pkg) => (
            <BoxPromo
              key={pkg.id}
              mbps={pkg.mbps}
              type={pkg.type}
              title={pkg.title}
              price={pkg.price}
              benevit={pkg.benevit}
              benevit2={pkg.benevit2}
              benevit3={pkg.benevit3}
              syarat={pkg.syarat}
            />
          ))}
        </div>
      )}
      <Button onClick={onClick}>{buttonLabel}</Button>
    </div>
  );
};

export default InternetPromo;
