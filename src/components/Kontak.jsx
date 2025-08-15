import React from "react";

const Kontak = () => {
    return (<section id="kontak" className="bg-green-700">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Tertarik Berkolaborasi?
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            Mari berdiskusi untuk kemajuan bersama. Klik tombol di bawah untuk
            terhubung langsung dengan pengurus BUMDes Sirah Dayueh via WhatsApp.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20tertarik%20untuk%20menjalin%20kerjasama%20dengan%20BUMDes%20Sirah%20Dayueh."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 font-bold py-4 px-10 rounded-full text-lg hover:bg-green-100 transition duration-300 transform hover:scale-105 shadow-xl inline-block"
          >
            Mulai Diskusi
          </a>
        </div>
      </section>
    );
}

export default Kontak;