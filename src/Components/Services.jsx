import React, { useState, useEffect, useRef } from "react";
import { Monitor, Palette, Package, Target, PenTool, Share2, Newspaper, Calendar, Sparkles, ArrowRight, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCarousel, setActiveCarousel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Check for device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Parallax scroll effect - adjust for mobile
  useEffect(() => {
    if (isMobile) return; // Disable parallax on mobile for performance
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Metallic Purple Color Palette
  const theme = {
    metallicPurple: "#7B68EE",
    deepPurple: "#5D3FD3",
    lightPurple: "#9370DB",
    silverPurple: "#B39DDB",
    amethyst: "#9B59B6",
    metallicAccent: "#E6E6FA",
    darkPurple: "#4B0082",
    platinumPurple: "#D8BFD8",
    metallicText: "#1a1a1a",
    metallicBorder: "#C0C0C0"
  };

  const services = [
    {
      id: 1,
      title: "CAMPAIGN STRATEGY & PLANNING",
      shortTitle: "Strategy & Planning",
      description: "High-impact campaign strategies designed to reach the right audience at the right time. From planning to execution, every move is intentional and result-focused.",
      Icon: Target,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 2,
      title: "DIGITAL PERFORMANCE ENGINE",
      shortTitle: "Digital Performance",
      description: "Data-driven marketing built for real, scalable growth. We optimize every stage of your funnel to drive conversions and ROI. Clear strategy. Measurable results.",
      Icon: Monitor,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
    {
      id: 3,
      title: "SOCIAL MEDIA POWERHUB",
      shortTitle: "Social Media",
      description: "Engaging, relatable content that builds a strong and consistent brand voice. We focus on real engagement, not vanity numbers. Human, active, and trusted.",
      Icon: Share2,
      image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=800&q=80",
    },
    {
      id: 4,
      title: "INFLUENCE & CELEBRITY CONNECT",
      shortTitle: "Influence & Celeb",
      description: "Strategic collaborations with influencers and celebrities who truly fit your brand. Chosen for authenticity, relevance, and impact. Visibility, trust, and authority — amplified.",
      Icon: Star,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    },
    {
      id: 5,
      title: "BRAND IDENTITY LAB",
      shortTitle: "Brand Identity",
      description: "Premium brand visuals crafted to stand out and stay memorable. From logos to full identity systems, everything is built with clarity and personality. No templates — only thoughtful design.",
      Icon: Palette,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
      id: 6,
      title: "WEB & APP EXPERIENCE STUDIO",
      shortTitle: "Web & App Studio",
      description: "Fast, clean, user-friendly websites and apps built to perform. Designed for smooth experiences, trust, and conversions. Your digital presence, future-ready.",
      Icon: PenTool,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    },
    {
      id: 7,
      title: "ON-GROUND ACTIVATION FORCE",
      shortTitle: "On-Ground Activation",
      description: "Offline events and activations that bring your brand to life. Designed to build trust, engagement, and real-world impact. Memorable experiences that connect.",
      Icon: Calendar,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      id: 8,
      title: "AI GROWTH SOLUTIONS",
      shortTitle: "AI Growth",
      description: "Smart automation that saves time and boosts efficiency. AI-powered systems that streamline workflows and scale growth. Work smarter. Grow faster.",
      Icon: Sparkles,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
  ];

  // Carousel navigation
  const handlePrev = () => {
    setActiveCarousel(prev => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCarousel(prev => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Group services for different layouts
  const getServicesForLayout = () => {
    if (isMobile) {
      return services; // Return all for mobile carousel
    } else if (isTablet) {
      // Group into pairs for tablet
      const pairs = [];
      for (let i = 0; i < services.length; i += 2) {
        pairs.push(services.slice(i, i + 2));
      }
      return pairs;
    } else {
      return services; // Return all for desktop grid
    }
  };

  const servicesLayout = getServicesForLayout();

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#FAFAFA] to-white py-8 md:py-12 lg:py-20 px-3 sm:px-4 lg:px-6 overflow-hidden"
    >
      {/* Metallic Background Effects - Optimized for mobile */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Metallic Gradient Orbs - Reduced size for mobile */}
          <div 
            className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full top-0 left-1/4"
            style={{ 
              background: `radial-gradient(circle, ${theme.metallicAccent}/20, ${theme.silverPurple}/10, transparent 70%)`,
              animation: 'pulse 4s ease-in-out infinite',
              transform: `translateY(${scrollY * 0.1}px)` 
            }}
          ></div>
          <div 
            className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bottom-0 right-1/4" 
            style={{ 
              background: `radial-gradient(circle, ${theme.platinumPurple}/20, ${theme.lightPurple}/10, transparent 70%)`,
              animation: 'pulse 5s ease-in-out 700ms infinite',
              transform: `translateY(${scrollY * -0.08}px)` 
            }}
          ></div>
          
          {/* Metallic Border Elements - Smaller on mobile */}
          <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-l border-t opacity-30 rounded-tl-3xl" 
               style={{ borderColor: theme.metallicBorder }}></div>
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-r border-t opacity-30 rounded-tr-3xl"
               style={{ borderColor: theme.metallicBorder }}></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-l border-b opacity-30 rounded-bl-3xl"
               style={{ borderColor: theme.metallicBorder }}></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-r border-b opacity-30 rounded-br-3xl"
               style={{ borderColor: theme.metallicBorder }}></div>
          
          {/* Floating Metallic Particles - Hidden on mobile */}
          {!isMobile && (
            <>
              <div className="absolute top-20 left-10 w-1.5 h-1.5 rounded-full animate-bounce opacity-60" 
                   style={{ background: theme.metallicPurple, animationDuration: '3s' }}></div>
              <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full animate-bounce opacity-60" 
                   style={{ background: theme.amethyst, animationDuration: '4s' }}></div>
              <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 rounded-full animate-bounce opacity-60" 
                   style={{ background: theme.metallicPurple, animationDuration: '3.5s' }}></div>
            </>
          )}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Metallic Section Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12 lg:mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Metallic Line */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="h-px w-6 md:w-8 lg:w-12 bg-gradient-to-r from-transparent to-gray-400 opacity-50"></div>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" style={{ color: theme.metallicPurple }} />
            <div className="h-px w-6 md:w-8 lg:w-12 bg-gradient-to-l from-transparent to-gray-400 opacity-50"></div>
          </div>

          {/* Main Heading with Metallic Effect */}
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 md:mb-4 px-2" 
                style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <span className="text-gray-900">OUR </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r bg-clip-text text-transparent"
                      style={{ 
                        backgroundImage: `linear-gradient(135deg, ${theme.metallicPurple}, ${theme.deepPurple})`,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                      }}>
                  SERVICES
                </span>
                {/* Metallic Underline */}
                <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 rounded-full"
                     style={{ 
                       background: `linear-gradient(90deg, ${theme.metallicPurple}, ${theme.deepPurple})`
                     }}></div>
              </span>
            </h2>
          </div>

          {/* Metallic Subtitle */}
          <motion.p 
            className="text-gray-800 text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mt-4 md:mt-6 lg:mt-8 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Comprehensive <span className="font-semibold" style={{ color: theme.metallicPurple }}>PR Sparkz</span> tailored to elevate your brand and amplify your message
          </motion.p>

          {/* Metallic Service Counter */}
          <motion.div 
            className="inline-flex items-center gap-2 mt-4 md:mt-6 px-4 md:px-6 py-1.5 md:py-2 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ 
              background: `linear-gradient(135deg, white, ${theme.metallicAccent})`,
              border: `1px solid ${theme.metallicBorder}`
            }}>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ background: theme.metallicPurple }}></div>
            <span className="text-xs md:text-sm font-semibold" style={{ color: theme.metallicPurple }}>{services.length} Expert Services</span>
            <Star className="w-3 h-3 md:w-4 md:h-4" style={{ color: theme.metallicPurple }} />
          </motion.div>
        </motion.div>

        {/* Responsive Services Display */}
        {isMobile ? (
          // Mobile Carousel
          <motion.div 
            className="relative mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              {/* Mobile Service Card */}
              <div className="w-full max-w-sm mx-auto">
                <ServiceCard 
                  service={services[activeCarousel]} 
                  index={activeCarousel}
                  theme={theme}
                  isHovered={hoveredCard === services[activeCarousel].id}
                  onHover={() => setHoveredCard(services[activeCarousel].id)}
                  onLeave={() => setHoveredCard(null)}
                  isMobile={true}
                />
              </div>

              {/* Mobile Navigation Dots */}
              <div className="flex justify-center gap-1.5 mt-6">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCarousel(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeCarousel ? 'w-6' : 'w-1.5'
                    }`}
                    style={{ 
                      background: index === activeCarousel 
                        ? theme.metallicPurple 
                        : theme.metallicBorder 
                    }}
                  />
                ))}
              </div>

              {/* Mobile Navigation Arrows */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.metallicAccent}, white)`,
                    border: `1px solid ${theme.metallicBorder}`
                  }}
                >
                  <ChevronLeft className="w-5 h-5" style={{ color: theme.metallicPurple }} />
                </button>
                <div className="text-xs font-medium" style={{ color: theme.metallicText }}>
                  {activeCarousel + 1} / {services.length}
                </div>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.metallicAccent}, white)`,
                    border: `1px solid ${theme.metallicBorder}`
                  }}
                >
                  <ChevronRight className="w-5 h-5" style={{ color: theme.metallicPurple }} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : isTablet ? (
          // Tablet Layout (2 columns)
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {servicesLayout.map((pair, pairIndex) => (
              <div key={pairIndex} className="space-y-4 md:space-y-6">
                {pair.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: (pairIndex * 2 + index) * 0.1 + 0.4 }}
                  >
                    <ServiceCard 
                      service={service} 
                      index={pairIndex * 2 + index}
                      theme={theme}
                      isHovered={hoveredCard === service.id}
                      onHover={() => setHoveredCard(service.id)}
                      onLeave={() => setHoveredCard(null)}
                      isTablet={true}
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          // Desktop Layout (4 columns)
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 mb-8 md:mb-12 lg:mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <ServiceCard 
                  service={service} 
                  index={index}
                  theme={theme}
                  isHovered={hoveredCard === service.id}
                  onHover={() => setHoveredCard(service.id)}
                  onLeave={() => setHoveredCard(null)}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Metallic Bottom CTA */}
        <motion.div 
          className="text-center mt-8 md:mt-12 lg:mt-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {/* Metallic Line */}
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-4 md:mb-6 lg:mb-8 opacity-50"></div>
          
          <div className="relative inline-block" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <div className="relative">
              <p className="text-gray-900 text-base sm:text-lg md:text-xl font-semibold mb-4 md:mb-6 px-2">
                Ready to Write Your Success Story?
              </p>
              
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 md:gap-3 font-bold px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden w-full sm:w-auto text-sm md:text-base"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.deepPurple}, ${theme.metallicPurple})`,
                  color: 'white'
                }}
              >
                {/* Metallic Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10">Start Your Journey Today</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, theme, isHovered, onHover, onLeave, isMobile = false, isTablet = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const Icon = service.Icon;

  const outlineStyle = {
    border: `1px solid ${theme.metallicPurple}80`,
    boxShadow: `0 0 0 2px ${theme.metallicPurple}33, 0 0 20px ${theme.metallicPurple}15`,
  };

  const gradientOverlay = `linear-gradient(to bottom, ${theme.metallicPurple}/80, ${theme.deepPurple}/70 50%, transparent 50%)`;

  // Determine card size based on device
  const getCardSize = () => {
    if (isMobile) return "w-full max-w-sm mx-auto";
    if (isTablet) return "w-full";
    return "w-full";
  };

  return (
    <div
      className={`group relative ${getCardSize()}`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={isMobile ? onHover : undefined}
    >
      {/* Responsive Circular Container */}
      <div className={`relative ${isMobile ? 'aspect-square' : 'aspect-square'}`} style={{ perspective: '1000px' }}>
        {/* Outer metallic border */}
        <div className="absolute inset-0 rounded-full transition-all duration-500 bg-white overflow-hidden"
             style={{ 
               ...outlineStyle,
               boxShadow: isHovered 
                 ? `${outlineStyle.boxShadow}, 0 20px 40px ${theme.metallicPurple}/20`
                 : outlineStyle.boxShadow,
             }}>
          
          {/* Decorative outline accent */}
          <div className="absolute inset-1 rounded-full border opacity-50"
               style={{ borderColor: theme.metallicPurple + '40' }}></div>
          <div className="absolute inset-2 rounded-full border opacity-30"
               style={{ borderColor: theme.metallicPurple + '30' }}></div>
        </div>
        
        {/* Flip Container */}
        <div className={`absolute inset-3 sm:inset-4 md:inset-5 transition-transform duration-700 ${isHovered ? '[transform:rotateY(180deg)]' : ''}`} 
             style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Front Side - Image with Metallic Overlay */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg" 
               style={{ 
                 backfaceVisibility: 'hidden',
                 border: `1px solid ${theme.metallicBorder}` 
               }}>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.metallicAccent}, white)`
                   }}>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full animate-spin"
                     style={{ 
                       border: `3px solid ${theme.metallicBorder}`,
                       borderTopColor: theme.metallicPurple
                     }}></div>
              </div>
            )}
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
            {/* Purple Gradient Overlay */}
            <div className="absolute inset-0"
                 style={{ 
                   background: gradientOverlay
                 }}>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-3 md:p-4"
                 style={{ 
                   background: `linear-gradient(to top, ${theme.darkPurple}/60, ${theme.darkPurple}/30)`
                 }}>
              <div className="text-center px-2">
                <h3 className="text-white font-bold text-xs sm:text-sm md:text-base mb-1 leading-tight" 
                    style={{
                      textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.5)'
                    }}>
                  {isMobile ? service.shortTitle : service.title}
                </h3>
                <div className="flex items-center justify-center gap-1 text-white text-[10px] sm:text-xs" 
                     style={{
                       textShadow: '0 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.6)'
                     }}>
                  <Sparkles className="w-3 h-3" style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))' }} />
                  <span>{isMobile ? 'Tap' : 'Hover'} for details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side - Metallic Details */}
          <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 overflow-hidden [transform:rotateY(180deg)]"
               style={{ 
                 backfaceVisibility: 'hidden',
                 background: `linear-gradient(135deg, white, ${theme.metallicAccent})`,
                 border: `1px solid ${theme.metallicBorder}`,
                 boxShadow: isHovered ? `0 4px 20px ${theme.metallicPurple}/10` : 'none'
               }}>
            {/* Metallic Icon */}
            <div className="mb-2 flex-shrink-0 relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center relative"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.metallicAccent}, white)`,
                     border: `1px solid ${theme.metallicBorder}`
                   }}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 transition-transform duration-500" 
                      style={{ 
                        color: theme.metallicPurple,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                      }} 
                      strokeWidth={1.5} />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ 
                       background: `radial-gradient(circle, ${theme.metallicPurple}/20, transparent)`
                     }}></div>
              </div>
            </div>
            
            {/* Metallic Title */}
            <h3 className="font-bold text-center text-xs sm:text-sm md:text-base mb-1.5 md:mb-2 tracking-wide leading-tight px-2"
                style={{ color: theme.metallicText }}>
              {isMobile || isTablet ? service.shortTitle : service.title}
            </h3>
            
            {/* Metallic Description */}
            <p className="text-center text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-5 px-2 flex-grow overflow-hidden"
               style={{ color: theme.metallicText, opacity: 0.8 }}>
              {service.description}
            </p>

            {/* Mobile/Tablet View Indicator */}
            {(isMobile || isTablet) && (
              <div className="mt-2 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: theme.metallicPurple }}></div>
                <span className="text-[9px] sm:text-xs" style={{ color: theme.metallicPurple, opacity: 0.8 }}>
                  {index + 1} of 8
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Connecting Arrow */}
        {!isMobile && !isTablet && index % 4 !== 3 && (
          <div className="hidden lg:block absolute top-1/2 -right-4 xl:-right-6 transform -translate-y-1/2 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            <svg
              width="24"
              height="12"
              viewBox="0 0 32 16"
              fill="none"
              style={{ color: theme.metallicPurple }}
            >
              <path
                d="M0 8H30M30 8L24 2M30 8L24 14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

// Add responsive styles to global CSS
const ResponsiveStyles = () => (
  <style jsx global>{`
    @media (max-width: 640px) {
      .service-card {
        max-width: 280px;
        margin: 0 auto;
      }
    }
    
    @media (min-width: 641px) and (max-width: 767px) {
      .service-card {
        max-width: 320px;
        margin: 0 auto;
      }
    }
    
    @media (min-width: 768px) and (max-width: 1023px) {
      .service-card {
        max-width: 100%;
      }
    }
  `}</style>
);

export default Services;