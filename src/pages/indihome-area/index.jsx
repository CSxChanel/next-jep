import AreaContainer from "@/components/indihomeArea/areaContainer";
import Head from "next/head";
import { useRouter } from "next/router";

const IndihomeAreaList = () => {
  const router = useRouter();
  const indihomeArea = [
    {
      image: "/image1.png",
      title: "Indihome Cikupa",
      description:
        "Registrasi IndiHome Cikupa kini lebih mudah dengan sistem pendaftaran online. Anda bisa mendaftar dari rumah, kantor, atau tempat usaha hanya dengan menggunakan gadget. Hubungi marketing resmi IndiHome dan nikmati koneksi internet terbaik di Cikupa. Daftar sekarang dan rasakan kemudahannya!",
      children: "View More",
      onClick: () => {
        router.push("/indihome-cikupa");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Rajeg",
      description:
        "IndiHome Rajeg hadir dengan kemudahan pendaftaran online untuk memenuhi kebutuhan internet Anda di rumah, kantor, atau tempat usaha. Tanpa perlu repot, Anda dapat langsung menghubungi marketing resmi IndiHome melalui gadget Anda. Segera daftar dan nikmati layanan internet terbaik dari IndiHome Rajeg.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-rajeg");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Legok",
      description:
        "IndiHome Legok menawarkan kemudahan pendaftaran melalui sistem online, memudahkan Anda yang membutuhkan layanan internet di rumah, kantor, atau tempat usaha. Cukup gunakan gadget Anda untuk menghubungi marketing resmi IndiHome. Daftar sekarang dan nikmati layanan internet unggulan dari IndiHome Legok.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-legok");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Curug",
      description:
        "Untuk Anda yang berada di Curug, kini registrasi IndiHome semakin praktis dengan sistem online. Baik untuk kebutuhan rumah, kantor, atau usaha, Anda dapat mendaftar dengan mudah hanya dengan gadget Anda. Hubungi marketing resmi IndiHome dan segera daftar untuk menikmati internet cepat dan stabil.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-curug");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Tigaraksa",
      description:
        "Untuk Sobat indihome wilayah Indihome-tigaraksa dapat Registrasi atau Pendaftaran Online juga bisa menghubungi Marketing resmi indihome. ada banyak pilihat paket promo untuk wilayah tigaraksa.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-tigaraksa");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Banten",
      description:
        "Untuk Sobat indihome wilayah Banten dapat melakukan Registrasi atau Pendaftaran Online, juga bisa menghubungi Marketing resmi indihome. ada banyak pilihat paket promo untuk wilayah IndiHome-Banten.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-banten");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Cirebon",
      description:
        "Untuk Sobat indihome wilayah Cirebon dapat melakukan Registrasi atau Pendaftaran Online, juga bisa menghubungi Marketing resmi indihome. ada banyak pilihat paket promo untuk wilayah IndiHome-Cirebon.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-cirebon");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Pasar Kemis",
      description:
        "Registrasi IndiHome Pasar Kemis kini semakin mudah dan cepat dengan sistem pendaftaran online. Hanya dengan menggunakan gadget, Anda bisa menghubungi marketing resmi IndiHome untuk pemasangan di rumah, kantor, atau tempat usaha Anda. Jangan lewatkan kesempatan ini, daftar IndiHome sekarang juga!",
      children: "View More",
      onClick: () => {
        router.push("/indihome-pasar-kemis");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Balaraja",
      description:
        "Registrasi IndiHome Balaraja Bisa langsung Melalui marketing resmi indihome. indihome Balaraja memberikan paket promo hanya di wilayah indihome Balaraja yang tidak semua wilayah tersedia paket promo Paling Murah.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-balaraja");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Cikarang",
      description:
        "registrasi untuk indihome area cikarang bisa langsung melalui marketing resmi indihome. indihome area cikarang memberikan paket promo hanya di wilayah indihome cikarang yang tidak semua wilayah tersedia paket promo Paling Murah.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-cikarang");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Kelapa Dua",
      description:
        "IndiHome Kelapa Dua kini menyediakan pendaftaran online yang mudah dan praktis untuk semua kebutuhan internet Anda, baik di rumah, kantor, maupun tempat usaha. Dengan gadget Anda, langsung hubungi marketing resmi IndiHome dan segera daftar untuk menikmati koneksi internet terbaik di Kelapa Dua.",
      children: "View More",
      onClick: () => {
        router.push("/indihome-kelapa-dua");
      },
    },
    {
      image: "/image1.png",
      title: "Indihome Citra Raya",
      description:
        "Registrasi IndiHome Citra Raya kini lebih mudah dengan sistem pendaftaran online. Anda bisa mendaftar dari rumah, kantor, atau tempat usaha hanya dengan menggunakan gadget. Hubungi marketing resmi IndiHome dan nikmati koneksi internet terbaik di Cikupa. Daftar sekarang dan rasakan kemudahannya!",
      children: "View More",
      onClick: () => {
        router.push("/indihome-citra-raya");
      },
    },
  ];

  const pageUrl = "https://indihome-area.com/indihome-area";
  const ogImage = "https://indihome-area.com/paketMovie.png";



 //metadat schema produk


 
  return (
    <>
    <Head>
                <title>Indihome Area | Provider internet mencakup semua area indihome biaya registrasi Gratis.</title>
                <meta name="description" content="Indihome Area suda tersedia di seluruh penjuru pelosok, lebih dari 8++juta pelanggan Aktif. menghadirkan layanan internet fiber Optik." />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Indihome Area | Provider internet mencakup semua area indihome biaya registrasi Gratis." />
                <meta
                    property="og:description"
                    content="Indihome Area suda tersedia di seluruh penjuru pelosok, lebih dari 8++juta pelanggan Aktif. menghadirkan layanan internet fiber Optik."
                />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Indihome Area | Provider internet mencakup semua area indihome biaya registrasi Gratis." />
                <meta
                    name="twitter:description"
                    content="Indihome Area suda tersedia di seluruh penjuru pelosok, lebih dari 8++juta pelanggan Aktif. menghadirkan layanan internet fiber Optik."
                />
                <meta name="twitter:image" content={ogImage} />
                <meta
                    name="keywords"
                    content="indihome, internet, pendaftaran, indihome-cikupa, indihome-balaraja, indihome-tigaraksa"
                />
                {/* Robots meta tags */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
                />
                {/* Structured Data */}
           
            </Head>
    
            <AreaContainer indihomeArea={indihomeArea} />;
    </>
  )
  
};

export default IndihomeAreaList;
