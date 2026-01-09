import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar,
  Palette,
  Home,
  Target as TargetIcon,
  PenTool,
  Laptop,
  Users,
  Rocket,
  TrendingUp
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

const AboutJourney = ({ isVisible }) => {
  const wisteriaGradient = `linear-gradient(135deg, ${theme.wisteria}, ${theme.lavender}, ${theme.orchid})`;
  const lavenderGradient = `linear-gradient(135deg, ${theme.lavender}, ${theme.orchid}, ${theme.mauve})`;
  const amethystGradient = `linear-gradient(135deg, ${theme.amethyst}, ${theme.orchid}, ${theme.plum})`;

  const journeyMilestones = [
    {
      year: "2008",
      title: "Creative Beginning",
      description: "Began career in Fashion Designing with fashion shows and creative styling",
      icon: Palette,
      color: wisteriaGradient
    },
    {
      year: "2010",
      title: "Stepping into Events",
      description: "Transitioned into Event Management as Event & Kiosk Planner",
      icon: Calendar,
      color: lavenderGradient
    },
    {
      year: "2011-2017",
      title: "Foundation Years",
      description: "Strengthened core skills in organization and planning",
      icon: Home,
      color: amethystGradient
    },
    {
      year: "2018",
      title: "The Comeback",
      description: "Contributed to Kamal Nath Ji political campaign planning",
      icon: TargetIcon,
      color: `linear-gradient(135deg, ${theme.plum}, ${theme.amethyst})`
    },
    {
      year: "2019-2020",
      title: "Creative Execution",
      description: "Event Theming & Concept Development",
      icon: PenTool,
      color: `linear-gradient(135deg, ${theme.amethyst}, ${theme.lavender})`
    },
    {
      year: "2021-2022",
      title: "Digital Expansion",
      description: "Digital Marketing under CD, managing platforms and IDE projects",
      icon: Laptop,
      color: `linear-gradient(135deg, ${theme.lavender}, ${theme.orchid})`
    },
    {
      year: "2022-2023",
      title: "Independent Growth",
      description: "Freelancer across events, digital, and brand assignments",
      icon: Users,
      color: `linear-gradient(135deg, ${theme.orchid}, ${theme.mauve})`
    },
    {
      year: "Sept 2023",
      title: "PR Sparkz Born",
      description: "Launched digital marketing company, first client: Vortex",
      icon: Rocket,
      color: `linear-gradient(135deg, ${theme.mauve}, ${theme.amethyst})`
    },
    {
      year: "2024-2025",
      title: "Scaling Brands",
      description: "Working with multiple brands for digital growth and execution",
      icon: TrendingUp,
      color: `linear-gradient(135deg, ${theme.violet}, ${theme.wisteria})`
    }
  ];

  return (
    <div className="mb-16 sm:mb-24 md:mb-32 relative -mx-[100vw] px-[100vw]" style={{
      background: `linear-gradient(135deg, #5B3A8F 0%, #6B4FA0 25%, #7B5FB5 50%, #6B4FA0 75%, #5B3A8F 100%)`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
             style={{
               border: `1px solid rgba(255,255,255,0.2)`,
               background: cardGradient,
               boxShadow: `0 4px 24px rgba(0,0,0,0.3)`
             }}>
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#FFFFFF' }} />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white">
            The Journey
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
          <span className="text-white">From Fashion to </span>
          <span className="text-white" style={{ textShadow: `0 2px 20px ${theme.wisteria}60` }}>
            Digital Entrepreneurship
          </span>
        </h2>
        
        <p className="text-white text-base sm:text-lg max-w-2xl mx-auto font-light px-4 sm:px-0" style={{ opacity: 0.9 }}>
          A 15-year evolution of skills, experiences, and entrepreneurial spirit
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
             style={{
               background: `linear-gradient(to bottom, transparent, ${theme.wisteria}30, ${theme.lavender}60, ${theme.amethyst}30, transparent)`,
               boxShadow: `0 0 20px ${theme.wisteria}20`
             }} />
        
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {journeyMilestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <motion.div
                      className="inline-block p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl w-full max-w-md relative overflow-hidden"
                      style={{
                        border: `1px solid rgba(255,255,255,0.4)`,
                        borderTop: `2px solid rgba(255,255,255,0.65)`,
                        borderLeft: `1.5px solid rgba(255,255,255,0.5)`,
                        background: `
                          linear-gradient(145deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.25) 100%),
                          linear-gradient(135deg, ${theme.midnightPurple}F8 0%, ${theme.violet}F0 25%, ${theme.amethyst}EC 50%, ${theme.plum}E8 75%, ${theme.violet}ED 100%)
                        `,
                        boxShadow: `
                          0 18px 60px rgba(0,0,0,0.8),
                          0 8px 25px rgba(0,0,0,0.5),
                          0 0 0 1px rgba(255,255,255,0.35),
                          inset 0 3px 6px rgba(255,255,255,0.6),
                          inset 0 -3px 10px rgba(0,0,0,0.4),
                          inset 0 0 40px rgba(255,255,255,0.12)
                        `
                      }}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -8,
                        borderColor: 'rgba(255,255,255,0.5)',
                        boxShadow: `
                          0 25px 70px rgba(0,0,0,0.9),
                          0 12px 35px rgba(154,111,255,0.4),
                          0 0 0 1px rgba(255,255,255,0.45),
                          inset 0 4px 8px rgba(255,255,255,0.7),
                          inset 0 -4px 12px rgba(0,0,0,0.5),
                          inset 0 0 50px rgba(255,255,255,0.18)
                        `
                      }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <motion.div 
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                          style={{ 
                            background: milestone.color,
                            border: `1px solid rgba(255,255,255,0.2)`,
                            boxShadow: `0 4px 24px rgba(0,0,0,0.3)`
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: `0 6px 30px rgba(0,0,0,0.4)`
                          }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-white">
                            {milestone.year}
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-white">{milestone.title}</h4>
                        </div>
                      </div>
                      <p className="text-white relative z-10 text-sm sm:text-base" style={{ opacity: 0.9 }}>{milestone.description}</p>
                      
                      {/* Special highlight for PR Sparkz launch */}
                      {milestone.year === "Sept 2023" && (
                        <div 
                          className="mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-lg"
                          style={{
                            border: `1px solid rgba(255,255,255,0.2)`,
                            background: cardGradient,
                            boxShadow: `0 4px 24px rgba(0,0,0,0.3)`
                          }}>
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#FFFFFF' }} />
                            <span className="text-xs sm:text-sm font-medium text-white">
                              First Client: Vortex • Branding, Strategy & Execution
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2"
                      style={{ 
                        background: milestone.color,
                        borderColor: theme.midnightPurple,
                        boxShadow: `0 0 15px ${milestone.color}`
                      }}
                      whileHover={{ scale: 1.5 }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: index * 0.5
                      }}
                    />
                  </div>
                  
                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
    </div>
    </div>
  );
};

export default AboutJourney;
