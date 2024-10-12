import Banner from "@/components/Banner";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import MapImage from "@/components/MapsImg/MapImage";
import Head from "next/head";
import { useRouter } from "next/router";

function Balaraja() {
    const router = useRouter();
    const balaraja = {
        path: "indihome-balaraja",
        title: "IndiHome Balaraja",
        pageTitle: "Registrasi IndiHome Balaraja - Indihome Balaraja",
        description:
            "Registrasi IndiHome Balaraja Bisa langsung Melalui marketing resmi indihome. indihome Balaraja memberikan paket promo hanya di wilayah indihome Balaraja yang tidak semua wilayah tersedia paket promo Paling Murah.",
        conten: "balaraja",
        buttonLabel: "Lihat Semua Harga",
        onClick: () => {
            router.push("/produk-indihome");
        }
    };

    const pageUrl = `https://indihome-area.com/${balaraja.path}`;

    const ogImage = "https://indihome-area.com/image1.png";

    //metadat schema produk
    const structuredData = {
        "@context": "https://schema.org",
    "@type": "Product",
    name: "Indihome Area | Produk indihome",
    image: ogImage,
    description:
        "Promo internet indihome Pendaftaran biaya Gratis,Pemasangan indihome mencakup semua Area.",
    sku: "0446310786",
    mpn: "925872",
    datePublished: "2024-08-15",
    brand: {
        "@type": "Brand",
        name: "IndiHome"
    },
    manufacturer: {
        "@type": "Organization",
        name: "PT Telkom Indonesia"
    },
    review: {
        "@type": "Review",
        reviewRating: {
            "@type": "Rating",
            ratingValue: "5.0",
            bestRating: "5"
        },
        author: {
            "@type": "Person",
            name: "Cecep Sudrajat"
        },
        reviewBody:
            "Layanan yang sangat memuaskan, kecepatan internet stabil dan dukungan pelanggan sangat responsif.",
        datePublished: "2024-08-13"
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "249855"
    },
    offers: {
        "@type": "Offer",
        url: pageUrl,
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
            unitCode: "DAY"
        },
        seller: {
            "@type": "Organization",
            name: "IndiHome"
        },
        shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
                "@type": "MonetaryAmount",
                value: "0",
                currency: "IDR"
            },
            shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "ID"
            },
            deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                    "@type": "QuantitativeValue",
                    minValue: 1,
                    maxValue: 3,
                    unitCode: "DAY"
                },
                transitTime: {
                    "@type": "QuantitativeValue",
                    minValue: 0,
                    maxValue: 0,
                    unitCode: "DAY"
                }
            }
        }
    },
    additionalProperty: [
        {
            "@type": "PropertyValue",
            name: "Kecepatan Internet",
            value: "30 Mbps"
        },
        {
            "@type": "PropertyValue",
            name: "Jenis Koneksi",
            value: "Fiber Optic"
        }
    ],

    hasFAQPage: {
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Apa itu Indihome?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Indihome adalah layanan internet fiber optic dari PT Telkom Indonesia."
                }
            }
        ]
    }
    };

    return (
        <>
            <Head>
                <title>{balaraja.pageTitle}</title>
                <meta name="description" content={balaraja.description} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={balaraja.pageTitle} />
                <meta
                    property="og:description"
                    content={balaraja.description}
                />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={balaraja.pageTitle} />
                <meta
                    name="twitter:description"
                    content={balaraja.description}
                />
                <meta name="twitter:image" content={ogImage} />
                <meta
                    name="keywords"
                    content="indihome, internet, pendaftaran, indihome-cikupa, indihome-balaraja, indihome-tigaraksa"
                />
                {/* Robots meta tags */}
                <meta name="robots" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
                />
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Head>
            <Banner title={balaraja.title} description={balaraja.description} />
            <InternetPromo
                title={balaraja.title}
                path={balaraja.path}
                onClick={balaraja.onClick}
                buttonLabel={balaraja.buttonLabel}
            />
            <MapImage />
            <BannerImgSlider />
        </>
    );
}

export default Balaraja;
