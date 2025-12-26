import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Megaphone,
  Users,
  Sparkles,
  TrendingUp,
  Heart,
  Zap
} from "lucide-react";
import { scrollToSection } from '../utils/navigation.js';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const testimonials = [
    { 
      id: 1,
      name: "Shikha Khandelwal", 
      role: "Founder",
      company: "BK Shikha",
      text: "My profile was completely transformed. Within a month, I experienced 4x growth and a massive increase in subscribers — all organic, without paid ads.",
      rating: 5,
      platform: "Social Media",
      stats: "4x growth",
      color: "#8b5cf6",
      gradient: "from-[#f5f0f8] to-[#7a5a99]"
    },
    { 
      id: 2,
      name: "Harsh Aggarwal", 
      role: "Co-founder",
      company: "Moon7 Silverhub",
      text: "Our offline events were managed with precision. From on-ground marketing to digital promotions, the reach and impact were outstanding.",
      rating: 5,
      platform: "Events & Marketing",
      stats: "Outstanding reach",
      color: "#8a6aa9",
      gradient: "from-[#8a6aa9] to-[#6a4a89]"
    },
    { 
      id: 3,
      name: "Sujata Chauhan", 
      role: "MD",
      company: "Vortex Splash",
      text: "Highly active and creative team. The marketing approach was smooth, effective, and results-driven.",
      rating: 5,
      platform: "Digital Marketing",
      stats: "Results-driven",
      color: "#a855f7",
      gradient: "from-[#f5f0f8] to-[#7a5a99]"
    },
    { 
      id: 4,
      name: "Rohit Mehra", 
      role: "Founder",
      company: "TasteBuds Café",
      text: "The social media strategy completely changed our customer engagement. Within 6 weeks, footfall increased by 3x, and our online orders grew significantly.",
      rating: 5,
      platform: "Social Media",
      stats: "3x footfall",
      color: "#9333ea",
      gradient: "from-[#8a6aa9] to-[#6a4a89]"
    },
    { 
      id: 5,
      name: "Neha Kapoor", 
      role: "Owner",
      company: "Aurora Jewellery",
      text: "The creative campaigns were flawless. From concept to execution, every detail was handled professionally, giving our brand a premium online presence.",
      rating: 5,
      platform: "Digital Marketing",
      stats: "Premium presence",
      color: "#8b5cf6",
      gradient: "from-[#f5f0f8] to-[#7a5a99]"
    },
    { 
      id: 6,
      name: "Vikram Singh", 
      role: "CEO",
      company: "GreenLeaf Organics",
      text: "The team brought fresh ideas and executed them with precision. Sales conversions increased, and our brand visibility across digital platforms skyrocketed.",
      rating: 5,
      platform: "Digital Marketing",
      stats: "Sales up",
      color: "#8a6aa9",
      gradient: "from-[#8a6aa9] to-[#6a4a89]"
    },
    { 
      id: 7,
      name: "Ayesha Reddy", 
      role: "Co-founder",
      company: "LuxeTreats Chocolates",
      text: "Their marketing approach is both innovative and practical. The engagement on our campaigns went through the roof, and customer feedback has been overwhelmingly positive.",
      rating: 5,
      platform: "Social Media",
      stats: "Engagement soared",
      color: "#a855f7",
      gradient: "from-[#f5f0f8] to-[#7a5a99]"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4
      }
    })
  };

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case "Social Media": return MessageCircle;
      case "Events & Marketing": return Users;
      case "Digital Marketing": return Megaphone;
      default: return Sparkles;
    }
  };

  return (
    <section 
      id="testimonials" 
      ref={containerRef}
      className="relative py-20 overflow-hidden bg-white"
      style={{ 
        fontFamily: "'Montserrat', sans-serif"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-#ebe2f0 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#d5c4e0] rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 relative z-10"
        style={{ y, opacity, scale }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f5f0f8] border border-[#d5c4e0] mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#8a6aa9]" />
            <span className="text-[#7a5a99] font-semibold text-sm tracking-wide">
              CLIENT SUCCESS STORIES
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-[#8a6aa9] to-[#6a4a89] bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Real results from real clients who trusted us with their brand
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg hover:border-[#9d7bb8] hover:shadow-xl transition-all group"
            onClick={handlePrev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-[#8a6aa9]" />
          </motion.button>

          <motion.button
            className="absolute right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg hover:border-[#9d7bb8] hover:shadow-xl transition-all group"
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-[#8a6aa9]" />
          </motion.button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
                {/* Top colored accent */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${testimonials[activeIndex].gradient}`}
                />

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Avatar Section */}
                  <motion.div 
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div 
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br ${testimonials[activeIndex].gradient} flex items-center justify-center shadow-md relative`}
                    >
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {testimonials[activeIndex].name.charAt(0)}
                      </span>
                      
                      {/* Platform badge */}
                      {(() => {
                        const Icon = getPlatformIcon(testimonials[activeIndex].platform);
                        return (
                          <div 
                            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-md border border-gray-100"
                          >
                            <Icon className="w-4 h-4" style={{ color: testimonials[activeIndex].color }} />
                          </div>
                        );
                      })()}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-[#8a6aa9] fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl font-normal text-gray-800 leading-relaxed mb-6">
                        "{testimonials[activeIndex].text}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {testimonials[activeIndex].name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                          </p>
                        </div>

                        {/* Stats Badge */}
                        <div 
                          className={`px-4 py-2 rounded-lg bg-gradient-to-r ${testimonials[activeIndex].gradient}`}
                        >
                          <div className="flex items-center gap-2 text-white font-semibold text-sm">
                            <TrendingUp className="w-4 h-4" />
                            {testimonials[activeIndex].stats}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-[#8a6aa9]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid of Other Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => {
            const Icon = getPlatformIcon(testimonial.platform);
            return (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-[#d5c4e0] transition-all cursor-pointer group"
                whileHover={{ y: -4 }}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-lg font-bold`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#8a6aa9] fill-current" />
                    ))}
                  </div>
                  <Icon className="w-4 h-4" style={{ color: testimonial.color }} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-[#f5f0f8] to-[#ebe2f0] rounded-2xl p-10 border border-[#d5c4e0]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's create measurable results for your brand together
          </p>
          
          <motion.button 
            onClick={() => scrollToSection('contact', 80)}
            className="px-8 py-4 bg-gradient-to-r from-[#8a6aa9] to-[#6a4a89] text-white font-semibold text-base rounded-lg shadow-md hover:shadow-lg hover:shadow-[#8a6aa9]/50 transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey
            <Zap className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
