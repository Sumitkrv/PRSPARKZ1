import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { scrollToSection } from '../utils/navigation.js';

const WhyPRSparkz = () => {
  const containerRef = useRef(null);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const stats = useMemo(() => [
    {
      number: "127%",
      label: "Growth in Engagement",
      description: "Strategic approach delivers measurable results",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ], []);

  const features = useMemo(() => [
    {
      number: "01",
      title: "We Serve, Not Just Sell",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&q=80"
    },
    {
      number: "02",
      title: "Expert Minds, One Shared Vision",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80"
    },
    {
      number: "03",
      title: "No Fake Promises, Only Real Talk",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80"
    },
    {
      number: "04",
      title: "Everything You Need, Under One Roof",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80"
    },
    {
      number: "05",
      title: "We Highlight What Makes You Great",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80"
    },
    {
      number: "06",
      title: "Built to Grow With You",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&q=80"
    }
  ], []);

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
      {/* Background Elements - Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-96 -z-10 overflow-hidden"
        style={{ y }}
      >
        <motion.div 
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(138, 106, 169, 0.15) 0%, rgba(138, 106, 169, 0.05) 50%, transparent 100%)'
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
            background: 'radial-gradient(circle, rgba(138, 106, 169, 0.1) 0%, rgba(138, 106, 169, 0.03) 50%, transparent 100%)'
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
        {/* Floating sparkles */}
        <motion.div
          className="absolute top-40 left-1/2 w-2 h-2 rounded-full bg-[#8a6aa9]"
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
          className="absolute top-32 right-1/3 w-3 h-3 rounded-full bg-[#8a6aa9]"
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <motion.div
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

          {/* Decorative elements below hero text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-8 mt-8 flex-wrap"
          >
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5 text-[#8a6aa9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Trusted by 100+ brands</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5 text-[#8a6aa9]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5 text-[#8a6aa9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Award-winning agency</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Statistics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative group"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div 
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100"
                role="region"
                aria-label={`Statistic: ${stat.label}`}
              >
                {/* Image Banner */}
                <div className="relative h-40 bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5 overflow-hidden">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5"
                    style={{ display: 'none' }}
                  >
                    <div className="text-5xl font-bold text-[#8a6aa9] opacity-20">+{stat.number}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Stat badge on image */}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                      <span className="text-2xl font-bold text-[#8a6aa9]">+{stat.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 text-center">
                  <div className="flex flex-col items-center">
                    <p className="text-base md:text-lg font-bold text-black mb-2">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
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

      {/* What Makes Us Different Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            What Makes Us{" "}
            <span className="relative inline-block">
              <span style={{ color: '#8a6aa9' }}>Different</span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-3 -z-10"
                style={{ backgroundColor: 'rgba(138, 106, 169, 0.15)' }}
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            More than an agency — we're your growth partner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* 1. We Serve, Not Just Sell */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#8a6aa9]/30 transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -8 }}
          >
            {/* Image Header */}
            <div className="relative h-56 bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5 overflow-hidden">
              <img
                src={features[0].image}
                alt={features[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5"
                style={{ display: 'none' }}
              >
                <div className="text-6xl font-bold text-[#8a6aa9] opacity-20">{features[0].number}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Number badge */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <span className="text-xl font-bold text-[#8a6aa9]">{features[0].number}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                We Serve, Not Just Sell
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We don't treat your brand like a transaction — we treat it like a partnership.</p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>Your goals become our mission.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>We show up, stay involved, and care deeply about your growth.</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a6aa9] to-[#6b5489] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
            />
          </motion.div>

          {/* 2. Expert Minds, One Shared Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#8a6aa9]/30 transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -8 }}
          >
            {/* Image Header */}
            <div className="relative h-56 bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5 overflow-hidden">
              <img
                src={features[1].image}
                alt={features[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5"
                style={{ display: 'none' }}
              >
                <div className="text-6xl font-bold text-[#8a6aa9] opacity-20">{features[1].number}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Number badge */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <span className="text-xl font-bold text-[#8a6aa9]">{features[1].number}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Expert Minds, One Shared Vision
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Our team of specialists brings strategy, creativity, design, web, and influencer expertise under one umbrella.</p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>They don't work in silos — they collaborate to create one powerful, aligned direction for your brand.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>You get the benefit of multiple experts without managing multiple teams.</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a6aa9] to-[#6b5489] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
            />
          </motion.div>

          {/* 3. No Fake Promises only Real talk */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#8a6aa9]/30 transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -8 }}
          >
            {/* Image Header */}
            <div className="relative h-56 bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5 overflow-hidden">
              <img
                src={features[2].image}
                alt={features[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5"
                style={{ display: 'none' }}
              >
                <div className="text-6xl font-bold text-[#8a6aa9] opacity-20">{features[2].number}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Number badge */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <span className="text-xl font-bold text-[#8a6aa9]">{features[2].number}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                No Fake Promises, Only Real Talk
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We avoid vanity metrics and marketing drama.</p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>Everything we deliver is practical, trackable, and directly tied to your business goals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>You don't get stories — you get progress.</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a6aa9] to-[#6b5489] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
            />
          </motion.div>

          {/* 4. Everything You Need, Under One Roof */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#8a6aa9]/30 transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -8 }}
          >
            {/* Image Header */}
            <div className="relative h-56 bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5 overflow-hidden">
              <img
                src={features[3].image}
                alt={features[3].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5"
                style={{ display: 'none' }}
              >
                <div className="text-6xl font-bold text-[#8a6aa9] opacity-20">{features[3].number}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Number badge */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <span className="text-xl font-bold text-[#8a6aa9]">{features[3].number}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Everything You Need, Under One Roof
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Digital marketing, social media, influencers and celebrity marketing, web and app development and designing, On-Ground Marketing— it's all here.</p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>No juggling between agencies. No miscommunication.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>Just one team focused on your success.</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a6aa9] to-[#6b5489] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
            />
          </motion.div>

          {/* 5. We Highlight What Makes You Great */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#8a6aa9]/30 transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -8 }}
          >
            {/* Image Header */}
            <div className="relative h-56 bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5 overflow-hidden">
              <img
                src={features[4].image}
                alt={features[4].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5"
                style={{ display: 'none' }}
              >
                <div className="text-6xl font-bold text-[#8a6aa9] opacity-20">{features[4].number}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Number badge */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <span className="text-xl font-bold text-[#8a6aa9]">{features[4].number}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                We Highlight What Makes You Great
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Your talent, your story, and your uniqueness are the real spark.</p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>We make sure your audience sees what makes you special — clearly, confidently, and consistently.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>You shine. We amplify.</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a6aa9] to-[#6b5489] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
            />
          </motion.div>

          {/* 6. Built to Grow With You */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#8a6aa9]/30 transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -8 }}
          >
            {/* Image Header */}
            <div className="relative h-56 bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5 overflow-hidden">
              <img
                src={features[5].image}
                alt={features[5].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#8a6aa9]/10 to-[#6b5489]/5"
                style={{ display: 'none' }}
              >
                <div className="text-6xl font-bold text-[#8a6aa9] opacity-20">{features[5].number}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Number badge */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-sm shadow-xl">
                  <span className="text-xl font-bold text-[#8a6aa9]">{features[5].number}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Built to Grow With You
              </h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>We don't disappear after launch.</p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>As your business evolves, we adapt strategies, refine messaging, and scale efforts with you.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8a6aa9] mt-1">•</span>
                    <span>Whether you're starting small or expanding big, we grow alongside your journey.</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a6aa9] to-[#6b5489] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
            />
          </motion.div>
        </div>
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
                Book your <span className="font-semibold text-black">strategy session</span> and discover how our proven methodologies can deliver measurable growth for your business.
              </p>

              <div className="mb-8">
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
            <div className="relative p-8 md:p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-[#8a6aa9]/5 to-transparent overflow-hidden">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238a6aa9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }} />
              </div>
              
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