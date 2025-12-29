import React, { useState, useEffect } from 'react';

const SparkzHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <>
      <section
        id="home"
        className="hero-section"
      >
        {/* Video Background Container */}
        <div className="video-wrapper">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hero-video"
          >
            <source src="/Marketing_Company_Hero_Video_Generated.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="video-overlay"></div>
        </div>

        {/* Content Container */}
        <div className="hero-content">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            
            {/* Main Headline (hidden visually but space preserved) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 opacity-0 pointer-events-none" aria-hidden="true">
              <div>You Grow,</div>
              <div className="bg-clip-text text-transparent" style={{ 
                background: 'linear-gradient(135deg, #8a6aa9, #c9b3d8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                We Grow
              </div>
            </h1>

            {/* Subheadline (hidden visually but space preserved) */}
            <p className="text-xl md:text-2xl font-semibold mb-8 opacity-0 pointer-events-none" style={{ color: '#8a6aa9' }} aria-hidden="true">
              Your brand's growth is our growth
            </p>

            {/* Divider (hidden visually but space preserved) */}
            <div className="flex justify-center items-center my-10 opacity-0 pointer-events-none" aria-hidden="true">
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#c9b3d8' }}></div>
              <div className="w-3 h-3 rounded-full mx-4" style={{ backgroundColor: '#8a6aa9' }}></div>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#c9b3d8' }}></div>
            </div>

            {/* Description (hidden visually but space preserved) */}
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto opacity-0 pointer-events-none" aria-hidden="true">
              At <span className="font-semibold" style={{ color: '#8a6aa9' }}>PR Sparkz</span>, we create digital presence that drives real growth. 
              Your success is our success—we're partners in your journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
              <button
                onClick={scrollToContact}
                className="cta-button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-current flex-shrink-0">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
                <span className="text-sm sm:text-[15px] md:text-base">Start a Project</span>
              </button>

              <button
                onClick={scrollToContact}
                className="cta-button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-current flex-shrink-0">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                </svg>
                <span className="text-sm sm:text-[15px] md:text-base">Book a Call</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </section>
      
      {/* Complete CSS Solution */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .hero-section {
          font-family: 'Montserrat', sans-serif;
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 7rem;
        }
        
        .video-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.2));
          z-index: 1;
          pointer-events: none;
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .cta-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: white;
          font-weight: 600;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          transform: scale(1);
          display: flex;
          align-items: center;
          justify-center: center;
          gap: 0.5rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          touch-action: manipulation;
        }
        
        .cta-button:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.05);
          box-shadow: 0 20px 70px rgba(255, 255, 255, 0.28);
        }
        
        .cta-button:active {
          transform: scale(0.95);
        }
        
        /* Mobile Portrait */
        @media (max-width: 640px) and (orientation: portrait) {
          .hero-section {
            padding-top: 5rem;
          }
          
          .cta-button {
            padding: 1rem 1.5rem;
          }
        }
        
        /* Mobile Landscape */
        @media (max-width: 896px) and (orientation: landscape) {
          .hero-section {
            padding-top: 4.5rem;
          }
        }
        
        /* Tablet */
        @media (min-width: 641px) and (max-width: 1024px) {
          .cta-button {
            width: auto;
            min-width: 200px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1025px) {
          .cta-button {
            width: auto;
            min-width: 200px;
            padding: 1rem 2rem;
          }
        }
        
        /* Ultra-wide screens */
        @media (min-aspect-ratio: 21/9) {
          .hero-video {
            height: 100%;
            width: auto;
            min-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default SparkzHero;