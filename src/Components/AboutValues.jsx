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
    <div className="mb-16 sm:mb-24 md:mb-32 relative -mx-[100vw] px-[100vw]" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
               style={{
                 border: `2px solid rgba(139,95,191,0.3)`,
                 background: `linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(139,95,191,0.12) 50%, rgba(255,255,255,0.98) 100%)`,
                 boxShadow: `0 4px 20px rgba(139,95,191,0.2), inset 0 2px 4px rgba(255,255,255,0.8)`
               }}>
            <div 
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" 
              style={{ 
                background: theme.amethyst
              }}></div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase"
                  style={{ color: theme.amethyst }}>
              Our Philosophy
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            <span style={{ color: '#111827' }}>What Makes Us </span>
            <span 
              className="font-black text-transparent bg-clip-text"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${theme.amethyst}, ${theme.plum}, ${theme.violet})`,
                fontWeight: 900,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              SPARKZ
            </span>
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 relative z-10">
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
                  <div className="relative p-6 sm:p-7 md:p-8">
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto">
                        <div 
                          className="relative w-full h-full rounded-lg flex items-center justify-center"
                          style={{
                            border: `1px solid rgba(139,95,191,0.2)`,
                            background: `linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%), linear-gradient(135deg, rgba(139,95,191,0.05) 0%, rgba(123,76,178,0.03) 100%)`,
                            boxShadow: `0 4px 20px rgba(139,95,191,0.1)`
                          }}>
                          <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" style={{ color: theme.amethyst }} />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center"
                        style={{ color: '#111827' }}>
                      {value.title}
                    </h3>
                    
                    <p className="leading-relaxed text-center text-sm sm:text-base" style={{ color: '#4B5563' }}>
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