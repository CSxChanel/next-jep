import Banner from "@/components/Banner";
import Head from "next/head";
import { useState } from "react";

const Faq = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Indihome by-Telkomsel | FAQ",

        description:
            "Promo internet indihome Pendaftaran biaya Gratis,Pemasangan indihome mencakup semua Area.",
        sku: "0446310786",
        mpn: "925872",
        datePublished: "2024-08-15",
        brand: {
            "@type": "Brand",
            name: "IndiHome",
        },
        manufacturer: {
            "@type": "Organization",
            name: "PT Telkom Indonesia",
        },
        review: {
            "@type": "Review",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5.0",
                bestRating: "5",
            },
            author: {
                "@type": "Person",
                name: "Cecep Sudrajat",
            },
            reviewBody:
                "Layanan yang sangat memuaskan, kecepatan internet stabil dan dukungan pelanggan sangat responsif.",
            datePublished: "2024-08-13",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "249855",
        },
        offers: {
            "@type": "Offer",

            priceCurrency: "IDR",
            price: "220000",
            priceValidUntil: "2024-12-31",
            priceValidFrom: "2024-08-15",
            validFrom: "2024-08-15",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            warranty: "Garansi 1 tahun untuk perangkat",
            deliveryLeadTime: {
                "@type": "QuantitativeValue",
                minValue: 1,
                maxValue: 3,
                unitCode: "DAY",
            },
            seller: {
                "@type": "Organization",
                name: "IndiHome",
            },
            shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                    "@type": "MonetaryAmount",
                    value: "0",
                    currency: "IDR",
                },
                shippingDestination: {
                    "@type": "DefinedRegion",
                    addressCountry: "ID",
                },
                deliveryTime: {
                    "@type": "ShippingDeliveryTime",
                    handlingTime: {
                        "@type": "QuantitativeValue",
                        minValue: 1,
                        maxValue: 3,
                        unitCode: "DAY",
                    },
                    transitTime: {
                        "@type": "QuantitativeValue",
                        minValue: 0,
                        maxValue: 0,
                        unitCode: "DAY",
                    },
                },
            },
        },
        additionalProperty: [
            {
                "@type": "PropertyValue",
                name: "Kecepatan Internet",
                value: "30 Mbps",
            },
            {
                "@type": "PropertyValue",
                name: "Jenis Koneksi",
                value: "Fiber Optic",
            },
        ],

        hasFAQPage: {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Apakah kelebihan IndiHome setelah dialihkan ke Telkomsel?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Dengan mengintegrasikan layanan IndiHome yang menawarkan koneksi internet tetap melalui serat optik serta dengan jaringan seluler broadband yang luas, memungkinkan pelanggan IndiHome dan Telkomsel untuk mendapatkan pengalaman konektivitas broadband yang mulus dan pengalaman digital yang lebih baik di dalam maupun di luar rumah, tanpa terikat pada satu teknologi jaringan tertentu. Ke depannya, Telkomsel juga akan mengembangkan beragam penawaran produk dan layanan yang lebih terjangkau dan bernilai tambah, yang mengintegrasikan seluruh keunggulan, baik layanan fixed broadband IndiHome maupun layanan mobile broadband Telkomsel, seperti Orbit, Telkomsel PraBayar, dan Halo.",
                    },
                },
            ],
        },
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqQuestion = [
        "Apakah IndiHome pindah ke Telkomsel?",
        "Apakah kelebihan IndiHome setelah dialihkan ke Telkomsel?",
        "Apakah pelanggan lama IndiHome harus daftar ulang ke Telkomsel?",
        "Apakah ada perubahan cara bayar (nomor rekening/bank)?",
        "Apakah ada perubahan produk/tarif layanan IndiHome?",
        "Apakah billing/tagihan IndiHome akan disatukan dengan tagihan Telkomsel?",
        "Apakah Poin myIndiHome saya masih dapat digunakan? Apakah Poin myIndiHome akan dialihkan menjadi Telkomsel Poin?",
        "Apakah benefit HVC (High Value Customer) IndiHome masih dapat digunakan di Telkomsel? Apakah HVC IndiHome akan disatukan dengan HVC Telkomsel?",
        "Saya pelanggan Telkomsel dan IndiHome, apakah terdapat penawaran bundling?",
        "Apakah aplikasi myIndiHome akan digabung dengan MyTelkomsel?",
        "Apakah telepon rumah saya akan dipindahkan ke Telkomsel?",
        "Apakah nomor telepon rumah saya akan berubah?",
        "Apakah GraPARI Telkomsel melayani IndiHome?",
        "Apakah Plasa Telkom masih melayani IndiHome?",
        "Apakah Plasa Telkom melayani layanan Telkomsel?",
        "Di mana saja saya bisa menghubungi layanan pelanggan IndiHome?",
        "Bagaimana saya tahu informasi perpindahan IndiHome ke Telkomsel?",
        "Bagaimana jika saya tidak ingin pindah ke Telkomsel, apa yang harus saya lakukan?",
        "Apakah ada perubahan bentuk tagihan IndiHome?",
        "Apa saja yang berubah dari tagihan IndiHome?",
        "Apakah tagihan IndiHome by Telkomsel berlaku sebagai Faktur Pajak?",
        "Mengapa saya menerima tagihan di awal Juli 2023 dengan format Telkom?",
        "Mengapa saya menerima tagihan di awal Agustus 2023 dengan tanggal tagihan 31 Juli 2023?",
        "Apakah ada perubahan channel/outlet pembayaran?",
    ];
    const faqAnswer = [
        "Ya, mulai 1 Juli 2023 layanan IndiHome secara resmi bergabung menjadi bagian dari Telkomsel.",
        "Dengan mengintegrasikan layanan IndiHome yang menawarkan koneksi internet tetap melalui serat optik serta dengan jaringan seluler broadband yang luas, memungkinkan pelanggan IndiHome dan Telkomsel untuk mendapatkan pengalaman konektivitas broadband yang mulus dan pengalaman digital yang lebih baik di dalam maupun di luar rumah, tanpa terikat pada satu teknologi jaringan tertentu. Ke depannya, Telkomsel juga akan mengembangkan beragam penawaran produk dan layanan yang lebih terjangkau dan bernilai tambah, yang mengintegrasikan seluruh keunggulan, baik layanan fixed broadband IndiHome maupun layanan mobile broadband Telkomsel, seperti Orbit, Telkomsel PraBayar, dan Halo.",
        "Tidak, pelanggan IndiHome yang dialihkan ke Telkomsel tidak perlu melakukan daftar ulang, layanan IndiHome yang digunakan akan terdaftar dalam pengelolaan Telkomsel.",
        "Tidak ada perubahan cara pembayaran billing/tagihan IndiHome setelah IndiHome bergabung dengan Telkomsel.",
        "Tidak ada perubahan paket produk/tarif layanan IndiHome setelah IndiHome bergabung dengan Telkomsel. Pelanggan akan mendapatkan informasi secara berkala jika terdapat perubahan atau penawaran produk lebih lanjut.",
        "Billing/tagihan IndiHome saat ini belum disatukan dengan Telkomsel Halo. Kami akan menginformasikan apabila ada perubahan tagihan IndiHome dan Telkomsel.",
        "Poin myIndiHome masih bisa digunakan (tidak hangus) sesuai dengan Syarat dan Ketentuan yang berlaku yang terdapat di aplikasi masing-masing dan tetap dapat digunakan sesuai persyaratan yang berlaku selama ini. Saat ini, belum ada penggabungan Poin myIndiHome dan Telkomsel Poin. Jika ada perubahan akan kami informasikan kepada pelanggan IndiHome.",
        "Benefit HVC IndiHome masih dapat digunakan sesuai syarat dan ketentuan yang berlaku. Saat ini masih belum ada penggabungan segmen HVC IndiHome dan Telkomsel. Jika ada perubahan, akan kami informasikan.",
        "Saat ini telah hadir paket Telkomsel One, sebagai penawaran bundling antara fixed broadband dan mobile.",
        "Telepon rumah adalah salah satu layanan IndiHome yang dialihkan pengelolaannya ke Telkomsel. Tidak ada perubahan paket pada pelanggan.",
        "Saat ini telah hadir fitur baru untuk memantau akun IndiHome di aplikasi MyTelkomsel bagi Anda yang nomor Telkomselnya terdaftar pada profil IndiHome.",
        "Saat ini belum ada perubahan nomor telepon rumah. Jika ada perubahan akan kami informasikan kepada pelanggan.",
        "Mulai 1 Juli 2023 seluruh GraPARI Telkomsel sudah siap memberikan informasi dalam melayani pelanggan IndiHome.",
        "Saat ini Plasa Telkom masih melayani pelanggan IndiHome.",
        "Mulai 1 Juli 2023 seluruh Plasa Telkom sudah siap memberikan informasi dalam melayani pelanggan Telkomsel.",
        "Layanan pelanggan IndiHome dapat dihubungi melalui: Call Center 188 dan 147 Twitter, Instagram, Facebook: @IndiHomeCare Website IndiHome WhatsApp Email: cs@telkomsel.com GraPARI Telkomsel dan Plasa Telkom Group",
        "Anda akan mendapatkan informasi tentang pengalihan layanan IndiHome ke Telkomsel melalui kontak yang Anda gunakan saat registasi (Email/WhatsApp/SMS) atau bisa menghubungi layanan pelanggan IndiHome.",
        "Anda dapat menyampaikan lebih lanjut mengenai kendala yang dihadapi melalui layanan pelanggan IndiHome untuk diteruskan ke unit terkait.",
        "Perubahan tagihan IndiHome mengakomodasi peralihan layanan IndiHome dari Telkom ke Telkomsel berlaku pada 1 Agustus 2023.",
        "Secara prinsip tagihan IndiHome by Telkomsel berisi informasi yang sama dengan tagihan sebelumnya namun dengan perubahan format, pencatuman NPWP/NIK pelanggan, pencantuman periode pemakaian, pencantuman tanggal tagihan, dan penerbitan bukti pembayaran di periode tagihan berikutnya (disertai penerapan meterai elektronik untuk pembayaran lebih dari Rp5 juta). ",
        "Tagihan IndiHome berlaku sebagai Faktur Pajak dengan nomor tagihan/invoice sebagai nomor Faktur Pajak.",
        "Tagihan yang terbit pada awal Juli 2023 merujuk pada periode pemakaian 1 – 30 Juni 2023 yang masih diterbitkan oleh Telkom.",
        "Untuk kemudahan identifikasi periode, tagihan IndiHome akan mencantumkan tanggal tagihan sesuai akhir bulan pemakaian. Untuk pemakaian 1 – 31 Juli 2023, akan diterbitkan oleh Telkomsel pada awal Agustus 2023 dengan tanggal tagihan 31 Juli 2023.",
        "Per 1 Juli 2023, semua channel/outlet pembayaran saat ini masih tetap bisa digunakan dan juga di semua GraPARI Telkomsel.",
    ];

    return (
        <>
            <Head>
                <title>IndiHome by-Telkomsel | FAQ</title>
                <link
                    rel="canonical"
                    href="https://indihome-by-telkomsel.com/faq"
                />
                <meta property="og:type" content="website" />
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Head>
            <Banner title="FAQ" />
            <div className="max-w-3xl mx-auto p-4">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Tanya Jawab IndiHome by Telkomsel
                </h2>
                <div className="bg-white shadow-lg rounded-lg">
                    {faqQuestion.map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left p-4 border-b focus:outline-none"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">{faq}</span>
                                    <span>
                                        {activeIndex === index ? "-" : "+"}
                                    </span>
                                </div>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 text-gray-700">
                                    {faqAnswer[index]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Faq;
