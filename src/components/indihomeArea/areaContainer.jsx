import { useEffect, useState } from "react";
import AreaCard from "./areaCard";
import { PulseLoader } from "react-spinners";
const AreaContainer = ({ indihomeArea }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container text-center my-5">
        <h1 className="font-bold text-2xl sm:text-3xl">IndiHome Area</h1>
        <p className="font-semibold text-md sm:text-xl p-3 sm:px-8">
          Indihome hadir di 514 kabupaten atau kota, membentang dengan jaringan
          terluas di seluruh indonesia bahkan hingga pelosok negri, dan sudah
          dipercaya 8Jt ++ Pelanggan.
        </p>
      </div>
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <PulseLoader color="#e11d48" size={15} />
          </div>
        ) : (
          indihomeArea.map((area, index) => (
            <AreaCard
              key={index}
              image={area.image}
              title={area.title}
              description={area.description}
              onClick={area.onClick}
            >
              {area.children}
            </AreaCard>
          ))
        )}
      </div>
    </>
  );
};

export default AreaContainer;
