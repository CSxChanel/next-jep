import React from "react";

const AreaModal = ({ isOpen, onClose, area }) => {
  if (!isOpen || !area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-2xl h-80 overflow-y-scroll p-6 relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          Close
        </button>
        <h1 className="text-2xl font-bold">{area.title}</h1>

      </div>
    </div>
  );
};

export default AreaModal;
