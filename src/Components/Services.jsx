import React, { useState, useEffect } from "react";
import { Monitor, Palette, Package, Target, PenTool, Share2, Newspaper, Calendar, Sparkles, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

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
      title: "CAMPAIGN STRATEGY & PLANNING",
      description:
        "High-impact campaign strategies designed to reach the right audience at the right time. From planning to execution, every move is intentional and result-focused.",
      Icon: Target,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 2,
      title: "DIGITAL PERFORMANCE ENGINE",
      description:
        "Data-driven marketing built for real, scalable growth. We optimize every stage of your funnel to drive conversions and ROI. Clear strategy. Measurable results.",
      Icon: Monitor,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
    {
      id: 3,
      title: "SOCIAL MEDIA POWERHUB",
      description:
        "Engaging, relatable content that builds a strong and consistent brand voice. We focus on real engagement, not vanity numbers. Human, active, and trusted.",
      Icon: Share2,
      image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=800&q=80",
    },
    {
      id: 4,
      title: "INFLUENCE & CELEBRITY CONNECT",
      description:
        "Strategic collaborations with influencers and celebrities who truly fit your brand. Chosen for authenticity, relevance, and impact. Visibility, trust, and authority — amplified.",
      Icon: Star,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    },
    {
      id: 5,
      title: "BRAND IDENTITY LAB",
      description:
        "Premium brand visuals crafted to stand out and stay memorable. From logos to full identity systems, everything is built with clarity and personality. No templates — only thoughtful design.",
      Icon: Palette,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
      id: 6,
      title: "WEB & APP EXPERIENCE STUDIO",
      description:
        "Fast, clean, user-friendly websites and apps built to perform. Designed for smooth experiences, trust, and conversions. Your digital presence, future-ready.",
      Icon: PenTool,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    },
    {
      id: 7,
      title: "ON-GROUND ACTIVATION FORCE",
      description:
        "Offline events and activations that bring your brand to life. Designed to build trust, engagement, and real-world impact. Memorable experiences that connect.",
      Icon: Calendar,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      id: 8,
      title: "AI GROWTH SOLUTIONS",
      description:
        "Smart automation that saves time and boosts efficiency. AI-powered systems that streamline workflows and scale growth. Work smarter. Grow faster.",
      Icon: Sparkles,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
  ];

  return (
    <section id="services" className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Enhanced Background Effects with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs with Parallax */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#d5c4e0]/30 to-[#8a6aa9]/30 rounded-full blur-3xl top-0 left-1/4 animate-pulse"
          style={{ 
            animationDuration: '4s',
            transform: `translateY(${scrollY * 0.1}px)` 
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#b99cc8]/30 to-pink-300/30 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" 
          style={{ 
            animationDelay: '700ms', 
            animationDuration: '5s',
            transform: `translateY(${scrollY * -0.08}px)` 
          }}
        ></div>
        
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-[#d5c4e0] opacity-40 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-[#d5c4e0] opacity-40 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-[#d5c4e0] opacity-40 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-[#d5c4e0] opacity-40 rounded-br-3xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#8a6aa9] rounded-full animate-bounce opacity-60" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-[#9d7bb8] rounded-full animate-bounce opacity-60" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#8a6aa9] rounded-full animate-bounce opacity-60" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20 relative">
          {/* Decorative Top Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#8a6aa9]"></div>
            <Sparkles className="w-5 h-5 text-[#8a6aa9] animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#8a6aa9]"></div>
          </div>

          {/* Main Heading with Animation */}
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-4 relative" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <span className="text-gray-900">OUR </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#8a6aa9] via-[#7a5a99] to-[#6a4a89] text-transparent bg-clip-text animate-gradient">
                  SERVICES
                </span>
                {/* Animated Underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#8a6aa9] via-[#9d7bb8] to-[#8a6aa9] rounded-full" style={{ animation: 'expandWidth 1s ease-out 0.3s both' }}></div>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#8a6aa9] to-pink-400 rounded-full blur-sm" style={{ animation: 'expandWidth 1s ease-out 0.3s both' }}></div>
              </span>
            </h2>
            
            {/* Decorative Quote Marks */}
            <div className="absolute -top-4 -left-8 text-[#d5c4e0] text-6xl font-serif opacity-50">"</div>
            <div className="absolute -bottom-8 -right-8 text-[#d5c4e0] text-6xl font-serif opacity-50">"</div>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Comprehensive <span className="text-[#8a6aa9] font-semibold">PR solutions</span> tailored to elevate your brand and amplify your message
          </p>

          {/* Service Counter Badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-white border border-[#d5c4e0] rounded-full shadow-sm" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
            <div className="w-2 h-2 bg-[#8a6aa9] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#8a6aa9]">{services.length} Expert Services</span>
            <Star className="w-4 h-4 text-[#8a6aa9] fill-[#8a6aa9]" />
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
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8a6aa9] to-transparent mx-auto mb-8"></div>
          
          <div className="relative inline-block" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#b99cc8]/40 to-[#8a6aa9]/40 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="relative">
              <p className="text-gray-900 text-xl font-semibold mb-6">
                Ready to Write Your Success Story?
              </p>
              
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#8a6aa9] via-[#7a5a99] to-[#6a4a89] text-white font-bold px-10 py-4 rounded-full hover:from-[#7a5a99] hover:via-[#6a4a89] hover:to-[#5a3a79] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#8a6aa9]/50 relative overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10">Start Your Journey Today</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
              </a>
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
        <div className="absolute inset-0 rounded-full border-2 border-[#d5c4e0] group-hover:border-[#8a6aa9] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#8a6aa9]/40 bg-white"></div>
        
        {/* Hover Glow Ring */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b99cc8]/40 to-pink-300/40 blur-md opacity-40 animate-pulse"></div>
        </div>
        
        {/* Flip Container */}
        <div className={`absolute inset-3 md:inset-4 transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
          {/* Front Side - Image */}
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#8a6aa9] shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#d5c4e0] to-[#b99cc8] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#8a6aa9] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6a4a89]/90 via-[#8a6aa9]/50 to-transparent flex items-end justify-center p-4">
              <div className="text-center">
                <h3 className="text-white font-bold text-xs md:text-sm drop-shadow-lg mb-1 leading-tight">
                  {service.title}
                </h3>
                <div className="flex items-center justify-center gap-1 text-white/80 text-[10px]">
                  <Sparkles className="w-3 h-3" />
                  <span>Hover for details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side - Icon & Text */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-[#f5f0f8]/50 to-[#ebe2f0]/30 border border-[#d5c4e0] flex flex-col items-center justify-center p-5 md:p-7 group-hover:border-[#b99cc8] group-hover:shadow-xl transition-all duration-500 overflow-hidden [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
            {/* Icon with Glow */}
            <div className="mb-2 flex-shrink-0 text-[#8a6aa9] relative">
              <div className="absolute inset-0 bg-[#8a6aa9]/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon className="w-7 h-7 md:w-9 md:h-9 relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
            </div>
            
            {/* Title */}
            <h3 className="bg-gradient-to-r from-[#8a6aa9] to-[#6a4a89] text-transparent bg-clip-text font-bold text-center text-[10px] md:text-xs mb-1.5 tracking-wide leading-tight">
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-700 text-[9px] md:text-[10px] text-center leading-relaxed transition-colors duration-500 line-clamp-6 md:line-clamp-5">
              {service.description}
            </p>
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
              className="text-[#8a6aa9] group-hover:text-[#7a5a99] transition-colors duration-500"
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
