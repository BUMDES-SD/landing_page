import React, { useEffect, useState } from "react";
import slide1 from "../assets/heroSlide/slideshow1.png";
import slide2 from "../assets/heroSlide/slideshow2.png";
import slide3 from "../assets/heroSlide/slideshow3.png";

export default function Hero() {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`hero-slide absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <div className="relative z-30 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Menggerakkan Ekonomi Desa Melalui Usaha Mandiri
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          BUMDes Sirah Dayueh berkomitmen memberdayakan masyarakat melalui pengembangan potensi di sektor peternakan, pertanian, dan perikanan.
        </p>
      </div>
    </section>
  );
}
