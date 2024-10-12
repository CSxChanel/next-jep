import React, { useState, useEffect } from "react";
import BoxPromo from "@/components/ListHarga/BoxPromo.jsx";
import { HargaPromo } from "@/services/Datas.js";
import { PulseLoader } from "react-spinners";
import Button from "../Button";

const InternetPromo = ({ title, path, onClick, buttonLabel }) => {
  const promo = [...HargaPromo];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container my-5">
      <div className="mt-10 w-full mx-auto text-center">
        {loading ? (
          <div className="flex justify-center items-center h-10">
            <PulseLoader color="#e11d48" size={15} />
          </div>
        ) : (
          <>
            <h1 className="font-bold text-2xl sm:text-3xl">
              Pilihan Paket IndiHome
            </h1>
            <p className="font-semibold text-md sm:text-xl p-3 sm:px-8">
              {title} menawarkan berbagai paket promo menarik yang dirancang
              untuk memenuhi kebutuhan internet Anda dengan harga yang lebih
              terjangkau. Dengan paket-paket promo ini, Anda dapat menikmati
              layanan internet cepat, stabil, dan berkualitas tinggi dari {path}
              .
            </p>
            <div className="border-t-2 border-slate-300 my-8">
              <h1 className="font-bold text-2xl sm:text-3xl sm:mt-5 mt-3 text-rose-600">
                Paket 1P (Internet Only)
              </h1>
            </div>
          </>
        )}
      </div>
      {!loading && (
        <div className="grid sm:grid-cols-3 gap-3">
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
