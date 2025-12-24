import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Zap, 
  Target,
  TrendingUp,
  Award,
  Users,
  Brain,
  Lightbulb,
  Rocket,
  Crown,
  Star,
  Circle,
  Globe,
  Megaphone
} from "lucide-react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  // Floating particles effect
  useEffect(() => {
    if (!containerRef.current) return;

    const particles = [];
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    for (let i = 0; i < 20; i++) {
      particles.push({
        id: i,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        size: 2 + Math.random() * 4,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2
      });
    }
    
    setFloatingParticles(particles);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Counter animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, [countersStarted]);

  const features = [
    {
      icon: Brain,
      title: "Strategic Thinking",
      description: "Data-driven strategies that transform your brand's positioning and market presence.",
      stat: "250+",
      label: "Campaigns"
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "Award-winning creative solutions that capture attention and drive engagement.",
      stat: "98%",
      label: "Success Rate"
    },
    {
      icon: Rocket,
      title: "Rapid Growth",
      description: "Accelerated brand development with measurable results and sustainable impact.",
      stat: "3x",
      label: "Avg Growth"
    }
  ];

  const services = [
    { icon: Target, name: "Brand Strategy" },
    { icon: Sparkles, name: "PR Campaigns" },
    { icon: Users, name: "Influencer Marketing" },
    { icon: TrendingUp, name: "Digital Marketing" },
    { icon: Award, name: "Event Management" },
    { icon: Star, name: "Content Creation" }
  ];

  const stats = [
    { value: "500+", label: "Brands Elevated", target: 500, suffix: "+" },
    { value: "98%", label: "Client Retention", target: 98, suffix: "%" },
    { value: "50M+", label: "Reach Generated", target: 50, suffix: "M+" },
    { value: "24/7", label: "Dedicated Support", target: 24, suffix: "/7" }
  ];

  // Animated Counter Component
  const AnimatedCounter = ({ target, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!countersStarted) return;
      
      let startTime;
      let animationFrame;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [countersStarted, target, duration]);
    
    return <span>{count}{suffix}</span>;
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-white text-gray-900 relative overflow-hidden"
      style={{ paddingTop: 'clamp(7rem, 20vw, 10rem)', paddingBottom: '5rem' }}
    >
      {/* Animated Background */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs with Parallax */}
        <div 
          className="absolute w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-3xl top-0 -left-40 animate-pulse" 
          style={{ 
            animationDuration: '4s',
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-3xl bottom-0 -right-40 animate-pulse" 
          style={{ 
            animationDuration: '5s', 
            animationDelay: '1s',
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        ></div>
        <div 
          className="absolute w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" 
          style={{ 
            animationDuration: '6s', 
            animationDelay: '2s',
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.08}px)`
          }}
        ></div>
        
        {/* Floating Particles */}
        {floatingParticles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-purple-400/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '100px 100px'
             }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Top Accent */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              ABOUT PR SPARKZ
            </span>
            {/* Animated Underline */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-full"
                 style={{ animation: 'expandWidth 1.2s ease-out 0.5s both' }}
            />
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don't just build brands—we create <span className="text-purple-600 font-semibold">movements</span>. 
            Every campaign is crafted to make your brand unforgettable.
          </p>
        </motion.div>

        {/* Featured In - Marquee */}
        <motion.div
          className="mb-20 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white/60 backdrop-blur supports-backdrop-blur:backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">As Featured In</span>
            </div>
          </div>
          
          {/* Marquee Container */}
          <div className="relative">
            <div className="flex gap-6 animate-marquee hover:pause-marquee">
              {/* First Set */}
              {[
                "Forbes",
                "Vogue",
                "Times Now",
                "TechCrunch",
                "YourStory",
                "Mint",
                "Economic Times",
                "Business Insider"
              ].map((brand, i) => (
                <div key={i} className="group flex-shrink-0">
                  <div className="relative rounded-full px-6 py-3 text-center border border-purple-200 bg-white/70 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md min-w-[140px]">
                    <span className="text-sm font-semibold bg-gradient-to-r from-gray-800 to-purple-700 bg-clip-text text-transparent whitespace-nowrap">
                      {brand}
                    </span>
                    <div className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.15), rgba(236,72,153,0.12), rgba(168,85,247,0.15))' }} />
                  </div>
                </div>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {[
                "Forbes",
                "Vogue",
                "Times Now",
                "TechCrunch",
                "YourStory",
                "Mint",
                "Economic Times",
                "Business Insider"
              ].map((brand, i) => (
                <div key={`dup-${i}`} className="group flex-shrink-0">
                  <div className="relative rounded-full px-6 py-3 text-center border border-purple-200 bg-white/70 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md min-w-[140px]">
                    <span className="text-sm font-semibold bg-gradient-to-r from-gray-800 to-purple-700 bg-clip-text text-transparent whitespace-nowrap">
                      {brand}
                    </span>
                    <div className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.15), rgba(236,72,153,0.12), rgba(168,85,247,0.15))' }} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        </motion.div>

        {/* Founder Spotlight */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-purple-200 overflow-hidden shadow-xl">
            {/* Glassmorphism Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white/30 to-purple-100/30"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 relative">
              {/* Left: Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-purple-300 group-hover:border-purple-400 transition-all duration-500 shadow-xl">
                  <img 
                    src="/PR-FD.jpeg"
                    alt="Priyanka Khandelwal - Founder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-100">
                    <div className="text-center">
                      <Crown className="w-20 h-20 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-900">PRIYANKA</div>
                      <div className="text-purple-600">Founder & CEO</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                  <span className="flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Founder
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">
                      Priyanka Khandelwal
                    </span>
                  </h2>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
                    <span className="text-purple-600 font-semibold">Founder & CEO</span>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                  <p className="text-lg">
                    "Every brand has a story waiting to be told. My mission is to amplify those stories 
                    and turn them into powerful narratives that resonate across every platform."
                  </p>
                  
                  <p>
                    With over a decade of experience in PR and brand building, Priyanka has helped 
                    hundreds of startups and established brands find their voice and dominate their markets.
                  </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "10+", label: "Years Experience" },
                    { value: "500+", label: "Brands Served" },
                    { value: "50M+", label: "Reach Generated" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Core Features */}
        <div className="mb-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
                What Sets Us Apart
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three pillars of excellence that drive exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                >
                  <div className="relative h-full bg-white/70 backdrop-blur-md rounded-2xl border border-purple-200 p-8 overflow-hidden group-hover:border-purple-300 group-hover:shadow-xl transition-all duration-500">
                    
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white/40 to-purple-100/50"></div>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-white border border-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-500" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-900 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-500">
                      {feature.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-6 border-t border-purple-200">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                          {feature.stat}
                        </div>
                        <div className="text-sm text-gray-500">{feature.label}</div>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full border-2 border-purple-300 flex items-center justify-center group-hover:border-purple-400 transition-colors duration-500">
                        <Circle className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-100 rounded-tr-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-100 rounded-bl-2xl"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive solutions for modern brands
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-xl border border-purple-200 p-6 flex flex-col items-center justify-center text-center group-hover:border-purple-300 group-hover:shadow-xl transition-all duration-300">
                    
                    <div className="mb-3 relative">
                      <div className="absolute inset-0 bg-purple-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Icon className="w-8 h-8 text-purple-600 group-hover:text-purple-700 group-hover:scale-110 transition-all duration-300 relative" />
                    </div>
                    
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-purple-900 transition-colors duration-300 leading-tight">
                      {service.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section with Animated Counters */}
        <motion.div
          ref={statsRef}
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-purple-200 p-12 overflow-hidden shadow-xl">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white/40 to-purple-100/50"></div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-purple-400/5"></div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="mb-3">
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-b from-gray-900 to-purple-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2000 + i * 200} />
                    </div>
                  </div>
                  <div className="text-gray-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white/60 backdrop-blur-md shadow-sm mb-4">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">Awards & Recognition</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: 'Top 10 PR Agency', year: '2024' },
              { icon: Star, label: '5-Star Rated', year: '500+ Reviews' },
              { icon: Users, label: 'Industry Leader', year: '10+ Years' },
              { icon: TrendingUp, label: '98% Success Rate', year: 'Verified' }
            ].map((award, i) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={i}
                  className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white/40 to-purple-100/50 rounded-2xl"></div>
                  <div className="relative text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-100 to-white border-2 border-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-purple-700" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{award.label}</h4>
                    <p className="text-xs text-purple-600 font-medium">{award.year}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Milestones Timeline */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold">
              <span className="bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">Our Milestones</span>
            </h3>
            <p className="text-gray-600 mt-2">A journey of consistent excellence and growth</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-300 via-purple-200 to-transparent" />

            {[
              { year: '2015', title: 'Founded PR Sparkz', desc: 'Launched with a vision to craft unforgettable brand stories.', Icon: Award, detail: 'Started in a small office with 2 people and big dreams' },
              { year: '2019', title: '100+ Clients', desc: 'Crossed 100 successful brand partnerships and campaigns.', Icon: Users, detail: 'Achieved 95% client satisfaction and retention rate' },
              { year: '2023', title: 'Global Expansion', desc: 'Scaled operations and impact across multiple regions.', Icon: Globe, detail: 'Opened offices in 3 countries, team grew to 50+ members' },
              { year: '2025', title: 'Major Press', desc: 'Featured across top media and industry platforms.', Icon: Megaphone, detail: 'Recognized as Top 10 PR Agency by industry leaders' }
            ].map((item, i) => {
              const [isHovered, setIsHovered] = useState(false);
              return (
                <div 
                  key={i} 
                  className={`relative grid md:grid-cols-2 items-center gap-6 md:gap-10 mb-10 ${i % 2 ? 'md:text-left' : 'md:text-right'}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Connector Dot - Animated on hover */}
                  <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 rounded-full bg-purple-500 border-2 border-white shadow" 
                    style={{ top: '1.75rem' }}
                    animate={{ 
                      width: isHovered ? '16px' : '12px',
                      height: isHovered ? '16px' : '12px',
                      boxShadow: isHovered ? '0 0 20px rgba(139, 92, 246, 0.5)' : '0 1px 3px rgba(0,0,0,0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <div className={`${i % 2 ? 'md:col-start-2' : ''}`}>
                    <motion.div 
                      className="relative bg-white/70 backdrop-blur-md border border-purple-200 rounded-2xl p-6 shadow-md overflow-hidden"
                      animate={{
                        y: isHovered ? -8 : 0,
                        scale: isHovered ? 1.02 : 1,
                        boxShadow: isHovered ? '0 20px 40px rgba(139, 92, 246, 0.15)' : '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glassmorphism background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white/40 to-purple-100/50"></div>
                      
                      {/* Hover gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative flex items-start gap-4">
                        <motion.div 
                          className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-white border border-purple-200 flex items-center justify-center"
                          animate={{ rotate: isHovered ? 360 : 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.Icon className="w-6 h-6 text-purple-700" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-purple-700">{item.year}</span>
                            <span className="w-1 h-1 rounded-full bg-purple-300"></span>
                            <h4 className="text-lg font-extrabold text-gray-900">{item.title}</h4>
                          </div>
                          <p className="text-gray-600 mt-2">{item.desc}</p>
                          
                          {/* Extra detail on hover */}
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: isHovered ? 'auto' : 0,
                              opacity: isHovered ? 1 : 0,
                              marginTop: isHovered ? 8 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="flex items-center gap-2 text-sm text-purple-700 font-medium pt-2 border-t border-purple-200">
                              <Sparkles className="w-4 h-4" />
                              <span>{item.detail}</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer on the other side for layout balance */}
                  <div className={`${i % 2 ? '' : 'md:col-start-2'} hidden md:block`} />
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;