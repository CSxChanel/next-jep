//src/components/ListHarga/InternetTv
import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
//BoxList.jsx
import BoxList from "./BoxList.jsx";
import { InternetTv } from "@/services/Datas.js";

const JituTv = () => {
    const internetTv = [...InternetTv];
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
                <div className="border-t-2 border-slate-300 my-8">
                    <h1 className="font-bold mt-3 text-2xl sm:text-3xl sm:mt-5 text-rose-600">
                        Paket 2P (internet + Tv)
                    </h1>
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <PulseLoader color="#e11d48" size={15} />
                </div>
            ) : (
                <div className="grid sm:grid-cols-3 gap-3">
                    {internetTv.map(pkg => (
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
export default JituTv;
