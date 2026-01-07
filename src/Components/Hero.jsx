import React from "react";

export default function Hero() {
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
        <source src="/sumit1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      {/* BUTTONS AT BOTTOM */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex items-center justify-center gap-3 md:gap-6 px-4">
        <button 
          className="
            px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl 
            font-semibold text-sm md:text-lg
            shadow-2xl hover:shadow-3xl
            hover:scale-105
            transition-all duration-300 ease-in-out
            active:scale-95
          "
          style={{
            background: 'linear-gradient(135deg, #8659D9, #9A6FFF)',
            color: '#FFFFFF'
          }}
        >
          Start a Project
        </button>

        <button 
          className="
            px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl 
            font-semibold text-sm md:text-lg
            shadow-xl
            hover:scale-105
            transition-all duration-300 ease-in-out
            active:scale-95
          "
          style={{
            border: '2px solid #9A6FFF',
            color: '#FFFFFF',
            background: 'transparent'
          }}
        >
          Book a Call
        </button>
      </div>
    </section>
  );
}
