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
      <div className="sm:mt-60 mb-7 container">
        <main className="grid sm:grid-cols-2 gap-x-4 bg-gradient-to-r from-red-700 to-rose-500 rounded-3xl">
          <section className="py-10 px-5 sm:my-24">
            <h5 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5 text-slate-100">
              Bantuan {title}.
            </h5>
            <p className="text-slate-300 sm:text-lg">
              Kami menyediakan bantuan langsung melalui WhatsApp. Kami akan
              membalas pesan Anda melalui WhatsApp 24/7. Tetap berlangganan dan
              semangat berinternet.
            </p>
          </section>
          <Image
            src="/media/bantuan-indihome.png"
            alt="IndiHome Bantuan"
            width={500}
            height={300}
            className="sm:-mt-44 sm:mb-24 mb-4"
          />
        </main>
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
