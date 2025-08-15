import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../assets/logo/Logo_BUMDES.jpg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo BUMDes" className="h-10 rounded" />
          <a href="#" className="text-green-700 text-xl font-bold">
            BUMDES SIRAH DAYUEH
          </a>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#tentang" className="text-gray-600 hover:text-black font-semibold transition duration-150">Tentang Kami</a>
          <a href="#usaha" className="text-gray-600 hover:text-black font-semibold transition duration-150">Unit Usaha</a>
          <a href="#kenapa-kami" className="text-gray-600 hover:text-black font-semibold transition duration-150">Kenapa Memilih Kami</a>
          <a href="#mitra" className="text-gray-600 hover:text-black font-semibold transition duration-150">Mitra</a>
          <a href="#kontak" className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 font-semibold transition duration-150 shadow-lg">Hubungi Kami</a>
        </div>

        {/* Button mobile */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
    </header>
  );
}
