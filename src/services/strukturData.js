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
