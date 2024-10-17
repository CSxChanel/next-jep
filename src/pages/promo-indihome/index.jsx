import InternetPromo from "@/components/ListHarga/InternetPromo";
import Head from "next/head";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const PromoIndihome = () => {
  const pageUrl = "https://indihome-bytelkomsel.com/promo-indihome";
  const ogImage = "https://indihome-bytelkomsel.com/promo.png";
  const promo = {
    path: "promo-indihome",
    title: "IndiHome by Telkomsel",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          Indihome by-Telkomsel | Promo IndiHome - Penawaran Spesial Layanan
          Internet, TV, dan Telepon
        </title>
        <meta
          name="description"
          content="Nikmati berbagai promo menarik dari IndiHome by Telkomsel untuk layanan internet, TV interaktif, dan telepon rumah. Dapatkan harga spesial, diskon menarik, dan berbagai keuntungan lainnya dengan mendaftar promo IndiHome sekarang. Promo IndiHome hadir untuk memberikan pengalaman digital terbaik dengan biaya yang lebih terjangkau. Cek promo terbaru dan segera daftar untuk menikmati koneksi internet cepat, tayangan TV berkualitas, dan layanan telepon rumah dari IndiHome."
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Indihome by-Telkomsel || Promo IndiHome - Penawaran Spesial Layanan Internet, TV, dan Telepon"
        />
        <meta
          property="og:description"
          content="Nikmati berbagai promo menarik dari IndiHome untuk layanan internet, TV interaktif, dan telepon rumah. Dapatkan harga spesial, diskon menarik, dan berbagai keuntungan lainnya dengan mendaftar promo IndiHome sekarang. Promo IndiHome hadir untuk memberikan pengalaman digital terbaik dengan biaya yang lebih terjangkau. Cek promo terbaru dan segera daftar untuk menikmati koneksi internet cepat, tayangan TV berkualitas, dan layanan telepon rumah dari IndiHome."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Indihome by-Telkomsel || Promo IndiHome - Penawaran Spesial Layanan Internet, TV, dan Telepon"
        />
        <meta
          name="twitter:description"
          content="Nikmati berbagai promo menarik dari IndiHome untuk layanan internet, TV interaktif, dan telepon rumah. Dapatkan harga spesial, diskon menarik, dan berbagai keuntungan lainnya dengan mendaftar promo IndiHome sekarang. Promo IndiHome hadir untuk memberikan pengalaman digital terbaik dengan biaya yang lebih terjangkau. Cek promo terbaru dan segera daftar untuk menikmati koneksi internet cepat, tayangan TV berkualitas, dan layanan telepon rumah dari IndiHome."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="keywords"
          content="indihome, internet, promo-indihome, pendaftaran, indihome-cikupa, indihome-balaraja, indihome-tigaraksa"
        />
        {/* Robots meta tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
      </Head>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <PulseLoader color="#e11d48" size={15} />
        </div>
      ) : (
        <>
          <div className="rounded-br-[55px] rounded-tl-[55px] w-full bg-gradient-to-r from-red-700 to-rose-500">
            <div className="py-10 px-5 text-slate-100 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:px-24 sm:items-start">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Selamat datang Promo IndiHome di IndiHome by-Telkomsel. Cek
                  promo terbaru dan segera daftar untuk menikmati koneksi
                  internet cepat, tayangan TV berkualitas, dan layanan telepon
                  rumah dari indiHome
                </h2>
                <p>
                  IndiHome menghadirkan berbagai paket promo menarik untuk
                  memenuhi kebutuhan internet Anda. Paket-paket ini dirancang
                  untuk memberikan pengalaman internet yang cepat, stabil, dan
                  terjangkau. Namun, perlu diingat bahwa tidak semua paket promo
                  tersedia di setiap wilayah. Oleh karena itu, penting untuk
                  memeriksa ketersediaan paket di daerah Anda.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] mt-8 leading-8 font-semibold">
                  Untuk informasi lebih lanjut mengenai paket promo dan
                  ketersediaan di wilayah Anda, hubungi Marketing IndiHome,
                  Pilih Produk Chat via WhatApp. Pastikan Anda mendapatkan
                  informasi dari sumber resmi untuk menghindari penipuan dan
                  informasi yang salah.
                </h3>
              </div>
            </div>
          </div>

          <InternetPromo path={promo.path} title={promo.title} />
        </>
      )}
    </>
  );
};
export default PromoIndihome;
