import SemuaHarga from "@/components/ListHarga/SemuaHarga";
import Head from "next/head";

const ProdukIndihome = () => {
    const pageUrl = "https://indihome-area.com/produk-indihome";
    const ogImage = "https://indihome-area.com/paketMovie.png";

    return (
        <>
            <Head>
                <title>
                    Indihome-Area | Produk IndiHome - Solusi Internet, TV, dan
                    Telepon Terbaik
                </title>
                <meta
                    name="description"
                    content="IndiHome menawarkan berbagai produk layanan internet, TV interaktif, dan telepon rumah yang dirancang untuk memenuhi kebutuhan digital Anda. Dengan jaringan fiber optik yang luas, IndiHome menyediakan koneksi internet cepat dan stabil, berbagai pilihan saluran TV berkualitas, dan layanan telepon rumah dengan tarif terjangkau. Pilih produk IndiHome yang sesuai dengan kebutuhan Anda dan nikmati pengalaman digital terbaik di rumah Anda."
                />
                <link rel="canonical" href={pageUrl} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Indihome-Area || Produk IndiHome - Solusi Internet, TV, dan Telepon Terbaik"
                />
                <meta
                    property="og:description"
                    content="IndiHome menawarkan berbagai produk layanan internet, TV interaktif, dan telepon rumah yang dirancang untuk memenuhi kebutuhan digital Anda. Dengan jaringan fiber optik yang luas, IndiHome menyediakan koneksi internet cepat dan stabil, berbagai pilihan saluran TV berkualitas, dan layanan telepon rumah dengan tarif terjangkau. Pilih produk IndiHome yang sesuai dengan kebutuhan Anda dan nikmati pengalaman digital terbaik di rumah Anda."
                />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Indihome-Area || Produk IndiHome - Solusi Internet, TV, dan Telepon Terbaik"
                />
                <meta
                    name="twitter:description"
                    content="IndiHome menawarkan berbagai produk layanan internet, TV interaktif, dan telepon rumah yang dirancang untuk memenuhi kebutuhan digital Anda. Dengan jaringan fiber optik yang luas, IndiHome menyediakan koneksi internet cepat dan stabil, berbagai pilihan saluran TV berkualitas, dan layanan telepon rumah dengan tarif terjangkau. Pilih produk IndiHome yang sesuai dengan kebutuhan Anda dan nikmati pengalaman digital terbaik di rumah Anda."
                />
                <meta name="twitter:image" content={ogImage} />
                <meta
                    name="keywords"
                    content="indihome, internet, produk-indihome, pendaftaran, indihome-cikupa, indihome-balaraja, indihome-tigaraksa"
                />
                {/* Robots meta tags */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
                />
            </Head>
            <div className="rounded-br-[55px] rounded-tl-[55px] w-full bg-gradient-to-r from-red-700 to-rose-500">
                <div className="py-10 px-5 text-slate-100 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:px-24 sm:items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            Selamat datang Produk-indiHome
                        </h2>
                        <p>
                            IndiHome menawarkan berbagai produk layanan
                            internet, TV interaktif, dan telepon rumah yang
                            dirancang untuk memenuhi kebutuhan digital Anda.
                            Dengan jaringan fiber optik yang luas, IndiHome
                            menyediakan koneksi internet cepat dan stabil,
                            berbagai pilihan saluran TV berkualitas, dan layanan
                            telepon rumah dengan tarif terjangkau. Pilih produk
                            IndiHome yang sesuai dengan kebutuhan Anda dan
                            nikmati pengalaman digital terbaik di rumah Anda.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-[20px] sm:text-[25px] mt-8 leading-8 font-semibold">
                            Untuk informasi lebih lanjut, hubungi Marketing
                            resmi IndiHome. Nikmati kemudahan internet cepat dan
                            stabil dengan mendaftar IndiHome secara online
                            sekarang juga!
                        </h3>
                    </div>
                </div>
            </div>

            <SemuaHarga />
        </>
    );
};
export default ProdukIndihome;
