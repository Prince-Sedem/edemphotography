import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaSearchPlus,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Portfolio() {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const portfolio = [
    {
      title: "Wedding Photography",
      images: [
        "/images/wed-photo1.jpg",
        "/images/wed-photo2.jpg",
      ],
    },

    {
      title: "Portrait Sessions",
      images: [
        "/images/portrait-photo1.jpg",
        "/images/portrait-photo2.jpg",
      ],
    },

    {
      title: "Event Photography",
      images: [
        "/images/event-photo1.jpg",
        "/images/event-photo2.jpg",
      ],
    },

    {
      title: "Fashion Photography",
      images: [
        "/images/fashion-photo1.jpg",
        "/images/fashion-photo2.jpg",
      ],
    },

    {
      title: "Corporate Photography",
      images: [
        "/images/corporate-photo1.jpg",
        "/images/corporate-photo2.jpg",
      ],
    },

    {
      title: "Travel Photography",
      images: [
        "/images/travel-photo1.jpg",
        "/images/travel-photo2.jpg",
      ],
    },
  ];


  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedGallery.images.length - 1 ? 0 : prev + 1
    );
  };


  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedGallery.images.length - 1 : prev - 1
    );
  };


  return (
    <section id="portfolio" className="bg-gray-100 py-28 px-6">
      <div className="max-w-7xl mx-auto">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-red-500 text-sm">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black mt-4">
            Stories Captured Through Our Lens
          </h2>

          <p className="text-gray-800 max-w-3xl mx-auto mt-6 text-lg">
            Explore our collection of breathtaking photographs showcasing
            weddings, portraits, events, and unforgettable moments captured
            with creativity, passion, and attention to detail.
          </p>
        </motion.div>



        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-6">

          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                index === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
              onClick={() => {
                setSelectedGallery(item);
                setCurrentImage(0);
              }}
            >

              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />


              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition" />


              <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/80 to-transparent flex justify-between items-center">

                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>


                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-black">
                  <FaSearchPlus />
                </div>

              </div>

            </motion.div>
          ))}

        </div>



        {/* Lightbox */}
        <AnimatePresence>
          {selectedGallery && (

            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              {/* Close */}
              <button
                onClick={() => setSelectedGallery(null)}
                className="absolute top-8 right-8 text-white text-3xl hover:text-red-500"
              >
                <FaTimes />
              </button>



              {/* Previous */}
              <button
                onClick={prevImage}
                className="absolute left-6 md:left-10 text-white bg-black/40 hover:bg-red-500 hover:text-black w-14 h-14 rounded-full flex items-center justify-center transition"
              >
                <FaChevronLeft size={20}/>
              </button>



              {/* Image */}
              <motion.img
                key={currentImage}
                src={selectedGallery.images[currentImage]}
                initial={{
                  opacity:0,
                  scale:0.95
                }}
                animate={{
                  opacity:1,
                  scale:1
                }}
                transition={{
                  duration:0.4
                }}
                className="max-h-[85vh] max-w-[85vw] rounded-3xl object-cover"
              />



              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-6 md:right-10 text-white bg-black/40 hover:bg-red-500 hover:text-black w-14 h-14 rounded-full flex items-center justify-center transition"
              >
                <FaChevronRight size={20}/>
              </button>



              {/* Caption */}
              <div className="absolute bottom-10 text-center">

                <h3 className="text-white text-2xl font-semibold">
                  {selectedGallery.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {currentImage + 1} / {selectedGallery.images.length}
                </p>

              </div>


            </motion.div>

          )}
        </AnimatePresence>


      </div>
    </section>
  );
}