//src/comoponents/Banner

const Banner = ({title, description}) => {
    return (
        <div className="rounded-br-[55px] rounded-tl-[55px] w-full bg-gradient-to-r from-red-700 to-rose-500">
            <div className="py-10 px-5 text-slate-100 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:px-24 sm:items-start">
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Selamat datang {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
                <div>
                    <h3 className="text-[27px] mt-8 leading-8 font-semibold">Solusi Internet Cepat, Berkelas, dan Cerdas untuk Aktifitas Tanpa Batas</h3>
                </div>
            </div>
        </div>
    );
};
export default Banner;
