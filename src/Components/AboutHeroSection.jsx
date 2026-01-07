import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Target,
  TrendingUp,
  PenTool,
  Crown,
  Palette,
  Target as TargetIcon,
  Rocket,
  Clock,
  Globe
} from "lucide-react";

// UPDATED COLOR PALETTE - WHITE BACKGROUND WITH PURPLE ACCENTS
const theme = {
  wisteria: "#8B5FBF",     // Darker purple for contrast on white
  lavender: "#7B4CB2",     // Medium purple
  orchid: "#6A39A5",       // Rich purple
  mauve: "#5A2698",        // Deep purple
  amethyst: "#4A138B",     // Royal purple
  plum: "#3A007E",         // Very deep purple
  aubergine: "#2A0071",    // Dark purple
  violet: "#1A0064",       // Darkest purple
  lightBg: "#F9F7FF",      // Very light purple background
  white: "#FFFFFF"         // Pure white
};

// Card gradient for consistent styling - updated for white background
const cardGradient = `
  linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%),
  linear-gradient(135deg, rgba(139,95,191,0.05) 0%, rgba(123,76,178,0.03) 100%)
`;

const AboutHeroSection = ({ isVisible }) => {
  return (
    <>
      {/* Mission Section - "Elevating Brands Through Strategic Innovation" */}
      <motion.div
        className="mb-32 relative -mx-[100vw] px-[100vw]"
        style={{
          background: '#FFFFFF'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full px-6 py-20">
          <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-3xl p-12"
            style={{
              border: `2px solid rgba(139,95,191,0.25)`,
              background: `#FFFFFF`,
              boxShadow: `0 20px 60px rgba(139,95,191,0.15), inset 0 2px 4px rgba(255,255,255,0.8)`
            }}>
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
              style={{
                border: `2px solid rgba(139,95,191,0.3)`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(139,95,191,0.12) 50%, rgba(255,255,255,0.98) 100%)`,
                boxShadow: `0 4px 20px rgba(139,95,191,0.2), inset 0 2px 4px rgba(255,255,255,0.8)`
              }}>
              <Sparkles 
                className="w-4 h-4" 
                style={{ color: theme.amethyst }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold tracking-wider uppercase"
                    style={{ color: theme.amethyst }}>
                Our Why
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
              <span style={{ color: '#111827' }}>Elevating Brands Through </span>
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r bg-clip-text text-transparent" 
                      style={{ 
                        backgroundImage: `linear-gradient(135deg, ${theme.wisteria}, ${theme.lavender}, ${theme.amethyst})`
                      }}>
                  Strategic Innovation
                </span>
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Mission Statement */}
            <div className="space-y-8 relative">
              <div 
                className="text-2xl font-light italic mb-8 border-l-4 pl-6 py-4 rounded-r-lg"
                style={{ 
                  borderColor: theme.wisteria,
                  background: `rgba(139,95,191,0.05)`,
                  color: '#374151'
                }}>
                "PR Sparkz was created to turn brand challenges into visibility, growth, and lasting impact."
              </div>
              
              <p className="text-xl leading-relaxed" style={{ color: '#4B5563' }}>
                True to our name, Sparkz represents light, energy, and shine. We help brands stand out through branding, website development, digital marketing, PR, and on-ground activations, delivering end-to-end solutions that drive real results.
              </p>
              
              <p className="text-xl leading-relaxed" style={{ color: '#4B5563' }}>
                At PR Sparkz, we don't just promote brands - we help them shine.
              </p>
            </div>
            
            {/* Right: Mission Graphic */}
            <div className="relative">
              <motion.div 
                className="relative rounded-3xl overflow-hidden"
                style={{
                  border: `1px solid rgba(139,95,191,0.2)`,
                  borderTop: `2.5px solid rgba(139,95,191,0.4)`,
                  borderLeft: `1.5px solid rgba(139,95,191,0.3)`,
                  background: `
                    linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,1) 100%),
                    linear-gradient(135deg, rgba(139,95,191,0.05) 0%, rgba(123,76,178,0.03) 100%)
                  `,
                  boxShadow: `
                    0 30px 90px rgba(139,95,191,0.1),
                    0 12px 35px rgba(139,95,191,0.08),
                    0 0 0 1px rgba(139,95,191,0.1),
                    inset 0 4px 8px rgba(255,255,255,0.8),
                    inset 0 -4px 12px rgba(139,95,191,0.05)
                  `
                }}
                whileHover={{ 
                  borderColor: `rgba(139,95,191,0.3)`,
                  boxShadow: `
                    0 35px 100px rgba(139,95,191,0.15),
                    0 18px 45px rgba(139,95,191,0.1),
                    0 0 0 1px rgba(139,95,191,0.2),
                    inset 0 5px 10px rgba(255,255,255,0.9),
                    inset 0 -5px 15px rgba(139,95,191,0.08)
                  `
                }}
              >
                <div className="aspect-[4/3] flex items-center justify-center p-12">
                  <div className="text-center relative z-10">
                    <motion.div 
                      className="relative inline-block mb-8"
                      animate={{ 
                        scale: [1, 1.1, 1], 
                        rotate: [0, 10, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div 
                        className="absolute inset-0 rounded-full"
                        style={{ 
                          background: `radial-gradient(circle, ${theme.wisteria}20, transparent 70%)`,
                          opacity: 0.5
                        }}></div>
                      <div 
                        className="relative w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                          border: `1px solid rgba(139,95,191,0.3)`,
                          background: cardGradient,
                          boxShadow: `0 4px 20px rgba(139,95,191,0.1)`
                        }}>
                        <Sparkles className="w-12 h-12" style={{ color: theme.amethyst }} />
                      </div>
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4"
                        style={{ color: '#111827' }}>
                      The Sparkz Difference
                    </h3>
                    <p className="font-light" style={{ color: '#6B7280' }}>
                      Where challenges meet innovative solutions, and brands learn to shine
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {['Strategy', 'Execution', 'Growth'].map((item, i) => (
                        <motion.div
                          key={i}
                          className="text-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <motion.div 
                            className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-2"
                            style={{
                              border: `1px solid rgba(139,95,191,0.2)`,
                              background: cardGradient,
                              boxShadow: `0 4px 20px rgba(139,95,191,0.1)`
                            }}
                            whileHover={{ 
                              scale: 1.15,
                              borderColor: `rgba(139,95,191,0.4)`,
                            }}
                          >
                            {i === 0 && <Target className="w-6 h-6" style={{ color: theme.amethyst }} />}
                            {i === 1 && <PenTool className="w-6 h-6" style={{ color: theme.amethyst }} />}
                            {i === 2 && <TrendingUp className="w-6 h-6" style={{ color: theme.amethyst }} />}
                          </motion.div>
                          <div className="text-sm font-medium"
                               style={{ color: '#374151' }}>{item}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutHeroSection;