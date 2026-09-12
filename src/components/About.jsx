import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="about">
      <div className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div data-aos="fade-up">
              <h4 className="bg-red-600 w-fit px-5 py-1 font-bold text-white text-xl rounded-md">
                ABOUT US
              </h4>

              <h2 className="text-4xl md:text-5xl font-bold text-white my-4 leading-tight">
                Meet the creative mind capturing unforgettable moments.
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed">
                I'm a passionate photographer dedicated to capturing authentic
                emotions and unique perspectives. With years of experience in
                portrait, wedding and commercial photography, I focus on telling
                visual stories that leave a lasting impression.
              </p>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div
                data-aos="fade-up"
                className="bg-gray-800 rounded-xl shadow-lg p-5 text-center border border-gray-700"
              >
                <h3 className="text-3xl font-bold text-white">10+</h3>
                <p className="text-gray-300 font-medium">Years of Experience</p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-gray-800 rounded-xl shadow-lg p-5 text-center border border-gray-700"
              >
                <h3 className="text-3xl font-bold text-white">100+</h3>
                <p className="text-gray-300 font-medium">Happy Clients</p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-gray-800 rounded-xl shadow-lg p-5 text-center border border-gray-700"
              >
                <h3 className="text-3xl font-bold text-white">400+</h3>
                <p className="text-gray-300 font-medium">Photo Shoots</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Overlapping Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-105"
          >
            {/* Main Image */}
            <img
              data-aos="zoom-in"
              src="/images/pexels-umudicreative-17510126.jpg"
              alt="Photography Session"
              className="absolute bottom-0 left-0 w-[60%] h-[80%] object-cover rounded-2xl shadow-xl"
            />

            {/* Overlapping Image */}
            <img
              data-aos="zoom-out"
              src="/images/edem-about.jpg"
              alt="Professional Photographer"
              className="absolute top-0 right-0 w-[60%] h-[80%] object-cover object-[center_10%] rounded-2xl shadow-2xl border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
