import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Usaha() {
  const usahaList = [
    {
      title: "Peternakan",
      img: "/usaha/peternakan.png",
      alt: "Peternakan Kambing",
      desc: "Mengelola peternakan kambing dengan populasi awal 30 ekor dan rencana penambahan hingga 60 ekor lagi untuk memenuhi permintaan pasar.",
      link: "https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20mau%20tanya%20info%20unit%20peternakan.",
      linkText: "Info Peternakan",
    },
    {
      title: "Pertanian & Perikanan",
      img: "/usaha/pertanian-perikanan.png",
      alt: "Pertanian dan Perikanan",
      desc: "Mengembangkan potensi pertanian dan perikanan sebagai pilar utama ketahanan pangan dan sumber pendapatan bagi masyarakat desa.",
      link: "https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20mau%20tanya%20info%20unit%20pertanian%20&%20perikanan.",
      linkText: "Info Selengkapnya",
    },
    {
      title: "Usaha Pangan (UMKM)",
      img: "/usaha/umkm.png",
      alt: "Pengembangan Usaha Pangan",
      desc: "Tahap awal pengembangan usaha pangan telah dimulai dengan distribusi telur dari UMKM lokal. Kami akan terus berinovasi dengan produk lainnya.",
      link: "https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20mau%20tanya%20info%20unit%20usaha%20pangan.",
      linkText: "Info Usaha Pangan",
    },
    // Bisa tambah terus data di sini
  ];

  return (
    <section id="usaha" className="py-16 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Unit Usaha Kami
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Fokus kami saat ini mencakup beberapa sektor utama yang menjadi
            potensi desa.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {usahaList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col h-full">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-green-100 text-green-800 py-3 rounded-lg font-semibold hover:bg-green-200 transition duration-300 mt-auto"
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
