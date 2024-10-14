//src/components/ListHarga/InternetTvPhone
import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import BoxList from "./BoxList.jsx";
import { InternetTvPhone } from "@/services/Datas.js";

const InetTvPhone = () => {
  const inetTvPhone = [...InternetTvPhone];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="my-5 mr-5">
      <div className="mt-16 w-full mx-auto text-center">
        <div className="border-t-2 border-slate-300 my-8">
          <h3 className="font-bold mt-3 sm:text-3xl sm:mt-5 text-2xl text-rose-600">
            Paket 3P (internet + Tv + Phone)
          </h3>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <PulseLoader color="#e11d48" size={15} />
        </div>
      ) : (
        <div className="flex space-x-6 ml-5 overflow-x-auto no-scrollbar scroll-smooth cursor-pointer md:grig md:grid-cols-3 md:gap-3 md:space-x-0">
          {inetTvPhone.map((pkg) => (
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
export default InetTvPhone;
