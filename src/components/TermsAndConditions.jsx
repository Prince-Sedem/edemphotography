import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TermsAndConditions() {
  const [openIndex, setOpenIndex] = useState(null);

  const terms = [
    {
      title: "Booking & Payment",
      content:
      "A 50% deposit is required to confirm and secure your booking date. The remaining 50% balance must be paid before or on the scheduled photography date. A booking is only considered confirmed once the required deposit has been received.",
    },
    {
      title: "Transportation & Accommodation",
      content:
        "Prices does not include transportation and accommodation.",
    },
    {
      title: "Cancellation & Refund Policy",
      content:
        "The 50% booking deposit is non-refundable because it secures your date and prevents us from accepting another booking for the same period. If a client cancels after making the full payment, any eligible refund will be considered based on the services already provided and expenses incurred.",
    },
    {
      title: "Rescheduling",
      content:
        "Clients may request to reschedule their booking. Rescheduling is subject to our availability. We recommend giving as much notice as possible..",
    },
    {
      title: "Late Payment",
      content:
        "The remaining balance must be settled within the agreed payment period. Failure to complete payment may result in the booking being cancelled or photography services being suspended until payment is received.",
    },
    {
      title: "Additional Hours & Services",
      content:
        "Any additional photography hours or services requested beyond the selected package may attract additional charges. These charges will be communicated and agreed upon before the additional service is provided.",
    },
    {
      title: "Photo Delivery",
      content:
        "Edited photographs will be delivered through the agreed delivery method after the photography session and completion of the required payment. Delivery timelines may vary depending on the size and nature of the event.",
    },
    {
      title: "Client Cooperation",
      content:
        "Clients are expected to provide accurate event details and cooperate with the us during the session. Delays caused by the client or circumstances outside the our control may affect the amount of coverage available.",
    },
    {
      title: "Force Majeure",
      content:
        "In circumstances beyond our control, such as severe weather, emergencies, or other unforeseen events, reasonable efforts will be made to reschedule the booking. If rescheduling is not possible, both parties will discuss an appropriate resolution.",
    },
  ];

  const toggleTerm = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="terms"
      className="bg-gray-100 py-20 scroll-mt-28"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Please review our booking, payment, cancellation and
            photography service terms before confirming your session.
          </p>
        </motion.div>

        {/* Terms */}
        <div className="space-y-3">
          {terms.map((term, index) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggleTerm(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {term.title}
                </span>

                <span
                  className={`flex-shrink-0 text-xl text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-7 border-t border-gray-100 pt-4">
                      {term.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-gray-900 text-white rounded-2xl p-6"
        >
          <h3 className="font-semibold text-lg mb-2">
            Important
          </h3>

          <p className="text-gray-300 text-sm leading-6">
            By making a booking or payment, the client acknowledges
            and agrees to these Terms & Conditions. Please contact us
            if you have any questions or require clarification before
            making a booking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default TermsAndConditions;

