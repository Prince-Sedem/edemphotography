import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-[#07152b] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 blur-3xl rounded-full"></div>


      {/* MAIN FOOTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">


        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 border-b border-white/10 pb-14">


          {/* COMPANY INFO */}
          <div>

            <h2 className="text-3xl font-bold mb-5">
              Your<span className="text-red-500"> Studio</span>
            </h2>


            <p className="text-gray-400 leading-relaxed">
              We capture timeless moments through creative photography.
              From weddings and portraits to events and lifestyle sessions,
              we transform memories into beautiful visual stories.
            </p>


            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>


              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-pink-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>


              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-black transition flex items-center justify-center"
              >
                <FaXTwitter />
              </a>


              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-blue-500 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>



          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>


            <ul className="space-y-4 text-gray-400">

              <li>
                <a
                  href="#home"
                  className="hover:text-red-500 transition"
                >
                  Home
                </a>
              </li>


              <li>
                <a
                  href="#about"
                  className="hover:text-red-500 transition"
                >
                  About Us
                </a>
              </li>


              <li>
                <a
                  href="#portfolio"
                  className="hover:text-red-500 transition"
                >
                  Portfolio
                </a>
              </li>


              <li>
                <a
                  href="#booking"
                  className="hover:text-red-500 transition"
                >
                  Book A Session
                </a>
              </li>


              <li>
                <a
                  href="#contact"
                  className="hover:text-red-500 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>




          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>


            <div className="space-y-5 text-gray-400">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <p>Accra, Ghana</p>
              </div>


              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-red-500" />
                <p>+233 53 374 1122</p>
              </div>


              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500" />
                <p>info@edemphotography.com</p>
              </div>

            </div>

          </div>




          {/* NEWSLETTER */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Stay Connected
            </h3>


            <p className="text-gray-400 mb-6">
              Subscribe for photography updates, recent shoots,
              special offers, and creative inspiration.
            </p>



            <div className="relative">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 pr-14 text-white placeholder:text-gray-400 outline-none focus:border-red-500"
              />


              <button
                className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 transition flex items-center justify-center"
              >
                <FaPaperPlane />
              </button>

            </div>

          </div>


        </div>




        {/* Bottom Bar */}
        <div className="border-t border-gray-700">

          <div className="max-w-7xl mx-auto px-7 mt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-sm">

            <p>
              &copy; {new Date().getFullYear()} Your Studio.
              All rights reserved.
            </p>


            <p>
              <span className="font-semibold">
                Developed by
              </span>{" "}

              <a
                href="mailto:princesedem@yahoo.com"
                className="underline hover:text-white transition"
              >
                Prince Sedem
              </a>

            </p>

          </div>

        </div>


      </div>

    </footer>
  );
}

export default Footer;