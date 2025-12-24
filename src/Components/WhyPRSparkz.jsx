import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { scrollToSection } from '../utils/navigation.js';

const WhyPRSparkz = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Preload images
  useEffect(() => {
    const imageUrls = [
      "/src/assets/why-features/1.jpg",
      "/src/assets/why-features/2.jpg",
      "/src/assets/why-features/3.jpg",
      "/src/assets/why-features/4.jpg"
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = reject;
      });
    };

    Promise.allSettled(imageUrls.map(loadImage))
      .then(results => {
        const loaded = {};
        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            loaded[imageUrls[index]] = true;
          }
        });
        setLoadedImages(loaded);
      });
  }, []);

  const stats = useMemo(() => [
    {
      number: "127%",
      label: "Growth in Engagement",
      description: "Strategic approach delivers measurable results",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      number: "89%",
      label: "Brand Consistency",
      description: "Unified messaging across all channels",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "3x",
      label: "Faster Execution",
      description: "AI-powered campaign delivery",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "24/7",
      label: "Active Support",
      description: "Round-the-clock monitoring & optimization",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
        </svg>
      )
    }
  ], []);

  const features = useMemo(() => [
    {
      title: "Data-Driven Insights",
      description: "Real-time analytics and predictive intelligence for informed decisions that drive measurable results.",
      image: '/src/assets/why features/1.jpg',
      fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "#8a6aa9",
      details: [
        "Real-time campaign analytics",
        "Predictive performance modeling",
        "Competitor intelligence reports",
        "ROI tracking dashboards"
      ]
    },
    {
      title: "Multi-Platform Strategy",
      description: "Seamless integration across all digital and traditional channels for maximum reach and impact.",
      image: '/src/assets/why features/2.jpg',
      fallbackImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w-800&auto=format&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "#6366f1",
      details: [
        "Cross-platform campaign synchronization",
        "Unified brand messaging",
        "Channel performance optimization",
        "Integrated analytics dashboard"
      ]
    },
    {
      title: "Creative Excellence",
      description: "Award-winning design and compelling storytelling that resonates with your target audience.",
      image: '/src/assets/why features/3.jpg',
      fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "#10b981",
      details: [
        "Brand storytelling workshops",
        "Visual identity development",
        "Content creation strategy",
        "Campaign creative direction"
      ]
    },
    {
      title: "24/7 Support",
      description: "Continuous monitoring, optimization and dedicated support to ensure your campaigns succeed.",
      image: '/src/assets/why features/4.jpg',
      fallbackImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "#f59e0b",
      details: [
        "Dedicated account management",
        "24/7 campaign monitoring",
        "Rapid response optimization",
        "Quarterly strategy reviews"
      ]
    }
  ], []);

  const handleFeatureHover = useCallback((index) => {
    setActiveFeature(index);
  }, []);

  const ImageWithFallback = ({ src, fallback, alt, className, ...props }) => {
    const [imgSrc, setImgSrc] = useState(loadedImages[src] ? src : fallback);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (loadedImages[src]) {
        setImgSrc(src);
      }
    }, [src, loadedImages]);

    return (
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}
        <img
          src={imgSrc}
          alt={alt}
          className={`${className} ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setImgSrc(fallback);
            setLoading(false);
          }}
          loading="lazy"
          {...props}
        />
      </div>
    );
  };

  return (
    <section
      id="why-pr-sparkz"
      ref={containerRef}
      className="relative bg-white overflow-hidden"
      style={{ 
        paddingTop: 'clamp(100px, 10vw, 140px)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" 
      }}
      aria-label="Why Choose PR Sparkz"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-96 -z-10"
        style={{ y }}
      >
        <div className="absolute top-0 left-1/4 w-64 h-64 opacity-0" />
        <div className="absolute top-0 right-1/4 w-96 h-96 opacity-0" />
      </motion.div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <motion.div
          ref={heroRef}
          style={{ opacity, scale }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 mb-6"
            role="presentation"
          >
            <div className="w-2 h-2 rounded-full bg-[#8a6aa9] animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase text-black">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
          >
            Transform Your Digital{" "}
            <span className="relative inline-block">
              <span style={{ color: '#8a6aa9' }}>
                Presence
              </span>
              <motion.div
                className="absolute bottom-2 left-0 right-0 h-3 -z-10"
                style={{ backgroundColor: 'rgba(138, 106, 169, 0.15)' }}
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            We craft{" "}
            <span className="font-semibold text-black">data-driven, AI-powered strategies</span>{" "}
            that spark visibility, growth, and engagement—because your brand's success is ours.
          </motion.p>
        </motion.div>
      </div>

      {/* Statistics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-2xl border border-gray-100"
                role="region"
                aria-label={`Statistic: ${stat.label}`}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 text-[#8a6aa9]">{stat.icon}</div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#8a6aa9' }}>
                    +{stat.number}
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-black mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-500">
                    {stat.description}
                  </p>
                </div>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#8a6aa9]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Features Grid */}
      <div ref={featuresRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Winning <span className="text-[#8a6aa9]">Methodology</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A proven framework that delivers exceptional results across all digital channels
          </p>
        </div>

        {/* Feature Navigation Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveFeature(index);
              }}
              onMouseEnter={() => handleFeatureHover(index)}
              className="focus:outline-none focus:ring-2 focus:ring-[#8a6aa9] focus:ring-offset-2 rounded-full"
              aria-label={`View feature ${index + 1}: ${features[index].title}`}
              aria-pressed={activeFeature === index}
            >
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  activeFeature === index 
                    ? 'bg-[#8a6aa9]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                animate={{
                  scale: activeFeature === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ${
                activeFeature === index 
                  ? 'ring-2 ring-[#8a6aa9] ring-offset-2' 
                  : 'hover:ring-1 hover:ring-gray-200'
              }`}
              style={{ 
                minHeight: '350px',
                boxShadow: activeFeature === index 
                  ? '0 20px 40px rgba(138, 106, 169, 0.15)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={() => handleFeatureHover(index)}
              onFocus={() => handleFeatureHover(index)}
              tabIndex={0}
              role="article"
              aria-label={`Feature: ${feature.title}`}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={feature.image}
                  fallback={feature.fallbackImage}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    transform: activeFeature === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, ${feature.color}40 100%)`,
                    opacity: activeFeature === index ? 0.9 : 0.7
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="text-white"
                      animate={{ 
                        scale: activeFeature === index ? 1.2 : 1,
                        rotate: activeFeature === index ? [0, 360] : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <div className="text-5xl md:text-6xl font-bold opacity-10 text-white">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {activeFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="space-y-2 mb-4">
                          {feature.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center text-white/90 text-sm md:text-base"
                            >
                              <svg className="w-4 h-4 mr-2 text-[#8a6aa9]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-white/80 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated underline */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mt-4"
                  initial={{ width: '60px' }}
                  animate={{ 
                    width: activeFeature === index ? '120px' : '60px'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeFeature === index ? 1 : 0.5 }}
              >
                <div className="flex items-center gap-1 text-white/60 text-sm">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative overflow-hidden rounded-3xl border-2 border-gray-100"
          style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.08)'
          }}
          role="region"
          aria-label="Call to Action"
        >
          {/* Purple accent background */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="absolute inset-0" style={{ background: '#8a6aa9' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8a6aa9]/10 border border-[#8a6aa9]/20 text-sm font-semibold" style={{ color: '#8a6aa9' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Limited Time Offer
                </span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Ready to Transform Your{" "}
                <span className="relative inline-block">
                  <span style={{ color: '#8a6aa9' }}>Digital Presence?</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-3 -z-10"
                    style={{ backgroundColor: 'rgba(138, 106, 169, 0.15)' }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </span>
              </h3>
              
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                Book your <span className="font-semibold text-black">free strategy session</span> and discover how our proven methodologies can deliver measurable growth for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  onClick={() => scrollToSection('contact', 80)}
                  className="group relative px-8 py-4 text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  style={{ background: '#8a6aa9' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Schedule Free Consultation
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-gray-300 text-black font-semibold rounded-xl transition-all hover:border-[#8a6aa9] hover:bg-[#8a6aa9]/5"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  onClick={() => scrollToSection('portfolio', 80)}
                >
                  View Case Studies
                </motion.button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#8a6aa9]/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#8a6aa9' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">No long-term contracts</p>
                    <p className="text-sm text-gray-500">Cancel anytime</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#8a6aa9]/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#8a6aa9' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">Results guaranteed</p>
                    <p className="text-sm text-gray-500">Or your money back</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats Side */}
            <div className="relative p-8 md:p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-[#8a6aa9]/5 to-transparent">
              {/* Decorative circles */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
                  style={{ background: '#8a6aa9' }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-5"
                  style={{ background: '#8a6aa9' }}
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [0, -90, 0]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Stats Grid */}
              <div className="relative grid grid-cols-2 gap-4 w-full max-w-md">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-[#8a6aa9]/30 transition-all shadow-sm hover:shadow-md"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      boxShadow: '0 10px 30px rgba(138, 106, 169, 0.15)'
                    }}
                  >
                    <div className="mb-2 text-[#8a6aa9]">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#8a6aa9' }}>
                      +{stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative line accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #8a6aa9, transparent)' }} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-[#8a6aa9]"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default WhyPRSparkz;