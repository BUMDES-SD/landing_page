import React from "react";

const KenapaKami = () => {
  return (
    <section id="kenapa-kami" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Kenapa Memilih Kami
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Kami menawarkan kualitas dan layanan terbaik untuk kebutuhan Anda.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <p className="text-gray-600 flex-grow">
              "Produk kami, seperti kambing dan hasil tani, berasal dari perawatan terbaik untuk memastikan kualitas premium sampai ke tangan Anda."
            </p>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Kualitas Terjamin</h4>
                <p className="text-sm text-gray-500">Standar Perawatan Terbaik</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <p className="text-gray-600 flex-grow">
              "Memotong rantai distribusi yang panjang, Anda mendapatkan produk yang lebih segar dengan harga lebih baik, langsung dari peternak dan petani lokal kami."
            </p>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Langsung dari Sumbernya</h4>
                <p className="text-sm text-gray-500">Dari Petani & Peternak Lokal</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <p className="text-gray-600 flex-grow">
              "Setiap pembelian Anda tidak hanya memenuhi kebutuhan, tetapi juga berkontribusi langsung pada pemberdayaan masyarakat dan kemajuan ekonomi desa."
            </p>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Mendukung Ekonomi Desa</h4>
                <p className="text-sm text-gray-500">Memberdayakan Masyarakat</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KenapaKami;
