import React, { useState, useEffect } from "react";
import { Monitor, Palette, Package, Target, PenTool, Share2, Newspaper, Calendar, Sparkles, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../assets/services /1.jpg";
import img2 from "../assets/services /2.jpg";
import img3 from "../assets/services /3.jpg";
import img4 from "../assets/services /4.jpg";
import img5 from "../assets/services /5.jpg";
import img6 from "../assets/services /6.jpg";
import img7 from "../assets/services /7.jpg";
import img8 from "../assets/services /8.jpg";

const Services = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "WEB DESIGN",
      description:
        "Crafting stunning websites tailored to your brand's needs with creativity and user experience.",
      Icon: Monitor,
      image: img1,
    },
    {
      id: 2,
      title: "LOGO DESIGN",
      description:
        "Creating logos that resonate with your audience and represent your brand identity perfectly.",
      Icon: Palette,
      image: img2,
    },
    {
      id: 3,
      title: "PRODUCT DESIGN",
      description:
        "Innovative solutions that marry form with function. From concept to prototype.",
      Icon: Package,
      image: img3,
    },
    {
      id: 4,
      title: "BRAND STRATEGY",
      description:
        "Comprehensive strategies that define your unique market position and audience connections.",
      Icon: Target,
      image: img4,
    },
    {
      id: 5,
      title: "CONTENT CREATION",
      description:
        "Engaging content across all platforms that tells your story and converts.",
      Icon: PenTool,
      image: img5,
    },
    {
      id: 6,
      title: "SOCIAL MEDIA",
      description:
        "Strategic management that builds community and drives engagement effectively.",
      Icon: Share2,
      image: img6,
    },
    {
      id: 7,
      title: "MEDIA RELATIONS",
      description:
        "Building strong media relationships to secure valuable coverage and visibility.",
      Icon: Newspaper,
      image: img7,
    },
    {
      id: 8,
      title: "EVENT MANAGEMENT",
      description:
        "Creating memorable experiences that generate buzz and strengthen relationships.",
      Icon: Calendar,
      image: img8,
    },
  ];

  return (
    <section id="services" className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Enhanced Background Effects with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs with Parallax */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-purple-200/30 to-purple-400/30 rounded-full blur-3xl top-0 left-1/4 animate-pulse"
          style={{ 
            animationDuration: '4s',
            transform: `translateY(${scrollY * 0.1}px)` 
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" 
          style={{ 
            animationDelay: '700ms', 
            animationDuration: '5s',
            transform: `translateY(${scrollY * -0.08}px)` 
          }}
        ></div>
        
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-purple-200 opacity-40 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-purple-200 opacity-40 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-purple-200 opacity-40 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-purple-200 opacity-40 rounded-br-3xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-500 rounded-full animate-bounce opacity-60" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20 relative">
          {/* Decorative Top Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>

          {/* Main Heading with Animation */}
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-4 relative" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <span className="text-gray-900">OUR </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-transparent bg-clip-text animate-gradient">
                  SERVICES
                </span>
                {/* Animated Underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-full" style={{ animation: 'expandWidth 1s ease-out 0.3s both' }}></div>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm" style={{ animation: 'expandWidth 1s ease-out 0.3s both' }}></div>
              </span>
            </h2>
            
            {/* Decorative Quote Marks */}
            <div className="absolute -top-4 -left-8 text-purple-200 text-6xl font-serif opacity-50">"</div>
            <div className="absolute -bottom-8 -right-8 text-purple-200 text-6xl font-serif opacity-50">"</div>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Comprehensive <span className="text-purple-700 font-semibold">PR solutions</span> tailored to elevate your brand and amplify your message
          </p>

          {/* Service Counter Badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-white border border-purple-200 rounded-full shadow-sm" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-purple-800">{services.length} Expert Services</span>
            <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20 relative">
          {/* Decorative Line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8"></div>
          
          <div className="relative inline-block" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300/40 to-purple-500/40 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="relative">
              <p className="text-gray-900 text-xl font-semibold mb-6">
                Ready to transform your brand's narrative?
              </p>
              
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-10 py-4 rounded-full hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
              </a>
              
              <p className="text-sm text-gray-500 mt-4">
                ✨ Free consultation • No commitments required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const Icon = service.Icon;

  return (
    <div
      className="group relative"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Circular Container */}
      <div className="relative aspect-square" style={{ perspective: '1000px' }}>
        {/* Outer border ring with glow */}
        <div className="absolute inset-0 rounded-full border-2 border-purple-200 group-hover:border-purple-400 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-300/40 bg-white"></div>
        
        {/* Hover Glow Ring */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300/40 to-pink-300/40 blur-md opacity-40 animate-pulse"></div>
        </div>
        
        {/* Flip Container */}
        <div className={`absolute inset-3 md:inset-4 transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
          {/* Front Side - Icon & Text */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-purple-50/50 to-purple-100/30 border border-purple-200 flex flex-col items-center justify-center p-4 md:p-6 group-hover:border-purple-300 group-hover:shadow-xl transition-all duration-500 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
            {/* Icon with Glow */}
            <div className="mb-2 md:mb-3 flex-shrink-0 text-purple-700 relative">
              <div className="absolute inset-0 bg-purple-400/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon className="w-8 h-8 md:w-10 md:h-10 relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
            </div>
            
            {/* Title */}
            <h3 className="bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text font-bold text-center text-xs md:text-sm mb-2 tracking-wide leading-tight">
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-700 text-[10px] md:text-xs text-center leading-snug transition-colors duration-500 line-clamp-4">
              {service.description}
            </p>

            {/* Hover Indicator */}
            <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-1 text-purple-700 text-[10px] font-semibold">
                <span>Hover to view</span>
                <ArrowRight className="w-3 h-3 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Back Side - Image */}
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-purple-400 shadow-2xl [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-600/50 to-transparent flex items-end justify-center p-4">
              <div className="text-center">
                <h3 className="text-white font-bold text-sm md:text-base drop-shadow-lg mb-1">
                  {service.title}
                </h3>
                <div className="flex items-center justify-center gap-1 text-white/80 text-xs">
                  <Sparkles className="w-3 h-3" />
                  <span>Explore More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting arrow for larger screens */}
        {index % 4 !== 3 && (
          <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            <svg
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
              className="text-purple-400 group-hover:text-purple-600 transition-colors duration-500"
            >
              <path
                d="M0 8H30M30 8L24 2M30 8L24 14"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
