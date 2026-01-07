import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles,
  Layers,
  Target as Bullseye
} from "lucide-react";

const theme = {
  wisteria: "#E8D5FF",
  lavender: "#D4BDFF",
  orchid: "#C19EFF",
  mauve: "#AD85FF",
  amethyst: "#9A6FFF",
  plum: "#8659D9",
  aubergine: "#7343C0",
  violet: "#5E2FA8",
  midnightPurple: "#4A1F8F"
};

const cardGradient = `
  linear-gradient(145deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.12) 75%, rgba(255,255,255,0.22) 100%),
  linear-gradient(135deg, ${theme.midnightPurple}FA 0%, ${theme.violet}F2 20%, ${theme.amethyst}ED 40%, ${theme.plum}E8 60%, ${theme.violet}EC 80%, ${theme.midnightPurple}F2 100%)
`;

const AboutValues = ({ isVisible }) => {
  const coreValues = [
    {
      icon: Bullseye,
      title: "Solution-Oriented",
      description: "'For every brand problem, I build the solution.' - Our founder's philosophy drives every project",
      color: `linear-gradient(135deg, ${theme.amethyst}30, ${theme.lavender}20)`
    },
    {
      icon: Sparkles,
      title: "Light & Energy",
      description: "True to our name Sparkz - we bring light, energy, and shine to every brand we work with",
      color: `linear-gradient(135deg, ${theme.plum}30, ${theme.amethyst}20)`
    },
    {
      icon: Layers,
      title: "End-to-End Solutions",
      description: "From branding to execution, we deliver comprehensive solutions for real results",
      color: `linear-gradient(135deg, ${theme.midnightPurple}30, ${theme.violet}20)`
    }
  ];

  return (
    <div className="mb-32 relative -mx-[100vw] px-[100vw]" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
             style={{
               border: `2px solid rgba(139,95,191,0.3)`,
               background: `linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(139,95,191,0.12) 50%, rgba(255,255,255,0.98) 100%)`,
               boxShadow: `0 4px 20px rgba(139,95,191,0.2), inset 0 2px 4px rgba(255,255,255,0.8)`
             }}>
          <div 
            className="w-2 h-2 rounded-full animate-pulse" 
            style={{ 
              background: theme.amethyst
            }}></div>
          <span className="text-sm font-semibold tracking-wider uppercase"
                style={{ color: theme.amethyst }}>
            Our Philosophy
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span style={{ color: '#111827' }}>What Makes Us </span>
          <span className="relative inline-block">
            <span 
              className="relative z-10 font-black text-transparent bg-clip-text"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${theme.amethyst}, ${theme.plum}, ${theme.violet})`,
                fontWeight: 900,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              SPARKZ
            </span>
            {/* Intense golden metallic shimmer */}
            <span 
              className="absolute top-0 left-0 font-black pointer-events-none"
              style={{
                fontWeight: 900,
                fontSize: 'inherit',
                background: 'linear-gradient(110deg, transparent 0%, transparent 30%, rgba(184, 134, 11, 0.8) 38%, rgba(218, 165, 32, 1) 43%, rgba(255, 215, 0, 1) 47%, rgba(255, 223, 0, 1) 49%, rgba(255, 250, 205, 1) 50%, rgba(255, 255, 224, 1) 50.5%, rgba(255, 250, 205, 1) 51%, rgba(255, 223, 0, 1) 52%, rgba(255, 215, 0, 1) 54%, rgba(218, 165, 32, 1) 58%, rgba(184, 134, 11, 0.8) 63%, transparent 70%, transparent 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2.2s linear infinite',
                filter: 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 6px rgba(255, 215, 0, 0.9))',
                textShadow: '0 0 20px rgba(255, 215, 0, 0.7)'
              }}>
              SPARKZ
            </span>
          </span>
        </h2>
        <style>
          {`
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
          `}
        </style>
      </motion.div>

      {/* Values Grid */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {coreValues.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="relative h-full rounded-2xl overflow-hidden"
                style={{
                  background: `#FFFFFF`,
                  border: `2px solid rgba(139,95,191,0.25)`,
                  boxShadow: `
                    0 20px 60px rgba(139,95,191,0.15), 
                    inset 0 2px 4px rgba(255,255,255,0.8)
                  `
                }}
                whileHover={{ 
                  borderColor: 'rgba(139,95,191,0.4)',
                  boxShadow: `
                    0 25px 70px rgba(139,95,191,0.2), 
                    inset 0 2px 4px rgba(255,255,255,0.9)
                  `
                }}
              >
                <div className="relative p-8">
                  <div className="mb-6">
                    <div className="relative w-20 h-20 mx-auto">
                      <div 
                        className="relative w-full h-full rounded-lg flex items-center justify-center"
                        style={{
                          border: `1px solid rgba(139,95,191,0.2)`,
                          background: `linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%), linear-gradient(135deg, rgba(139,95,191,0.05) 0%, rgba(123,76,178,0.03) 100%)`,
                          boxShadow: `0 4px 20px rgba(139,95,191,0.1)`
                        }}>
                        <Icon className="w-10 h-10" style={{ color: theme.amethyst }} />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center"
                      style={{ color: '#111827' }}>
                    {value.title}
                  </h3>
                  
                  <p className="leading-relaxed text-center" style={{ color: '#4B5563' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default AboutValues;
