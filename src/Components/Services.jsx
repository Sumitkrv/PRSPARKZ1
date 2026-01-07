import React, { useState, useEffect } from "react";
import { Monitor, Palette, Package, Target, PenTool, Share2, Newspaper, Calendar, Sparkles, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

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
      description: "High-impact campaign strategies designed to reach the right audience at the right time. From planning to execution, every move is intentional and result-focused.",
      Icon: Target,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 2,
      title: "DIGITAL PERFORMANCE ENGINE",
      description: "Data-driven marketing built for real, scalable growth. We optimize every stage of your funnel to drive conversions and ROI. Clear strategy. Measurable results.",
      Icon: Monitor,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
    {
      id: 3,
      title: "SOCIAL MEDIA POWERHUB",
      description: "Engaging, relatable content that builds a strong and consistent brand voice. We focus on real engagement, not vanity numbers. Human, active, and trusted.",
      Icon: Share2,
      image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=800&q=80",
    },
    {
      id: 4,
      title: "INFLUENCE & CELEBRITY CONNECT",
      description: "Strategic collaborations with influencers and celebrities who truly fit your brand. Chosen for authenticity, relevance, and impact. Visibility, trust, and authority — amplified.",
      Icon: Star,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    },
    {
      id: 5,
      title: "BRAND IDENTITY LAB",
      description: "Premium brand visuals crafted to stand out and stay memorable. From logos to full identity systems, everything is built with clarity and personality. No templates — only thoughtful design.",
      Icon: Palette,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
      id: 6,
      title: "WEB & APP EXPERIENCE STUDIO",
      description: "Fast, clean, user-friendly websites and apps built to perform. Designed for smooth experiences, trust, and conversions. Your digital presence, future-ready.",
      Icon: PenTool,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    },
    {
      id: 7,
      title: "ON-GROUND ACTIVATION FORCE",
      description: "Offline events and activations that bring your brand to life. Designed to build trust, engagement, and real-world impact. Memorable experiences that connect.",
      Icon: Calendar,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      id: 8,
      title: "AI GROWTH SOLUTIONS",
      description: "Smart automation that saves time and boosts efficiency. AI-powered systems that streamline workflows and scale growth. Work smarter. Grow faster.",
      Icon: Sparkles,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-[#FAFAFA] to-white py-24 px-4 overflow-hidden">
      {/* Metallic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Metallic Gradient Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full top-0 left-1/4"
          style={{ 
            background: `radial-gradient(circle, ${theme.metallicAccent}/20, ${theme.silverPurple}/10, transparent 70%)`,
            animation: 'pulse 4s ease-in-out infinite',
            transform: `translateY(${scrollY * 0.1}px)` 
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bottom-0 right-1/4" 
          style={{ 
            background: `radial-gradient(circle, ${theme.platinumPurple}/20, ${theme.lightPurple}/10, transparent 70%)`,
            animation: 'pulse 5s ease-in-out 700ms infinite',
            transform: `translateY(${scrollY * -0.08}px)` 
          }}
        ></div>
        
        {/* Metallic Border Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l border-t opacity-30 rounded-tl-3xl" 
             style={{ borderColor: theme.metallicBorder }}></div>
        <div className="absolute top-0 right-0 w-40 h-40 border-r border-t opacity-30 rounded-tr-3xl"
             style={{ borderColor: theme.metallicBorder }}></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 border-l border-b opacity-30 rounded-bl-3xl"
             style={{ borderColor: theme.metallicBorder }}></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b opacity-30 rounded-br-3xl"
             style={{ borderColor: theme.metallicBorder }}></div>
        
        {/* Floating Metallic Particles */}
        <div className="absolute top-20 left-10 w-1.5 h-1.5 rounded-full animate-bounce opacity-60" 
             style={{ background: theme.metallicPurple, animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full animate-bounce opacity-60" 
             style={{ background: theme.amethyst, animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 rounded-full animate-bounce opacity-60" 
             style={{ background: theme.metallicPurple, animationDuration: '3.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Metallic Section Header */}
        <div className="text-center mb-20 relative">
          {/* Decorative Metallic Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400 opacity-50"></div>
            <Sparkles className="w-5 h-5" style={{ color: theme.metallicPurple }} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-400 opacity-50"></div>
          </div>

          {/* Main Heading with Metallic Effect */}
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-4 relative" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
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
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                     style={{ 
                       background: `linear-gradient(90deg, ${theme.metallicPurple}, ${theme.deepPurple})`
                     }}></div>
              </span>
            </h2>
          </div>

          {/* Metallic Subtitle */}
          <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed" 
             style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Comprehensive <span className="font-semibold" style={{ color: theme.metallicPurple }}>PR Sparkz</span> tailored to elevate your brand and amplify your message
          </p>

          {/* Metallic Service Counter */}
          <div className="inline-flex items-center gap-2 mt-6 px-6 py-2 rounded-full"
               style={{ 
                 background: `linear-gradient(135deg, white, ${theme.metallicAccent})`,
                 border: `1px solid ${theme.metallicBorder}`
               }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: theme.metallicPurple }}></div>
            <span className="text-sm font-semibold" style={{ color: theme.metallicPurple }}>{services.length} Expert Services</span>
            <Star className="w-4 h-4" style={{ color: theme.metallicPurple }} />
          </div>
        </div>

        {/* Metallic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              theme={theme}
              isHovered={hoveredCard === service.id}
              onHover={() => setHoveredCard(service.id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>

        {/* Metallic Bottom CTA */}
        <div className="text-center mt-20 relative">
          {/* Metallic Line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8 opacity-50"></div>
          
          <div className="relative inline-block" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <div className="relative">
              <p className="text-gray-900 text-xl font-semibold mb-6">
                Ready to Write Your Success Story?
              </p>
              
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.deepPurple}, ${theme.metallicPurple})`,
                  color: 'white'
                }}
              >
                {/* Metallic Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10">Start Your Journey Today</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, theme, isHovered, onHover, onLeave }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const Icon = service.Icon;

  // All cards use the same outline style (semi-outline like card 1)
  const outlineStyle = {
    border: `1px solid ${theme.metallicPurple}80`,
    boxShadow: `0 0 0 2px ${theme.metallicPurple}33, 0 0 20px ${theme.metallicPurple}15`,
  };

  // All cards use the same gradient overlay
  const gradientOverlay = `linear-gradient(to bottom, ${theme.metallicPurple}/80, ${theme.deepPurple}/70 50%, transparent 50%)`;

  return (
    <div
      className="group relative"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Metallic Circular Container */}
      <div className="relative aspect-square" style={{ perspective: '1000px' }}>
        {/* Outer metallic border - same for all cards */}
        <div className="absolute inset-0 rounded-full transition-all duration-500 bg-white overflow-hidden"
             style={{ 
               ...outlineStyle,
               boxShadow: isHovered 
                 ? `${outlineStyle.boxShadow}, 0 20px 40px ${theme.metallicPurple}/20`
                 : outlineStyle.boxShadow,
             }}>
          
          {/* Decorative outline accent - same for all cards */}
          <div className="absolute inset-1 rounded-full border opacity-50"
               style={{ borderColor: theme.metallicPurple + '40' }}></div>
          <div className="absolute inset-2 rounded-full border opacity-30"
               style={{ borderColor: theme.metallicPurple + '30' }}></div>
        </div>
        
        {/* Flip Container */}
        <div className={`absolute inset-3 md:inset-4 transition-transform duration-700 ${isHovered ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
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
                <div className="w-8 h-8 rounded-full animate-spin"
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
            />
            {/* Purple Gradient Overlay - same for all cards */}
            <div className="absolute inset-0"
                 style={{ 
                   background: gradientOverlay
                 }}>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-4"
                 style={{ 
                   background: `linear-gradient(to top, ${theme.darkPurple}/60, ${theme.darkPurple}/30)`
                 }}>
              <div className="text-center">
                <h3 className="text-white font-bold text-xs md:text-sm mb-1 leading-tight" 
                    style={{
                      textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.5)'
                    }}>
                  {service.title}
                </h3>
                <div className="flex items-center justify-center gap-1 text-white text-[10px]" 
                     style={{
                       textShadow: '0 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.6)'
                     }}>
                  <Sparkles className="w-3 h-3" style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))' }} />
                  <span>Hover for details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side - Metallic Details */}
          <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center p-5 md:p-7 overflow-hidden [transform:rotateY(180deg)]"
               style={{ 
                 backfaceVisibility: 'hidden',
                 background: `linear-gradient(135deg, white, ${theme.metallicAccent})`,
                 border: `1px solid ${theme.metallicBorder}`,
                 boxShadow: isHovered ? `0 4px 20px ${theme.metallicPurple}/10` : 'none'
               }}>
            {/* Metallic Icon */}
            <div className="mb-2 flex-shrink-0 relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center relative"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.metallicAccent}, white)`,
                     border: `1px solid ${theme.metallicBorder}`
                   }}>
                <Icon className="w-6 h-6 md:w-7 md:h-7 relative z-10 transition-transform duration-500" 
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
            <h3 className="font-bold text-center text-[10px] md:text-xs mb-1.5 tracking-wide leading-tight px-2"
                style={{ color: theme.metallicText }}>
              {service.title}
            </h3>
            
            {/* Metallic Description */}
            <p className="text-center text-[9px] md:text-[10px] leading-relaxed line-clamp-6 md:line-clamp-5 px-2"
               style={{ color: theme.metallicText, opacity: 0.8 }}>
              {service.description}
            </p>
          </div>
        </div>

        {/* Metallic Connecting Arrow */}
        {index % 4 !== 3 && (
          <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            <svg
              width="32"
              height="16"
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

export default Services;