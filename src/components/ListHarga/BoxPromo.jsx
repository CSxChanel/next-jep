//src/components/ListHarga/BoxPromo
import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import OpenBenevit from "@/components/Modals/OpenBenevit.jsx";
import OpenSyarat from "@/components/Modals/OpenSyarat.jsx";
import FormPromo from "@/components/Form/form-promo";

const BoxPromo = ({ type, title, price, mbps, benevit, benevit2, syarat }) => {
  const [isBenevitModalOpen, setIsBenevitModalOpen] = useState(false);
  const [isSyaratModalOpen, setIsSyaratModalOpen] = useState(false);

  const handleOpenBenevitModal = () => {
    setIsBenevitModalOpen(true);
  };

  const handleCloseBenevitModal = () => {
    setIsBenevitModalOpen(false);
  };

  const handleOpenSyaratModal = () => {
    setIsSyaratModalOpen(true);
  };

  const handleCloseSyaratModal = () => {
    setIsSyaratModalOpen(false);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="my-8 sm:my-5 shadow-lg shadow-slate-500 w-full mx-auto bg-slate-100 rounded-xl">
      <h2 className="mx-auto w-[180px] py-1 text-center text-slate-100 font-bold bg-gradient-to-r from-rose-900 to-rose-600 rounded-bl-xl rounded-tr-xl">
        Paling Murah
      </h2>
      <div className="flex flex-row mx-7 my-5">
        <div className="w-[75px] h-[75px] bg-gradient-to-tr from-rose-950 to-rose-500 rounded-tl-xl rounded-br-xl text-slate-100 p-2 text-center mr-5">
          <p className="text-3xl font-bold">{mbps}</p>
          <p className="-mt-2">Mbps</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-xl">{type}</p>
        </div>
      </div>
      <div className="mx-7 text-center">
        <h3 className="font-semibold mt-8">
          Rp{" "}
          <span className="text-3xl font-bold">{price.toLocaleString()}</span>
          /bulan
        </h3>
        <div className="bg-rose-700 w-full rounded-xl shadow shadow-slate-500 text-slate-100 font-bold hover:scale-110 mt-5">
          <button onClick={handleOpen} typeof="button">
            Berlangganan Sekarang
          </button>
        </div>
      </div>
      <div className="flex justify-between mx-3 border-t-2 border-rose-700 my-7 py-2">
        <button
          onClick={handleOpenBenevitModal}
          className="text-rose-700 text-sm cursor-pointer font-medium"
        >
          Benevit
          <GoChevronDown />
        </button>
        <button
          onClick={handleOpenSyaratModal}
          className="text-rose-700 text-sm cursor-pointer font-medium"
        >
          Syarat & Ketentuan
          <GoChevronDown />
        </button>
      </div>
      {isBenevitModalOpen && (
        <OpenBenevit
          benevit={[benevit, benevit2]}
          onClose={handleCloseBenevitModal}
        />
      )}
      {isSyaratModalOpen && (
        <OpenSyarat syarat={[syarat]} onClose={handleCloseSyaratModal} />
      )}
      {open && (
        <FormPromo
          price={price}
          mbps={mbps}
          title={title}
          onClose={handleClose}
        />
      )}
    </div>
  );
};
export default BoxPromo;
