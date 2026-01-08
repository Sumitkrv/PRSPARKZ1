import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const logosRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const logoBrands = [
    { name: "Moon7", logo: "/images/Logos/moon7-logo1-.png" },
    { name: "PR Sparkz", logo: "/images/Logos/pr sparkz final logo_1.png" },
    { name: "TP Logo", logo: "/images/Logos/tp-logo-ph.png" },
    { name: "Vortex", logo: "/images/Logos/vortex logo.png" },
    { name: "Yellow", logo: "/images/Logos/yellow.png" },
    { name: "Vibhu Kitchen Equipments", logo: "/images/Logos/vibhu.png" }
  ];

  // Duplicate logos for seamless loop
  const allLogos = [...logoBrands, ...logoBrands, ...logoBrands];

  return (
    <div ref={containerRef} id="clients" className="relative w-full overflow-hidden">
      {/* Video Hero Section */}
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
          <source src="/sumit4.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Logo Marquee Section */}
      <div className="relative py-16 overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center px-8"
        >
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8666A5] mb-4" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Trusted By Leading Brands
          </h3>
          <p className="text-lg md:text-xl text-[#6b4d7a] max-w-2xl mx-auto">
            Partnering with industry leaders to create exceptional results
          </p>
        </motion.div>

        {/* Infinite Logo Marquee */}
        <div className="relative py-8">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-20 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-20 pointer-events-none bg-gradient-to-l from-white to-transparent" />
          
          <motion.div
            ref={logosRef}
            className="flex space-x-8 md:space-x-12"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {allLogos.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="group relative flex-shrink-0 w-40 h-32 md:w-48 md:h-36 rounded-xl backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer bg-white"
                style={{
                  border: '1px solid #8666A5', // Thin purple outline
                  boxShadow: '0 2px 12px rgba(134, 102, 165, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.05, // Reduced scale for subtle effect
                  y: -4,
                  boxShadow: '0 6px 20px rgba(134, 102, 165, 0.15)',
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => setHoveredLogo(brand.name)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                {/* Logo Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Actual Logo Image */}
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  
                  {/* Subtle Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      border: '1px solid transparent',
                    }}
                    animate={{
                      borderColor: hoveredLogo === brand.name ? 'rgba(134, 102, 165, 0.3)' : 'transparent',
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Clients;