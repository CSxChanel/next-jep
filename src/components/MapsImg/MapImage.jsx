import AnimatedMap from "./AnimatedMap";

const MapImage=() =>{
  return (
    <div className="container">
      <div className="bg-slate-100 sm:grid sm:grid-cols-2 gap-x-5 justify-items-center items-center p-2 mb-20">
        <AnimatedMap />
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-5">
            IndiHome tersedia hingga pelosok negeri
          </h1>
          <p className="mb-5">
            Indihome hadir di 514 kabupaten atau kota, membentang dengan
            jaringan terluas di seluruh indonesia bahkan hingga pelosok negri,
            dan sudah dipercaya 8Jt ++ Pelanggan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MapImage;
