// src/components/Mitra.jsx
import React from "react";

// Import gambar
import rumpinBogor from "../assets/mitra/Rumpin_Bogor.png";
import uinJakarta from "../assets/mitra/UIN_Jakarta.jpg";
import bianglala from "../assets/mitra/bianglala.png";
import cleoVerly from "../assets/mitra/CleoVerly.png";

const Mitra = () => {
  return (
    <>
      {/* Section Mitra */}
      <section id="mitra" className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">
              Partner Kerjasama Kami
            </h2>
            <p className="text-gray-600 mt-2">
              Kami bangga bekerjasama dengan berbagai pihak untuk memajukan desa.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            <img src={rumpinBogor} alt="Logo Partner 1" className="h-12 md:h-40" />
            <img src={uinJakarta} alt="Logo Partner 2" className="h-12 md:h-40" />
            <img src={bianglala} alt="Logo Partner 3" className="h-12 md:h-40" />
            <img src={cleoVerly} alt="Logo Partner 4" className="h-12 md:h-40" />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Mitra;
