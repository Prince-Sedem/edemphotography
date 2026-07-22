import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "Wedding Photography",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleBooking = (e) => {
    e.preventDefault();


    const whatsappNumber = "233533741122"; // Replace with your WhatsApp number


    const message = `
📸 *Photography Booking Request*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📞 Phone: ${formData.phone}

📅 Preferred Date: ${formData.date}

📷 Service: ${formData.service}

💬 Message:
${formData.message}

I would like to book a photography session.
    `;


    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;


    window.open(whatsappURL, "_blank");
  };


  return (
    <section
      id="booking"
      className="relative py-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/pexels-umudicreative-17510126.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/70"></div>


      <div className="relative max-w-6xl mx-auto">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >

          <p className="uppercase tracking-[5px] text-red-500 text-sm">
            Book A Session
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Let's Capture Your Special Moments
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-5 text-lg">
            Whether it is a wedding, portrait session, event, or travel
            photography, we are ready to preserve your unforgettable moments.
          </p>

        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
        >


          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >


            {/* Name */}
            <div>
              <label className="text-white font-medium">
                Full Name
              </label>

              <div className="flex items-center bg-gray-700 rounded-lg mt-2 px-4">

                <FaUser className="text-red-500 mr-3"/>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-transparent py-3 text-white outline-none"
                />

              </div>
            </div>



            {/* Email */}
            <div>
              <label className="text-white font-medium">
                Email Address
              </label>

              <div className="flex items-center bg-gray-700 rounded-lg mt-2 px-4">

                <FaEnvelope className="text-red-500 mr-3"/>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-transparent py-3 text-white outline-none"
                />

              </div>
            </div>



            {/* Phone */}
            <div>
              <label className="text-white font-medium">
                Phone Number
              </label>

              <div className="flex items-center bg-gray-700 rounded-lg mt-2 px-4">

                <FaPhone className="text-red-500 mr-3"/>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+233..."
                  required
                  className="w-full bg-transparent py-3 text-white outline-none"
                />

              </div>
            </div>



            {/* Date */}
            <div>
              <label className="text-white font-medium">
                Preferred Date
              </label>

              <div className="flex items-center bg-gray-700 rounded-lg mt-2 px-4">

                <FaCalendarAlt className="text-red-500 mr-3"/>

                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  className="w-full bg-transparent py-3 text-white outline-none"
                />

              </div>
            </div>



            {/* Service */}
            <div className="md:col-span-2">

              <label className="text-white font-medium">
                Photography Service
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white rounded-lg mt-2 px-4 py-3"
              >
                <option>Wedding Photography</option>
                <option>Portrait Session</option>
                <option>Event Photography</option>
                <option>Fashion Photography</option>
                <option>Corporate Photography</option>
                <option>Travel Photography</option>

              </select>

            </div>



            {/* Message */}
            <div className="md:col-span-2">

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Describe your photography needs..."
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3"
              />

            </div>



            <div className="md:col-span-2 text-center">

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-full transition"
              >
                Book Your Photography Session
              </button>

            </div>


          </form>


        </motion.div>

      </div>

    </section>
  );
}