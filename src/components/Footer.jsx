import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold">BUMDES SIRAH DAYUEH</h4>
                        <p className="text-gray-400 text-sm">Badan Usaha Milik Desa</p>
                        <p className="text-gray-400 text-sm">
                            Cibodas, Rumpin, Bogor, Jawa Barat, Indonesia
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-gray-400">
                            &copy; {year} BUMDES SIRAH DAYUEH. Semua hak cipta dilindungi.
                        </p>
                        <div className="mt-2">
                            <p className="text-gray-500 text-sm">
                                Media sosial akan segera hadir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
