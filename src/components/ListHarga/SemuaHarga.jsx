//src/components/ListHarga
import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import BoxList from "./BoxList.jsx";
import { InternetOnly, InternetTv, InternetTvPhone } from "@/services/Datas.js";

const SemuaHarga = () => {
  const allPackages = [...InternetOnly, ...InternetTv, ...InternetTvPhone];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container my-5">
      <div className="mt-16 w-full mx-auto text-center">
        <h1 className="font-bold text-2xl sm:text-3xl">
          Pilihan Paket IndiHome
        </h1>
        <div className="border-t-2 border-slate-500 my-8">
          <h1 className="font-bold mt-3 sm:mt-5 sm:text-3xl text-2xl text-rose-600">
            indiHome-Area
          </h1>
          <p className="text-md sm:text-xl font-semibold p-3 sm:px-8">IndiHome menghadirkan berbagai paket promo menarik untuk memenuhi kebutuhan internet Anda. Paket-paket ini dirancang untuk memberikan pengalaman internet yang cepat, stabil, dan terjangkau. Namun, perlu diingat bahwa tidak semua paket promo tersedia di setiap wilayah. Oleh karena itu, penting untuk memeriksa ketersediaan paket di daerah Anda.</p>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <PulseLoader color="#e11d48" size={15} />
        </div>
      ) : (
        <div className="sm:grid sm:grid-cols-2 gap-3">
          {allPackages.map((pkg) => (
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
export default SemuaHarga;
