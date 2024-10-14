//src/comoponents/Banner

const Banner = ({ title }) => {
    return (
        <div className="rounded-bl-[55px] w-full bg-gradient-to-r from-red-700 to-rose-500 mt-20">
            <div className="py-10 px-5 text-slate-100 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:px-24 sm:items-start">
                <div>
                    <h1 className="text-2xl font-bold mb-4">
                        Selamat datang {title || "IndiHome"}
                    </h1>
                </div>
            </div>
        </div>
    );
};
export default Banner;
