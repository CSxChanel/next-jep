//src/comoponents/Banner

const Banner = ({ title, description, h2Title }) => {
  return (
    <div className="rounded-bl-[55px] w-full bg-gradient-to-r from-red-700 to-rose-500 mt-20">
      <div className="py-10 px-5 text-slate-100 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:px-24 sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {title || "Selamat datang di IndiHome"}
          </h1>
          <p className="mt-5">{description}</p>
        </div>
        <div>
          <h2 className="text-[27px] mt-8 leading-8 font-semibold">
            {h2Title}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Banner;
