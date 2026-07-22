import { motion } from "framer-motion";
import {
  FaCameraRetro,
  FaClock,
  FaImage,
} from "react-icons/fa";

export default function WhyChooseUs() {

  const reasons = [
    {
      number: "01",
      icon: <FaCameraRetro />,
      title: "Professional Photography",
      description:
        "We combine creativity, experience, and modern photography techniques to capture authentic moments that tell your unique story.",
      bg: "bg-red-500",
    },

    {
      number: "02",
      icon: <FaClock />,
      title: "Reliable Service",
      description:
        "From consultation to final delivery, we provide a smooth, professional, and stress-free photography experience.",
      bg: "bg-yellow-400",
    },

    {
      number: "03",
      icon: <FaImage />,
      title: "High Quality Results",
      description:
        "We deliver beautifully edited, high-resolution images with exceptional attention to detail that preserve your memories.",
      bg: "bg-green-500",
    },
  ];


  return (
    <section
      id="why-us"
      className="bg-gray-100 py-28 px-6"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: false,
            amount: 0.3,
          }}

          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <motion.p
            initial={{
              opacity:0,
              y:20,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:false,
            }}

            transition={{
              duration:0.6,
            }}

            className="uppercase tracking-[5px] text-red-500 text-sm"
          >
            Why Choose Us
          </motion.p>



          <motion.h2
            initial={{
              opacity:0,
              y:30,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:false,
            }}

            transition={{
              duration:0.8,
              delay:0.2,
            }}

            className="text-4xl md:text-6xl font-bold text-gray-900 mt-5 leading-tight"
          >
            We Capture Moments That Last Forever
          </motion.h2>



          <motion.p
            initial={{
              opacity:0,
              y:30,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:false,
            }}

            transition={{
              duration:0.8,
              delay:0.4,
            }}

            className="text-gray-600 text-lg mt-6 leading-relaxed"
          >
            Every photograph tells a story. We focus on capturing genuine
            emotions, beautiful details, and unforgettable memories through
            creative and professional photography.
          </motion.p>


        </motion.div>





        {/* RIGHT CARDS */}

        <motion.div

          initial="hidden"

          whileInView="visible"

          viewport={{
            once:false,
            amount:0.2,
          }}

          variants={{
            hidden:{},

            visible:{
              transition:{
                staggerChildren:0.25,
              },
            },
          }}

          className="space-y-6"

        >


          {reasons.map((item,index)=>(


            <motion.div

              key={index}


              variants={{
                hidden:{
                  opacity:0,
                  y:80,
                  scale:0.9,
                },

                visible:{
                  opacity:1,
                  y:0,
                  scale:1,
                },
              }}


              transition={{
                duration:0.7,
                ease:"easeOut",
              }}


              whileHover={{
                y:-10,
                scale:1.03,
              }}


              className={`${item.bg} rounded-3xl p-6 flex gap-6 items-start shadow-xl cursor-pointer`}
            >



              {/* NUMBER */}

              <motion.div

                initial={{
                  opacity:0,
                  x:-20,
                }}

                whileInView={{
                  opacity:1,
                  x:0,
                }}

                transition={{
                  duration:0.5,
                }}

                className="text-4xl font-bold text-white/40"

              >

                {item.number}

              </motion.div>





              {/* ICON */}

              <motion.div

                initial={{
                  scale:0,
                  rotate:180,
                }}

                whileInView={{
                  scale:1,
                  rotate:0,
                }}

                transition={{
                  duration:0.6,
                  type:"spring",
                }}

                className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center text-xl shrink-0"

              >

                {item.icon}

              </motion.div>





              {/* TEXT */}

              <div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>


                <p className="text-white/90 mt-2 leading-relaxed">
                  {item.description}
                </p>


              </div>



            </motion.div>


          ))}


        </motion.div>


      </div>


    </section>
  );
}