import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Usaha from "./components/Usaha";
import KenapaKami from "./components/KenapaKami";
import Mitra from "./components/Mitra";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Tentang />
        <Usaha />
        <KenapaKami />
        <Mitra />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}

export default App;
