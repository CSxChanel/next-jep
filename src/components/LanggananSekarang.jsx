import { SlArrowRightCircle } from "react-icons/sl";
const LanggananSekarang = () => {
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
    <div className="container bg-slate-100 h-[500px] my-10">
      <div className="bg-rose-500 w-full mx-auto sm:grid sm:grid-cols-2 sm:gap-x-12 sm:items-center sm:justify-items-center py-4 text-slate-100">
        <h4 className="text-2xl font-bold">
          Yuk, Mulai Langganan <br />
          IndiHome Sekarang!
        </h4>

        <button
          onClick={handelSubmit}
          type="button"
          className="gap-x-2 flex items-center animate-bounce"
        >
          langganan Sekarang
          <SlArrowRightCircle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default LanggananSekarang;
