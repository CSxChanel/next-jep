import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Sesuaikan path sesuai dengan struktur proyek Anda
import Image from "next/image";
// Import gambar
import Baner1 from "@/public/banners/14-IndihomeTV-720x400px_M.png";
import Baner2 from "@/public/banners/720-x-400px0_M.jpg";
import Baner3 from "@/public/banners/Banner_Homepage_Mobile_720x400_M.jpg";
import Baner4 from "@/public/banners/banner_Lapor_Gangguan_720x400_M.jpg";
import Baner5 from "@/public/banners/banner_selfcare_720x400_M.jpg";
import Baner6 from "@/public/banners/banner_tsel_m_M.jpg";
import Baner7 from "@/public/banners/gamer720-x-400_1_M.jpg";
import Baner8 from "@/public/banners/Indihome_PL_Homepage_Mobile_720x400_M.jpg";
import Baner9 from "@/public/banners/Mobile_Homepage_720x400-_MAY_M.jpg";
import Baner10 from "@/public/banners/Mobile-(720x400)-NETFLIX-2024-(rev5)_M.jpg";
import Baner11 from "@/public/banners/Movie_LPC_HomepageMobile720x400_M.jpg";
import Baner12 from "@/public/banners/Paket-IndiHome-Netflix-720-x-400_M.jpg";
import Baner13 from "@/public/banners/Pay_in_Advance_New_720x400_M.png";
import Baner14 from "@/public/banners/Tsel-One-Paket-Dynamic-Feb-240201-Banner-Indihome-720x400_M.jpg";

import { CustomNextArrow, CustomPrevArrow } from "./CustomArrow"; // Sesuaikan path sesuai dengan struktur proyek Anda

const banners = [
  Baner1,
  Baner2,
  Baner3,
  Baner4,
  Baner5,
  Baner6,
  Baner7,
  Baner8,
  Baner9,
  Baner10,
  Baner11,
  Baner12,
  Baner13,
  Baner14,
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />, // Gunakan komponen tombol navigasi
    prevArrow: <CustomPrevArrow />, // Gunakan komponen tombol navigasi
  };

  return (
    <div className="w-full mt-20">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full"
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
