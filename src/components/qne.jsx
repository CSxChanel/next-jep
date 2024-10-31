import { useRouter } from "next/router";
import { useState } from "react";

const Qne = ({ title, titleLink }) => {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleFaqRedirect = () => {
        router.push("/faq");
    };
    const handleTitleClick = () => {
        router.push(titleLink);
    };
    const handlePaketClick = () => {
        router.push("/produk-indihome");
    };

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const tanyaJawabData = [
        "Apa itu IndiHome?",
        "Apa itu myIndiHome?",
        "Apa itu add-on?",
    ];

    const jawaban = [
        <>
            <span
                onClick={handleTitleClick}
                className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
                {title}
            </span>{" "}
            adalah layanan digital yang menyediakan internet rumah, telepon
            rumah, dan TV Interaktif (IndiHome TV) dengan beragam{" "}
            <span
                onClick={handlePaketClick}
                className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
                pilihan paket
            </span>{" "}
            . Saat ini jaringan IndiHome sudah tersebar di seluruh wilayah
            Indonesia dan terus berinovasi untuk memenuhi kebutuhan internet
            yang lebih baik bagi masyarakat.
        </>,
        "myIndiHome adalah aplikasi yang digunakan untuk berlangganan IndiHome, aktivasi OTT Video Streaming, berlangganan berbagai fitur tambahan, melaporkan gangguan layanan IndiHome, cek tagihan, cek Poin myIndiHome, info pemakaian, serta layanan menarik lainnya.",
        "Add-on adalah berbagai layanan tambahan yang tersedia di IndiHome dan bisa diaktifkan oleh pelanggan sesuai kebutuhan dan keinginan.",
    ];

    return (
        <div className="max-w-xl mx-auto p-4 mt-24">
            <h2 className="text-3xl font-bold text-center mb-6">Tanya Jawab</h2>
            <div className="bg-white shadow-lg rounded-lg mb-6">
                {tanyaJawabData.map((question, index) => (
                    <div key={index} className="border-b">
                        <button
                            onClick={() => toggleAnswer(index)}
                            className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                        >
                            <span className="font-semibold">{question}</span>
                            <span className="text-red-500">
                                {activeIndex === index ? "▲" : "▼"}
                            </span>
                        </button>
                        {/* Tampilkan jawaban jika indeks aktif sama dengan indeks pertanyaan */}
                        {activeIndex === index && (
                            <div className="p-4 text-gray-700">
                                {jawaban[index]}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 rounded-lg flex justify-between items-center cursor-pointer"
                onClick={handleFaqRedirect}
            >
                <div>
                    <p className="font-semibold">
                        Cek pertanyaan lain yang sering ditanyakan
                    </p>
                    <span className="text-sm">Selengkapnya</span>
                </div>
                <span className="text-2xl font-bold">➔</span>
            </div>
        </div>
    );
};

export default Qne;
