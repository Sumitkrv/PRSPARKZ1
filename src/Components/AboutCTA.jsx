import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const AboutCTA = ({ isVisible }) => {
  return (
    <div className="mb-20 relative -mx-[100vw] px-[100vw]" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
      <motion.div 
        className="relative rounded-3xl overflow-hidden p-12"
        style={{ 
          border: `1px solid rgba(255,255,255,0.4)`,
          borderTop: `3px solid rgba(255,255,255,0.7)`,
          borderLeft: `2px solid rgba(255,255,255,0.55)`,
          background: `
            linear-gradient(145deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.28) 100%),
            linear-gradient(135deg, ${theme.midnightPurple}FC 0%, ${theme.violet}F4 15%, ${theme.amethyst}EE 35%, ${theme.plum}E8 50%, ${theme.amethyst}EC 65%, ${theme.violet}F0 85%, ${theme.midnightPurple}F8 100%)
          `,
          boxShadow: `
            0 35px 100px rgba(0,0,0,0.9),
            0 15px 40px rgba(0,0,0,0.7),
            0 0 0 1px rgba(255,255,255,0.38),
            inset 0 5px 10px rgba(255,255,255,0.65),
            inset 0 -5px 15px rgba(0,0,0,0.5),
            inset 0 0 50px rgba(255,255,255,0.15)
          `
        }}
        animate={{
          boxShadow: [
            '0 35px 100px rgba(0,0,0,0.9), 0 15px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.38), inset 0 5px 10px rgba(255,255,255,0.65), inset 0 -5px 15px rgba(0,0,0,0.5), inset 0 0 50px rgba(255,255,255,0.15)',
            '0 40px 110px rgba(154,111,255,0.5), 0 20px 50px rgba(154,111,255,0.3), 0 0 0 1px rgba(255,255,255,0.5), inset 0 6px 12px rgba(255,255,255,0.75), inset 0 -6px 18px rgba(0,0,0,0.6), inset 0 0 60px rgba(255,255,255,0.2)',
            '0 35px 100px rgba(0,0,0,0.9), 0 15px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.38), inset 0 5px 10px rgba(255,255,255,0.65), inset 0 -5px 15px rgba(0,0,0,0.5), inset 0 0 50px rgba(255,255,255,0.15)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Animated metallic shine sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)'
          }}
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />
        <div className="relative text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Shine Brighter?
          </h2>
          
          <p className="text-white text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-light" style={{ opacity: 0.9 }}>
            Let's transform your brand challenges into visible growth and lasting impact. 
            Partner with PR Sparkz for end-to-end solutions that make your brand shine.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              className="group px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              style={{ 
                border: `1px solid rgba(255,255,255,0.2)`,
                background: cardGradient,
                boxShadow: `0 4px 24px rgba(0,0,0,0.3)`
              }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(255,255,255,0.4)',
                boxShadow: `0 8px 32px rgba(0,0,0,0.4)`
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white">Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 relative z-10" style={{ color: '#FFFFFF' }} />
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden"
              style={{ 
                border: `1px solid rgba(255,255,255,0.2)`,
                color: '#FFFFFF',
                background: cardGradient,
                boxShadow: `0 4px 24px rgba(0,0,0,0.3)`
              }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'rgba(255,255,255,0.4)',
                boxShadow: `0 8px 32px rgba(0,0,0,0.4)`
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Our Success Stories</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export default AboutCTA;
