import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
const LanggananSekarang = ({ title }) => {
  // Handle Submit
  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik berlangganan. \n
            ┌〔 *IndiHome by-Telkomsel* 〕
            ├ Nama   : 
            ├ E-mail :
            ├ Alamat-pemasangan :
            ├ Foto KTP : 
            ├ Paket :
            ├ Harga : 
            ├ Mbps  : 
            └──── ┈ ⳹`
  );

  const waLink = `https://wa.me/6281387051443?text=${whatsappMessage}`;

  const handelSubmit = () => {
    window.open(waLink, "_blank");
  };

  return (
    <>
      <div className="container bg-slate-200 h-[500px] my-10">
        <div className="bg-gradient-to-r from-red-700 to-rose-500 w-full mx-auto sm:grid sm:grid-cols-2 sm:gap-x-12 sm:items-center sm:justify-items-center py-4 px-5 text-slate-100">
          <h5 className="text-2xl sm:text-3xl font-bold">
            Yuk, Mulai Langganan <br />
            IndiHome Sekarang!
          </h5>

          <button
            onClick={handelSubmit}
            type="button"
            className="gap-x-2 flex items-center animate-bounce mt-5 hover:text-slate-500"
          >
            langganan Sekarang
            <SlArrowRightCircle className="text-3xl" />
          </button>
        </div>
        <main className="flex justify-center bg-gradient-to-r from-red-700 to-rose-500 rounded-r-full">
          <Image
            src="/media/indihome-poin.png"
            alt="Langganan Sekarang"
            width={500}
            height={300}
          />
        </main>
      </div>
      <section className="container mb-10 sm:mb-20">
        <h5 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5 text-rose-600">
          Langganan {title} Sekarang
        </h5>
        <p className="font-semibold text-md sm:text-xl p-3 sm:px-8">
          Dengan {title}, Anda dapat menikmati layanan internet berkualitas
          terbaik di seluruh Indonesia dengan harga yang lebih murah dan
          terjangkau seperti {title}. Langganan IndiHome Sekarang dan nikmati
          pengalaman digital terbaik di rumah Anda.
        </p>
      </section>
    </>
  );
};

export default LanggananSekarang;
