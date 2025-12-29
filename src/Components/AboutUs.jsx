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

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      title: "We Serve, Not Just Sell",
      description: "Your success is our success. We don't disappear after signing—we stay invested in your growth every step of the way.",
      stat: "98%",
      label: "Client Retention"
    },
    {
      icon: Lightbulb,
      title: "Honest Work, Real Results",
      description: "No fluff, no fake promises. Just practical strategies that work, backed by data and driven by your actual business goals.",
      stat: "100%",
      label: "Transparency"
    },
    {
      icon: Rocket,
      title: "Built for Your Growth",
      description: "We adapt as you evolve. Whether you're starting small or scaling big, we grow alongside your journey with strategies that scale.",
      stat: "3x",
      label: "Avg Growth"
    }
  ];

  const services = [
    { icon: Target, name: "Digital Marketing" },
    { icon: Sparkles, name: "Social Media" },
    { icon: Users, name: "Influencer & Celebrity" },
    { icon: TrendingUp, name: "PR Campaigns" },
    { icon: Award, name: "Web & App Dev" },
    { icon: Star, name: "On-Ground Events" },
    { icon: Lightbulb, name: "Brand Strategy" },
    { icon: Megaphone, name: "Content Creation" }
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
      style={{ paddingTop: 'clamp(5rem, 15vw, 10rem)', paddingBottom: 'clamp(3rem, 8vw, 5rem)' }}
    >
      {/* Animated Background */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs with Parallax */}
        <div 
          className="absolute w-[800px] h-[800px] bg-[#e2d4ed]/30 rounded-full blur-3xl top-0 -left-40 animate-pulse" 
          style={{ 
            animationDuration: '4s',
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] bg-[#cdb8dd]/30 rounded-full blur-3xl bottom-0 -right-40 animate-pulse" 
          style={{ 
            animationDuration: '5s', 
            animationDelay: '1s',
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        ></div>
        <div 
          className="absolute w-[400px] h-[400px] bg-[#ebe2f0]/40 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" 
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
            className="absolute rounded-full bg-[#b99cc8]/20"
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
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#8a6aa9] to-transparent"></div>
            <Sparkles className="w-6 h-6 text-[#8a6aa9] animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#8a6aa9] to-transparent"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 sm:mb-10 md:mb-12 relative px-4">
            <span className="bg-gradient-to-r from-gray-900 via-[#8a6aa9] to-gray-900 bg-clip-text text-transparent">
              ABOUT PR SPARKZ
            </span>
            {/* Animated Underline */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#8a6aa9] via-[#b99cc8] to-[#8a6aa9] rounded-full"
                 style={{ animation: 'expandWidth 1.2s ease-out 0.5s both' }}
            />
          </h1>

          {/* Intro Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gray-900">Transforming Businesses Into </span>
              <span className="bg-gradient-to-r from-[#8a6aa9] to-[#7a5a99] bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We partner with ambitious brands to create powerful market presence through strategic PR, 
              innovative marketing, and measurable results that drive real business growth.
            </p>
          </motion.div>
        </motion.div>

        {/* Founder Spotlight - Moved Up for Credibility */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-[#e2d4ed] overflow-hidden shadow-xl">
            {/* Glassmorphism Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b99cc8]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0f8]/50 via-white/30 to-[#ebe2f0]/30"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-16 relative">
              {/* Left: Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a6aa9] to-[#b99cc8] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative aspect-square max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-[#cdb8dd] group-hover:border-[#b99cc8] transition-all duration-500 shadow-xl">
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
                  <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#ebe2f0] via-white to-[#ebe2f0]">
                    <div className="text-center">
                      <Crown className="w-20 h-20 text-[#8a6aa9] mx-auto mb-4" />
                      <div className="text-3xl font-bold text-[#6a4a89]">PRIYANKA</div>
                      <div className="text-[#8a6aa9]">Founder & CEO</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#8a6aa9] to-[#7a5a99] text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                  <span className="flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Founder
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
                    <span className="bg-gradient-to-r from-gray-900 to-[#8a6aa9] bg-clip-text text-transparent">
                      Priyanka Khandelwal
                    </span>
                  </h2>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-[#8a6aa9] to-transparent"></div>
                    <span className="text-[#8a6aa9] font-semibold">Founder & CEO</span>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                  <p className="text-lg font-medium text-[#6a4a89]">
                    "Building PR Sparkz on one belief: every great business deserves to be seen, valued, and trusted."
                  </p>
                  
                  <p>
                    With over a decade of experience in PR and brand building, Priyanka has helped 
                    hundreds of businesses transform their vision into powerful market presence—with strategic thinking, authentic engagement, and measurable impact.
                  </p>
                  
                  <p className="font-semibold text-gray-900">
                    Your growth is our mission.
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
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#8a6aa9] to-[#7a5a99] bg-clip-text text-transparent mb-1">
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

        {/* Core Values - What Makes Us Different */}
        <div className="mb-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#e2d4ed] bg-white/80 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-[#8a6aa9] animate-pulse"></div>
                <span className="text-sm font-semibold text-[#8a6aa9] tracking-wider uppercase">Our Approach</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-[#8a6aa9] to-gray-900 bg-clip-text text-transparent">
                What Makes Us Different
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Honest work, real partnerships, sustainable growth
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">

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
                  <div className="relative h-full bg-white/70 backdrop-blur-md rounded-2xl border border-[#e2d4ed] p-8 overflow-hidden group-hover:border-[#cdb8dd] group-hover:shadow-xl transition-all duration-500">
                    
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0f8]/60 via-white/40 to-[#ebe2f0]/50"></div>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#b99cc8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#b99cc8]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ebe2f0] to-white border border-[#e2d4ed] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-[#8a6aa9] group-hover:text-[#7a5a99] transition-colors duration-500" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#6a4a89] transition-colors duration-500">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-500">
                      {feature.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-6 border-t border-[#e2d4ed]">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#8a6aa9] to-[#7a5a99] bg-clip-text text-transparent">
                          {feature.stat}
                        </div>
                        <div className="text-sm text-gray-500">{feature.label}</div>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full border-2 border-[#cdb8dd] flex items-center justify-center group-hover:border-[#b99cc8] transition-colors duration-500">
                        <Circle className="w-5 h-5 text-[#8a6aa9]" />
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#ebe2f0] rounded-tr-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#ebe2f0] rounded-bl-2xl"></div>
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
              <span className="bg-gradient-to-r from-gray-900 to-[#8a6aa9] bg-clip-text text-transparent">
                Everything You Need, Under One Roof
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              One team, one vision, zero miscommunication
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 px-4">
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
                  <div className="aspect-square bg-gradient-to-br from-[#f5f0f8] via-white to-[#f5f0f8]/50 rounded-xl border border-[#e2d4ed] p-6 flex flex-col items-center justify-center text-center group-hover:border-[#cdb8dd] group-hover:shadow-xl transition-all duration-300">
                    
                    <div className="mb-3 relative">
                      <div className="absolute inset-0 bg-[#b99cc8]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Icon className="w-8 h-8 text-[#8a6aa9] group-hover:text-[#7a5a99] group-hover:scale-110 transition-all duration-300 relative" />
                    </div>
                    
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#6a4a89] transition-colors duration-300 leading-tight">
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
          <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#e2d4ed] p-6 sm:p-8 md:p-12 overflow-hidden shadow-xl mx-4">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0f8]/60 via-white/40 to-[#ebe2f0]/50"></div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#b99cc8]/5 via-transparent to-[#b99cc8]/5"></div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="mb-3">
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-b from-gray-900 to-[#8a6aa9] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2000 + i * 200} />
                    </div>
                  </div>
                  <div className="text-gray-600 font-semibold group-hover:text-[#8a6aa9] transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#8a6aa9] to-transparent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2d4ed] bg-white/60 backdrop-blur-md shadow-sm mb-4">
              <Award className="w-4 h-4 text-[#8a6aa9]" />
              <span className="text-sm font-semibold text-gray-700">Awards & Recognition</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
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
                  className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-[#e2d4ed] hover:border-[#b99cc8] transition-all duration-300 hover:shadow-lg"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0f8]/60 via-white/40 to-[#ebe2f0]/50 rounded-2xl"></div>
                  <div className="relative text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#ebe2f0] to-white border-2 border-[#e2d4ed] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#7a5a99]" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{award.label}</h4>
                    <p className="text-xs text-[#8a6aa9] font-medium">{award.year}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;