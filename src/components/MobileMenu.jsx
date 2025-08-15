import React from "react";

export default function MobileMenu({ onClose }) {
  const handleClick = (href) => {
    onClose();
    window.location.hash = href;
  };

  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button
          onClick={() => handleClick("#tentang")}
          className="w-full text-gray-600 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base text-center font-medium"
        >
          Tentang Kami
        </button>
        <button
          onClick={() => handleClick("#usaha")}
          className="w-full text-gray-600 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base text-center font-medium"
        >
          Unit Usaha
        </button>
        <button
          onClick={() => handleClick("#kenapa-kami")}
          className="w-full text-gray-600 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base text-center font-medium"
        >
          Kenapa Memilih Kami
        </button>
        <button
          onClick={() => handleClick("#mitra")}
          className="w-full text-gray-600 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base text-center font-medium"
        >
          Mitra
        </button>
        <button
          onClick={() => handleClick("#kontak")}
          className="w-full bg-green-100 text-green-800 hover:bg-green-200 block px-3 py-2 rounded-md text-base text-center font-medium"
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}
