import React, { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TrendingUp, CheckCircle2, Zap } from 'lucide-react';
import { scrollToSection } from '../utils/navigation.js';

const WhyPRSparkz = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Check for mobile view on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Purple Color Palette
  const theme = {
    wisteria: "#E8D5FF",        // Lightest purple
    lavender: "#D4BDFF",
    orchid: "#C19EFF",
    mauve: "#AD85FF",
    amethyst: "#9A6FFF",
    plum: "#8659D9",
    aubergine: "#7343C0",
    violet: "#5E2FA8",
    midnightPurple: "#4A1F8F",  // Darkest purple
    headerGradient1: "#5B3A8F",
    headerGradient2: "#6B4FA0",
    headerGradient3: "#7B5FB5",
    metallicText: "#1a1a1a",
    metallicBorder: "#C0C0C0"
  };

  const stats = useMemo(() => [
    {
      number: "127%",
      label: "Growth in Engagement",
      description: "Strategic approach delivers measurable results",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.amethyst }} />
    },
    {
      number: "89%",
      label: "Brand Consistency",
      description: "Unified messaging across all channels",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80",
      icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.amethyst }} />
    },
    {
      number: "3x",
      label: "Faster Execution",
      description: "AI-powered campaign delivery",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80",
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.amethyst }} />
    }
  ], [theme]);

  const features = useMemo(() => [
    {
      number: "01",
      title: "We Serve, Not Just Sell",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&q=80",
      description: "We don't treat your brand like a transaction — we treat it like a partnership.",
      points: [
        "Your goals become our mission.",
        "We show up, stay involved, and care deeply about your growth."
      ]
    },
    {
      number: "02",
      title: "Expert Minds, One Shared Vision",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80",
      description: "Our team of specialists brings strategy, creativity, design, web, and influencer expertise under one umbrella.",
      points: [
        "They don't work in silos — they collaborate to create one powerful, aligned direction for your brand.",
        "You get the benefit of multiple experts without managing multiple teams."
      ]
    },
    {
      number: "03",
      title: "No Fake Promises, Only Real Talk",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
      description: "We avoid vanity metrics and marketing drama.",
      points: [
        "Everything we deliver is practical, trackable, and directly tied to your business goals.",
        "You don't get stories — you get progress."
      ]
    },
    {
      number: "04",
      title: "Everything You Need, Under One Roof",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
      description: "Digital marketing, social media, influencers and celebrity marketing, web and app development and designing, On-Ground Marketing— it's all here.",
      points: [
        "No juggling between agencies. No miscommunication.",
        "Just one team focused on your success."
      ]
    },
    {
      number: "05",
      title: "We Highlight What Makes You Great",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80",
      description: "Your talent, your story, and your uniqueness are the real spark.",
      points: [
        "We make sure your audience sees what makes you special — clearly, confidently, and consistently.",
        "You shine. We amplify."
      ]
    },
    {
      number: "06",
      title: "Built to Grow With You",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&q=80",
      description: "We don't disappear after launch.",
      points: [
        "As your business evolves, we adapt strategies, refine messaging, and scale efforts with you.",
        "Whether you're starting small or expanding big, we grow alongside your journey."
      ]
    }
  ], []);

  return (
    <section
      id="why-pr-sparkz"
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#FAFAFA] to-white overflow-hidden"
      style={{ 
        paddingTop: 'clamp(80px, 8vw, 140px)',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" 
      }}
      aria-label="Why Choose PR Sparkz"
    >
      {/* Background Elements - Only show on desktop */}
      {!isMobile && (
        <motion.div
          className="absolute top-0 left-0 w-full h-96 -z-10 overflow-hidden hidden md:block"
          style={{ y }}
        >
          <motion.div 
            className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl"
            style={{ 
              background: `radial-gradient(circle, ${theme.amethyst}/10 0%, ${theme.lavender}/5 50%, transparent 100%)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ 
              background: `radial-gradient(circle, ${theme.orchid}/8 0%, ${theme.lavender}/3 50%, transparent 100%)`
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 50, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Floating metallic particles */}
          <motion.div
            className="absolute top-40 left-1/2 w-2 h-2 rounded-full"
            style={{ background: theme.amethyst }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-32 right-1/3 w-3 h-3 rounded-full"
            style={{ background: theme.plum }}
            animate={{
              y: [20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24">
        <motion.div
          style={!isMobile ? { opacity, scale } : {}}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6"
            role="presentation"
            style={{ 
              background: `linear-gradient(135deg, ${theme.wisteria}/5, white)`,
              border: `1px solid ${theme.metallicBorder}`
            }}
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ background: theme.amethyst }} />
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase" style={{ color: theme.metallicText }}>
              Why Choose Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight"
            style={{ color: theme.metallicText }}
          >
            Transform Your Digital{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${theme.amethyst}, ${theme.plum})`
                    }}>
                Presence
              </span>
              <motion.div
                className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-3 -z-10"
                style={{ backgroundColor: `${theme.wisteria}/20` }}
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
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4"
            style={{ color: theme.metallicText, opacity: 0.8 }}
          >
            We craft{" "}
            <span className="font-semibold" style={{ color: theme.metallicText }}>data-driven, AI-powered strategies</span>{" "}
            that spark visibility, growth, and engagement—because your brand's success is ours.
          </motion.p>

          {/* Decorative elements below hero text - Only show on desktop */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center justify-center gap-8 mt-6 md:mt-8 flex-wrap"
            >
              <div className="flex items-center gap-2" style={{ color: theme.metallicText, opacity: 0.6 }}>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: theme.amethyst }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs md:text-sm font-medium">Trusted by 100+ brands</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: theme.metallicText, opacity: 0.6 }}>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: theme.amethyst }}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs md:text-sm font-medium">4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: theme.metallicText, opacity: 0.6 }}>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: theme.amethyst }}>
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs md:text-sm font-medium">Award-winning agency</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* What Makes Us Different Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4" style={{ color: theme.metallicText }}>
            What Makes Us{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${theme.amethyst}, ${theme.plum})`
                    }}>
                Different
              </span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-2 md:h-3 -z-10"
                style={{ backgroundColor: `${theme.wisteria}/20` }}
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4" style={{ color: theme.metallicText, opacity: 0.8 }}>
            More than an agency — we're your growth partner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group relative rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg md:hover:shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, white, ${theme.wisteria})`,
                border: `1px solid ${theme.metallicBorder}`
              }}
              whileHover={{ y: isMobile ? 0 : -8 }}
            >
              {/* Image Header */}
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.wisteria}, white)`,
                    display: 'none'
                  }}
                >
                  <div className="text-4xl md:text-6xl font-bold opacity-20" style={{ color: theme.amethyst }}>{feature.number}</div>
                </div>
                <div className="absolute inset-0" 
                     style={{ 
                       background: `linear-gradient(to top, ${theme.midnightPurple}/70, ${theme.amethyst}/30, transparent)`
                     }} />
                
                {/* Number badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg md:rounded-xl flex items-center justify-center"
                       style={{ 
                         background: `linear-gradient(135deg, white, ${theme.wisteria})`,
                         border: `1px solid ${theme.metallicBorder}`
                       }}>
                    <span className="text-base md:text-lg lg:text-xl font-bold" style={{ color: theme.amethyst }}>{feature.number}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 leading-tight" style={{ color: theme.metallicText }}>
                  {feature.title}
                </h3>
                <div className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: theme.metallicText, opacity: 0.8 }}>
                  <p>{feature.description}</p>
                  <ul className="space-y-1 md:space-y-2 ml-1 md:ml-2">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-1 md:gap-2">
                        <span style={{ color: theme.amethyst }} className="mt-0.5 md:mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ 
                  background: `linear-gradient(90deg, ${theme.amethyst}, ${theme.plum})`
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl"
          style={{ 
            background: `linear-gradient(135deg, white, ${theme.wisteria})`,
            border: `1px solid ${theme.metallicBorder}`
          }}
          role="region"
          aria-label="Call to Action"
        >
          {/* Metallic accent background */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="absolute inset-0" style={{ background: theme.amethyst }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {/* Content Side */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <motion.div 
                className="mb-4 md:mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold"
                      style={{ 
                        background: `${theme.wisteria}/10`,
                        border: `1px solid ${theme.amethyst}/20`,
                        color: theme.amethyst
                      }}>
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Limited Time Offer
                </span>
              </motion.div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight" style={{ color: theme.metallicText }}>
                Ready to Transform Your{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r bg-clip-text text-transparent"
                        style={{ 
                          backgroundImage: `linear-gradient(135deg, ${theme.amethyst}, ${theme.plum})`
                        }}>
                    Digital Presence?
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-2 md:h-3 -z-10"
                    style={{ backgroundColor: `${theme.wisteria}/20` }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </span>
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed" style={{ color: theme.metallicText, opacity: 0.8 }}>
                Book your <span className="font-semibold" style={{ color: theme.metallicText }}>strategy session</span> and discover how our proven methodologies can deliver measurable growth for your business.
              </p>

              <div className="mb-6 md:mb-8">
                <motion.button
                  onClick={() => scrollToSection('contact', 80)}
                  className="group relative px-6 py-3 md:px-8 md:py-4 font-semibold rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.plum}, ${theme.amethyst})`,
                    color: 'white'
                  }}
                  whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                    Schedule Free Consultation
                    <motion.svg 
                      className="w-4 h-4 md:w-5 md:h-5" 
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <motion.div 
                  className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl transition-all"
                  style={{ 
                    background: 'white',
                    border: `1px solid ${theme.metallicBorder}`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  whileHover={{ y: isMobile ? 0 : -2 }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: theme.amethyst }}>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5 text-sm md:text-base" style={{ color: theme.metallicText }}>No long-term contracts</p>
                    <p className="text-xs md:text-sm" style={{ color: theme.metallicText, opacity: 0.7 }}>Flexible month-to-month plans</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl transition-all"
                  style={{ 
                    background: 'white',
                    border: `1px solid ${theme.metallicBorder}`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ y: isMobile ? 0 : -2 }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: theme.amethyst }}>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5 text-sm md:text-base" style={{ color: theme.metallicText }}>Results guaranteed</p>
                    <p className="text-xs md:text-sm" style={{ color: theme.metallicText, opacity: 0.7 }}>Performance-based approach</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats Side - Hide on mobile, show on tablet and desktop */}
            <div className="relative p-6 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center overflow-hidden hidden lg:block">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237B68EE' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }} />
              </div>
              
              {/* Decorative circles */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
                  style={{ background: theme.amethyst }}
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
                  style={{ background: theme.amethyst }}
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
              <div className="relative grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-all"
                    style={{ 
                      background: `linear-gradient(135deg, white, ${theme.wisteria})`,
                      border: `1px solid ${theme.metallicBorder}`
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                  >
                    <div className="mb-1 md:mb-2" style={{ color: theme.amethyst }}>{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2" style={{ color: theme.amethyst }}>
                      +{stat.number}
                    </div>
                    <div className="text-xs md:text-sm font-medium leading-tight" style={{ color: theme.metallicText, opacity: 0.8 }}>
                      {stat.label}
                    </div>
                    <div className="text-xs mt-1 md:mt-2" style={{ color: theme.metallicText, opacity: 0.6 }}>
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative line accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${theme.amethyst}, transparent)` }} />
        </motion.div>
      </div>

      {/* Scroll indicator - Only show on desktop */}
      {!isMobile && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow focus:outline-none"
            style={{ 
              background: 'white',
              border: `1px solid ${theme.metallicBorder}`
            }}
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ stroke: theme.metallicText }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default WhyPRSparkz;