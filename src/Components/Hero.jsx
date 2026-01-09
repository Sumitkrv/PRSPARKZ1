import React from "react";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else {
      // Fallback: Log an error or navigate to contact page
      console.error("Contact section not found");
      // If using React Router, you could do:
      // navigate('/contact');
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden mt-20">
      {/* HERO VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="
          absolute inset-0 w-full h-full
          object-contain
          md:object-cover
          object-center
          bg-black
        "
      >
        <source src="/sumit3.mp4" type="video/mp4" />
        {/* Add fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* BUTTONS AT BOTTOM */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex items-center justify-center gap-3 md:gap-6 px-4">
        <button 
          onClick={scrollToContact}
          className="
            px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl 
            font-semibold text-sm md:text-lg
            shadow-2xl hover:shadow-3xl
            hover:scale-105
            transition-all duration-300 ease-in-out
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
          "
          style={{
            background: 'linear-gradient(135deg, #8659D9, #9A6FFF)',
            color: '#FFFFFF'
          }}
          aria-label="Start a project and navigate to contact section"
        >
          Start a Project
        </button>

        <button 
          onClick={scrollToContact}
          className="
            px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl 
            font-semibold text-sm md:text-lg
            shadow-xl
            hover:scale-105
            transition-all duration-300 ease-in-out
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
          "
          style={{
            border: '2px solid #9A6FFF',
            color: '#FFFFFF',
            background: 'transparent'
          }}
          aria-label="Book a call and navigate to contact section"
        >
          Book a Call
        </button>
      </div>
    </section>
  );
}