const H2Title = ({ title, path }) => {
  return (
    <>
      <div className="container text-center my-10">
        <h2 className="font-bold text-2xl sm:text-3xl">
          Pilihan Paket IndiHome
        </h2>
        <p className="font-semibold text-md sm:text-xl p-3 sm:px-8">
          {title} menawarkan berbagai paket promo menarik yang dirancang untuk
          memenuhi kebutuhan internet Anda dengan harga yang lebih terjangkau.
          Dengan paket-paket promo ini, Anda dapat menikmati layanan internet
          cepat, stabil, dan berkualitas tinggi dari {path}.
        </p>
        <div className="border-t-2 border-rose-500 my-5"></div>
      </div>
    </>
  );
};

export default H2Title;
