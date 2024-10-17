import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
const BantuanIndihome = ({ title }) => {
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
      <div className="mt-44 mb-10 container flex justify-between items-start">
        <div className="bg-gradient-to-r from-red-700 to-rose-500 p-6 rounded-xl sm:rounded-3xl text-center sm:text-left relative">
          <div className="py-10 mt-28">
            <Image
              src="/media/bantuan-indihome.png"
              alt="Bantuan Indihome"
              width={300}
              height={200}
              className="absolute -top-32 right-0"
            />
            <h6 className="text-slate-100 text-2xl sm:text-3xl font-bold mb-2">
              Bantuan {title}
            </h6>
            <p className="text-slate-300 sm:text-xl text-base">
              Kami menyediakan bantuan langsung melalui WhatsApp. Kami akan
              membalas pesan Anda melalui WhatsApp 24/7. Tetap berlangganan dan
              semangat berinternet.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-700 to-rose-500 w-full mx-auto sm:grid sm:grid-cols-2 sm:gap-x-12 sm:items-center sm:justify-items-center py-4 px-5 text-slate-100">
        <h4 className="text-2xl font-bold">
          Yuk, Mulai Langganan <br />
          IndiHome Sekarang!
        </h4>

        <button
          onClick={handelSubmit}
          type="button"
          className="gap-x-2 flex items-center animate-bounce mt-5 hover:text-slate-500"
        >
          langganan Sekarang
          <SlArrowRightCircle className="text-3xl" />
        </button>
      </div>
    </>
  );
};

export default BantuanIndihome;
