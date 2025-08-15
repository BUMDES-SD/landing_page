import React from "react";

const Tentang = () => {
  return (
    <section id="tentang" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Tentang BUMDes Sirah Dayueh
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Didanai dari dana pembangunan desa, kami hadir untuk menciptakan
            kemandirian ekonomi dan kesejahteraan bersama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pemberdayaan Masyarakat */}
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Pemberdayaan Masyarakat
            </h3>
            <p className="text-gray-600">
              Meningkatkan potensi sumber daya manusia dan alam desa untuk
              kesejahteraan bersama.
            </p>
          </div>

          {/* Beragam Unit Usaha */}
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V5a1 1 0 00-1.447-.894l-4 2A1 1 0 0011 7v10zM4 17a1 1 0 001.447.894l4-2A1 1 0 0010 15V5a1 1 0 00-1.447-.894l-4 2A1 1 0 004 7v10z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Beragam Unit Usaha
            </h3>
            <p className="text-gray-600">
              Menjalankan usaha di sektor peternakan, pertanian, perikanan, dan
              pengembangan pangan.
            </p>
          </div>

          {/* Potensi Pertumbuhan */}
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Potensi Pertumbuhan
            </h3>
            <p className="text-gray-600">
              Terus berinovasi dengan rencana pengembangan usaha baru seperti
              agen BRILink dan produk air minum.
            </p>
          </div>

          {/* Terbuka untuk Kerjasama */}
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Terbuka untuk Kerjasama
            </h3>
            <p className="text-gray-600">
              Kami membuka ruang diskusi bagi para investor atau pihak yang
              berminat menjalin kemitraan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
