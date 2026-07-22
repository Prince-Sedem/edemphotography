function Hero() {
  const createMailTo = (subject, message) => {
    return `mailto:info@glsinc.org?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage:
          "url('/images/pexels-theshuttervision-12551959.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16">
        {/* GRID START */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE (TEXT) */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold leading-tight mt-4">
              Professional photography that turns real moments into timless visual memories. 

            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Explore a curated of portraits, events, lifestyle and commercial photography crafted with creativity and precision.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-5 flex-wrap">
              <a
              href="#portfolio"
                className="px-4 py-2 bg-red-500 rounded-xl cursor-pointer  text-xs font-medium hover:bg-red-600 transition"
              >
                View Portfolio
              </a>

              <a
              href="#booking"
                className="px-4 py-2 bg-green-500 rounded-xl cursor-pointer text-xs font-medium hover:bg-green-600 transition"
              >
                Book Now
              </a>
            </div>
          </div>

        </div>
        {/* GRID END */}
      </div>
    </section>
  );
}

export default Hero;
