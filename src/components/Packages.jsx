import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Packages() {
  const [activeTab, setActiveTab] = useState("Corporate Event");

  // WhatsApp number
  const whatsappNumber = "233247552111";

  const packages = {
    "Corporate Event": [
      {
        name: "Within Accra",
        price: "GH₵ 2,000 - 2,500",
        features: [
          "Professional Event Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
      {
        name: "Outside Accra",
        price: "GH₵ 3,500",
        features: [
          "Professional Event Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
    ],

    "Engagements Only / Wedding Only": [
      {
        name: "Within Accra",
        price: "GH₵ 2,000 - 2,500",
        features: [
          "Professional Event Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
      {
        name: "Outside Accra",
        price: "GH₵ 3,500",
        features: [
          "Professional Event Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
    ],

    "Engagements + Wedding": [
      {
        name: "Within Accra",
        price: "GH₵ 4,000",
        popular: true,
        features: [
          "Engagement Coverage",
          "Wedding Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
      {
        name: "Outside Accra",
        price: "GH₵ 5,500",
        features: [
          "Engagement Coverage",
          "Wedding Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
    ],

    "Bachelorette / Birthday Shoot": [
      {
        name: "Within Accra",
        price: "GH₵ 1,200",
        features: [
          "Professional Shoot Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
      {
        name: "Outside Accra",
        price: "GH₵ 1,800",
        features: [
          "Professional Shoot Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
    ],

    Funeral: [
      {
        name: "Within Accra",
        price: "GH₵ 2,000 - 2,500",
        features: [
          "Professional Funeral Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
      {
        name: "Outside Accra",
        price: "GH₵ 3,500",
        features: [
          "Professional Funeral Coverage",
          "High-Quality Edited Photos",
          "Online Photo Gallery",
          "Professional Photo Editing",
        ],
      },
    ],
  };

  const tabs = [
    "Corporate Event",
    "Engagements Only / Wedding Only",
    "Engagements + Wedding",
    "Bachelorette / Birthday Shoot",
    "Funeral",
  ];

  // Creates the WhatsApp booking message
  const createWhatsAppLink = (pkg) => {
    const message = `Hello, I’m interested in booking photography services for a ${activeTab}. I’m looking at the ${pkg.name} option at ${pkg.price}. Please provide more details and availability.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section
      id="packages"
      className="relative py-20 scroll-mt-28 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('/images/pexels-umudicreative-17510126.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Reels Packages
          </h2>

          <p className="text-gray-200 mt-3 max-w-xl mx-auto">
            Choose the package that best suits your occasion and let us
            capture your special moments beautifully.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-lg"
                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Packages */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`grid grid-cols-1 ${
              packages[activeTab].length === 2
                ? "md:grid-cols-2 max-w-4xl mx-auto"
                : "md:grid-cols-3"
            } gap-6`}
          >
            {packages[activeTab].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow ${
                  pkg.popular ? "ring-2 ring-white" : ""
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <span className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}

                {/* Package Name */}
                <h3 className="text-xl font-bold text-gray-900">
                  {pkg.name}
                </h3>

                {/* Price */}
                <p className="text-2xl font-bold text-gray-900 mt-3">
                  {pkg.price}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-200 my-5" />

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="shrink-0 w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                {/* WhatsApp Booking Button */}
                <a
                  href={createWhatsAppLink(pkg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition"
                >
                  Book on WhatsApp
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Packages;