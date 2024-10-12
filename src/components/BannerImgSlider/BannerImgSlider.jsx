// components/BannerImgSlider.jsx
import { useState } from "react";
import ImgSliderCard from "./ImgSliderCard";
import Image from "next/image";

const BannerImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/images/image1.png",
      alt: "Viu indihome Tv",
      text: "Tonton tayangan Asia favoritmu di Viu melalui IndiHome Tv sekarang. Registrasi Indihome melalui sales resmi kami.",
    },
    {
      src: "/images/image2.jpg",
      alt: "Up Speed indihome",
      text: "Up Speed Indihome kamu sekarang, nikmati internet berkualitas tanpa batas! tambahkan kecepatan secara temporer, online makin ngebut.",
    },
    {
      src: "/images/image3.jpg",
      alt: "Add-on mola",
      text: "Dapatkan tayangan terbaik di indihome Tv dengan berlangganan Mola harimu makin seru!",
    },
    {
      src: "/images/image4.jpg",
      alt: "Tayangan eksklusif",
      text: "Lonsgate Play tonton film Blockbuster dan serial Eksklusif sepuasnya. Bayar satu bulan Dapat dua Bulan.",
    },
    {
      src: "/images/image5.jpg",
      alt: "Benevit indihome",
      text: "Bebas klaim Benefit berlipat, dengan Indihome Bikin mabar makin semangat.",
    },
    {
      src: "/images/image6.jpg",
      alt: "indihome langit-musik",
      text: "Mainkan Musik sepuasnya Berlangganan paket digital IndiHome benevite langit musik dll.",
    },
    {
      src: "/images/image7.jpg",
      alt: "Image 7",
      text: "IndiHome Prime Bayar satu bulan Nikmati Prime Vidio Tiga bulan. Buruan aktifkan paketnya.",
    },
  ];

  return (
    <div className="relative w-full bg-slate-100 overflow-hidden mb-20 pb-5">
      <Image
        width={800}
        height={600}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full"
        style={{ objectFit: "cover" }}
      />
      <div className="relative z-10 flex justify-end gap-x-5 items-center">
        <h1 className="p-4 text-xl">{images[currentIndex].text}</h1>
        <div className="flex space-x-4 overflow-x-scroll px-5 py-2 bg-white bg-opacity-70 rounded-l-2xl shadow-md max-w-[60%]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[190px] h-full flex-shrink-0 cursor-pointer ${
                currentIndex === index ? "border-2 border-black" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <ImgSliderCard image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerImgSlider;
