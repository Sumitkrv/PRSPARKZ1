import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { Briefcase, Sparkles, MessageCircle, Mail, Menu } from 'lucide-react';
import { scrollToSection, handleHashNavigation } from '../utils/navigation.js';

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFloatingNavHovered, setIsFloatingNavHovered] = useState(false);
  const menuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const threeContainerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const particlesRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const interactiveMeshesRef = useRef([]);
  const animationIdRef = useRef(null);

  // Window resize detection
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll detection with smooth threshold
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      // Show floating nav after scrolling past hero section (typically 100vh)
      const heroHeight = window.innerHeight * 0.8;
      setShowFloatingNav(window.scrollY > heroHeight);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on location change
  useEffect(() => {
    handleHashNavigation();
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Initialize Three.js scene with responsive handling
  useEffect(() => {
    if (!threeContainerRef.current) return;

    const initThreeJS = () => {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      cameraRef.current = camera;

      // Renderer setup with improved settings
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Clear existing canvas if any
      if (threeContainerRef.current.firstChild) {
        threeContainerRef.current.removeChild(threeContainerRef.current.firstChild);
      }
      threeContainerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Create particle system
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = windowWidth < 768 ? 600 : 1200; // Reduce particles on mobile
      
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);
      
      for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 20;
        posArray[i + 1] = (Math.random() - 0.5) * 20;
        posArray[i + 2] = (Math.random() - 0.5) * 10;
        
        const isWhite = Math.random() > 0.85;
        
        if (isWhite) {
          colorArray[i] = 0.95 + Math.random() * 0.05;
          colorArray[i + 1] = 0.95 + Math.random() * 0.05;
          colorArray[i + 2] = 0.95 + Math.random() * 0.05;
        } else {
          colorArray[i] = 0.8 + Math.random() * 0.2;
          colorArray[i + 1] = 0.7 + Math.random() * 0.2;
          colorArray[i + 2] = 0.9 + Math.random() * 0.1;
        }
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: windowWidth < 768 ? 0.03 : 0.04, // Smaller particles on mobile
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      });
      
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);
      particlesRef.current = particles;

      // Add subtle lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Create interactive elements
      const createInteractiveElement = (x, y, z, size, color) => {
        const geometry = new THREE.IcosahedronGeometry(size, 1);
        const material = new THREE.MeshPhongMaterial({
          color,
          emissive: color,
          emissiveIntensity: 0.1,
          transparent: true,
          opacity: 0.6,
          specular: 0xffffff,
          shininess: 30
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        mesh.userData = { originalScale: size, hover: false };
        scene.add(mesh);
        interactiveMeshesRef.current.push(mesh);
        return mesh;
      };

      // Add interactive elements only on desktop
      if (windowWidth >= 768) {
        createInteractiveElement(-4, 2, 3, 0.4, 0x9678d6);
        createInteractiveElement(4, -2, 2, 0.5, 0xb8a7e3);
        createInteractiveElement(0, 4, 4, 0.6, 0xd6caf0);
      }

      // Mouse move handler for interaction (desktop only)
      const handleMouseMove = (event) => {
        if (windowWidth >= 768) {
          mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Animation
      const clock = new THREE.Clock();
      
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        
        if (particlesRef.current) {
          particlesRef.current.rotation.x = elapsedTime * 0.03;
          particlesRef.current.rotation.y = elapsedTime * 0.05;
          
          particlesRef.current.scale.set(
            1 + Math.sin(elapsedTime * 0.5) * 0.02,
            1 + Math.sin(elapsedTime * 0.5) * 0.02,
            1
          );
        }
        
        // Interactive elements animation (desktop only)
        if (windowWidth >= 768) {
          interactiveMeshesRef.current.forEach(mesh => {
            mesh.rotation.x = elapsedTime * 0.1;
            mesh.rotation.y = elapsedTime * 0.15;
            
            const targetScale = mesh.userData.hover ? mesh.userData.originalScale * 1.4 : mesh.userData.originalScale;
            const targetOpacity = mesh.userData.hover ? 0.9 : 0.6;
            
            mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
            mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, targetOpacity, 0.1);
          });
          
          // Raycasting for interaction
          raycasterRef.current.setFromCamera(mouseRef.current, camera);
          const intersects = raycasterRef.current.intersectObjects(interactiveMeshesRef.current);
          
          interactiveMeshesRef.current.forEach(mesh => {
            mesh.userData.hover = false;
          });
          
          if (intersects.length > 0) {
            intersects[0].object.userData.hover = true;
          }
        }
        
        renderer.render(scene, camera);
      };
      
      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);

      return () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        
        if (threeContainerRef.current && rendererRef.current?.domElement) {
          threeContainerRef.current.removeChild(rendererRef.current.domElement);
        }
        
        // Dispose of Three.js objects
        if (particlesRef.current) {
          particlesRef.current.geometry.dispose();
          particlesRef.current.material.dispose();
        }
        
        interactiveMeshesRef.current.forEach(mesh => {
          mesh.geometry.dispose();
          mesh.material.dispose();
          scene.remove(mesh);
        });
        
        interactiveMeshesRef.current = [];
      };
    };

    const cleanup = initThreeJS();
    return cleanup;
  }, [windowWidth]);

  const handleDropdownEnter = (item) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setHoveredItem(item);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  const toggleMobileDropdown = (itemLabel) => {
    if (mobileOpenDropdown === itemLabel) {
      setMobileOpenDropdown(null);
    } else {
      setMobileOpenDropdown(itemLabel);
    }
  };

  const handleNavSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === 'contact') {
      window.location.href = '/#contact';
    } else if (sectionId === 'services') {
      window.location.href = '/#services';
    } else if (location.pathname === '/') {
      scrollToSection(sectionId, 80);
      window.location.hash = `#${sectionId}`;
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId, 80);
        window.location.hash = `#${sectionId}`;
      }, 100);
    }
    if (windowWidth < 1024) {
      setIsMenuOpen(false);
      setMobileOpenDropdown(null);
    }
  };

  const navItems = [
    { label: 'Home', path: '/', icon: '◉', isSection: false },
    { label: 'Services', path: '#services', icon: '◎', isSection: true },
    // { label: 'Portfolio', path: '/portfolio', icon: '◆', isSection: false }, // Temporarily hidden
    { label: 'About', path: '/about', icon: '◈', isSection: false },
    { label: 'Contact', path: '#contact', icon: '◐', isSection: true }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Three.js Container - Hidden on mobile for performance */}
      <div 
        ref={threeContainerRef} 
        className="fixed inset-0 -z-10 opacity-30 pointer-events-none hidden sm:block"
      />
      
      <nav ref={menuRef} className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl py-2 sm:py-2 md:py-3' 
          : 'bg-white/80 py-4 sm:py-4 md:py-5'
      }`} style={{ fontFamily: "'Montserrat', sans-serif", minHeight: windowWidth < 768 ? '80px' : 'auto' }}>
        
        {/* Premium glass morphism overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#d5c4e0]/30 via-[#ebe2f0]/30 to-[#b99cc8]/30"></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Responsive Logo */}
            <a href="/" className="group cursor-pointer interactive relative">
              <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <img 
                  src="/logo.png" 
                  alt="PR Sparkz" 
                  className="object-contain w-full h-full drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                />
              </div>
              {/* Floating particles - Enhanced */}
              <div className="hidden sm:block">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#9d7bb8] rounded-full opacity-70 group-hover:animate-ping transition-all duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#b99cc8] rounded-full opacity-60 group-hover:animate-ping delay-150 transition-all duration-300"></div>
              </div>
            </a>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  {item.isSection ? (
                    <a
                      href={item.path}
                      onClick={(e) => handleNavSectionClick(e, item.path.substring(1))}
                      className="nav-item group relative px-4 xl:px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center interactive hover:shadow-md"
                    >
                      <div className="flex items-center space-x-2 relative z-10">
                        <span className="text-[#8a6aa9] text-base group-hover:text-[#7a5a99] transition-colors duration-300 group-hover:scale-110 inline-block">
                          {item.icon}
                        </span>
                        <span className="text-gray-800 font-semibold group-hover:text-[#6a4a89] transition-all duration-300 tracking-wide text-sm xl:text-base">
                          {item.label}
                        </span>
                      </div>
                      
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f5f0f8] to-[#ebe2f0]/70 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#f5f0f8] to-[#8a6aa9] rounded-full group-hover:w-3/4 transition-all duration-300"></div>
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-item group relative px-4 xl:px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center interactive hover:shadow-md ${
                        isActive(item.path) ? 'bg-gradient-to-r from-[#ebe2f0] to-[#f5f0f8] shadow-sm' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-2 relative z-10">
                        <span className={`text-base transition-all duration-300 group-hover:scale-110 inline-block ${
                          isActive(item.path) ? 'text-[#7a5a99]' : 'text-[#8a6aa9] group-hover:text-[#7a5a99]'
                        }`}>
                          {item.icon}
                        </span>
                        <span className={`font-semibold transition-all duration-300 tracking-wide text-sm xl:text-base ${
                          isActive(item.path) ? 'text-[#6a4a89]' : 'text-gray-800 group-hover:text-[#6a4a89]'
                        }`}>
                          {item.label}
                        </span>
                      </div>
                      
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f5f0f8] to-[#ebe2f0]/70 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#f5f0f8] to-[#8a6aa9] rounded-full transition-all duration-300 ${
                        isActive(item.path) ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                      }`}></div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Premium CTA Button - Hidden on mobile */}
            <div className="hidden lg:flex items-center">
              <a href="#contact" onClick={(e) => handleNavSectionClick(e, 'contact')} className="group relative overflow-hidden px-6 xl:px-8 py-3 rounded-xl bg-gradient-to-r from-[#8a6aa9] via-[#7a5a99] to-[#6a4a89] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f5f0f8]/40 interactive cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7a5a99] via-[#6a4a89] to-[#5a3a79] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-white animate-pulse"></div>
                </div>
                <span className="relative z-10 text-white font-bold text-sm xl:text-base flex items-center space-x-2 tracking-wide">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative rounded-xl bg-[#f5f0f8]/60 backdrop-blur-sm border border-[#d5c4e0] flex items-center justify-center group hover:bg-[#ebe2f0]/60 transition-all duration-300 interactive shadow-sm w-11 h-11 min-w-[44px] min-h-[44px]`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-5 h-5">
                <span className={`absolute block h-0.5 w-5 bg-[#8a6aa9] rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'top-2 rotate-45' : 'top-1'
                }`}></span>
                <span className={`absolute block h-0.5 w-5 bg-[#8a6aa9] rounded-full top-2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block h-0.5 w-5 bg-[#8a6aa9] rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'top-2 -rotate-45' : 'top-3'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-400 z-40 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/97 backdrop-blur-2xl border-b border-[#d5c4e0] shadow-2xl shadow-[#f5f0f8]/10 max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-1.5">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.isSection ? (
                      <a
                        href={item.path}
                        onClick={(e) => {
                          handleNavSectionClick(e, item.path.substring(1));
                          setIsMenuOpen(false);
                          setMobileOpenDropdown(null);
                        }}
                        className="group flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 interactive cursor-pointer hover:bg-gradient-to-r hover:from-[#f5f0f8] hover:to-[#ebe2f0]/60 hover:shadow-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ebe2f0] to-[#d5c4e0] flex items-center justify-center group-hover:from-[#f5f0f8] group-hover:to-[#8a6aa9] transition-all duration-300 group-hover:scale-110">
                            <span className="text-[#8a6aa9] group-hover:text-white text-lg font-bold transition-colors duration-300">{item.icon}</span>
                          </div>
                          <span className="text-gray-800 font-semibold group-hover:text-[#6a4a89] text-base transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>
                        <svg className="w-4 h-4 text-[#9d7bb8] opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileOpenDropdown(null);
                        }}
                        className={`group flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 interactive hover:shadow-sm ${
                          isActive(item.path) ? 'bg-gradient-to-r from-[#ebe2f0] to-[#f5f0f8] shadow-sm' : 'hover:bg-gradient-to-r hover:from-[#f5f0f8] hover:to-[#ebe2f0]/60'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isActive(item.path)
                              ? 'bg-gradient-to-br from-[#f5f0f8] to-[#8a6aa9] scale-110'
                              : 'bg-gradient-to-br from-[#ebe2f0] to-[#d5c4e0] group-hover:from-[#f5f0f8] group-hover:to-[#8a6aa9] group-hover:scale-110'
                          }`}>
                            <span className={`text-lg font-bold transition-colors duration-300 ${
                              isActive(item.path)
                                ? 'text-white'
                                : 'text-[#8a6aa9] group-hover:text-white'
                            }`}>{item.icon}</span>
                          </div>
                          <span className={`font-semibold text-base transition-colors duration-300 ${
                            isActive(item.path)
                              ? 'text-[#6a4a89]'
                              : 'text-gray-800 group-hover:text-[#6a4a89]'
                          }`}>
                            {item.label}
                          </span>
                        </div>
                        <svg className={`w-4 h-4 text-[#9d7bb8] transition-all duration-300 ${
                          isActive(item.path)
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-100'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA Button */}
              <div className="mt-5 pt-5 border-t border-[#d5c4e0]">
                <a 
                  href="#contact"
                  onClick={(e) => {
                    handleNavSectionClick(e, 'contact');
                    setIsMenuOpen(false);
                    setMobileOpenDropdown(null);
                  }}
                  className="w-full group relative overflow-hidden px-6 py-4 rounded-xl bg-gradient-to-r from-[#8a6aa9] via-[#7a5a99] to-[#6a4a89] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#f5f0f8]/30 block interactive cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7a5a99] via-[#6a4a89] to-[#5a3a79] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-white font-bold flex items-center justify-center space-x-2 text-base">
                    <span>Get Started</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Navigation Sidebar - Circle Design */}
      <div 
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
          showFloatingNav && location.pathname === '/' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20 pointer-events-none'
        }`}
        onMouseEnter={() => setIsFloatingNavHovered(true)}
        onMouseLeave={() => setIsFloatingNavHovered(false)}
      >
        <div className="relative">
          {/* Floating Icon Button - Circle */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-[#f5f0f8] via-[#8a6aa9] to-[#7a5a99] rounded-full opacity-20 blur-xl group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
            <button className="relative w-14 h-14 bg-gradient-to-br from-white via-[#f5f0f8] to-white backdrop-blur-xl border-2 border-[#9d7bb8] rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#8a6aa9] transition-all duration-500 group-hover:shadow-[#f5f0f8]/50">
              <Menu className="w-6 h-6 text-[#8a6aa9] group-hover:text-[#7a5a99] transition-colors duration-300" strokeWidth={2.5} />
            </button>
          </div>

          {/* Bridge element to prevent hover gaps */}
          <div className={`absolute left-12 top-1/2 -translate-y-1/2 w-8 h-20 transition-all duration-300 ${
            isFloatingNavHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}></div>

          {/* Sections Menu - Vertical Circles */}
          <div className={`absolute left-16 top-1/2 -translate-y-1/2 transition-all duration-500 ${
            isFloatingNavHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-90 pointer-events-none'
          }`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#9d7bb8] via-[#f5f0f8]0 to-[#8a6aa9] rounded-full opacity-20 blur-xl"></div>
              
              {/* Main menu container - Vertical */}
              <div className="relative space-y-3">
                {[
                  { label: 'Services', section: 'services', Icon: Briefcase, color: 'from-[#8a6aa9] to-[#7a5a99]' },
                  { label: 'Why Us', section: 'why-pr-sparkz', Icon: Sparkles, color: 'from-[#9d7bb8] to-[#8a6aa9]' },
                  { label: 'Testimonials', section: 'testimonials', Icon: MessageCircle, color: 'from-[#7a5a99] to-[#6a4a89]' },
                  { label: 'Contact', section: 'contact', Icon: Mail, color: 'from-[#8a6aa9] to-[#6a4a89]' }
                ].map((item, index) => {
                  const IconComponent = item.Icon;
                  return (
                    <div key={item.label} style={{ animationDelay: `${index * 50}ms` }} className="animate-[float-in_0.3s_ease-out_forwards]">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (location.pathname === '/') {
                            scrollToSection(item.section, 80);
                          } else {
                            navigate('/');
                            setTimeout(() => scrollToSection(item.section, 80), 100);
                          }
                        }}
                        className="group relative flex items-center cursor-pointer"
                      >
                        {/* Circular icon button */}
                        <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#8a6aa9]/50 z-10`}>
                          <IconComponent className="w-5 h-5 text-white" strokeWidth={2.5} />
                          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Outer ring on hover */}
                          <div className="absolute -inset-1 rounded-full border-2 border-[#8a6aa9]/60 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-300"></div>
                        </div>
                        
                        {/* Label tooltip - appears on hover with circle background */}
                        <div className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300 pointer-events-none z-20">
                          <div className="relative">
                            <div className="bg-white/95 backdrop-blur-xl rounded-full px-5 py-2.5 shadow-xl border border-[#d5c4e0]">
                              <span className="text-gray-900 font-semibold text-sm whitespace-nowrap">
                                {item.label}
                              </span>
                            </div>
                            {/* Triangle pointer */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-white/95 border-l border-b border-[#d5c4e0] rotate-45"></div>
                          </div>
                        </div>
                        
                        {/* Ripple effect */}
                        <div className="absolute inset-0 rounded-full bg-[#8a6aa9]/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS styles for responsive design */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        /* Premium scroll animations */
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-item {
          animation: float-in 0.5s ease-out forwards;
          opacity: 0;
        }

        /* Smooth transitions for all interactive elements */
        .interactive {
          transition: all 0.3s ease;
        }

        /* Enhanced professional focus states */
        .interactive:focus {
          outline: 2px solid rgba(166, 139, 227, 0.6);
          outline-offset: 2px;
        }

        /* High-performance animations and mobile optimizations */
        @media (prefers-reduced-motion: reduce) {
          .interactive,
          .nav-item {
            transition: none;
            animation: none;
          }
        }

        /* Mobile-specific optimizations */
        @media (max-width: 767px) {
          /* Improve touch targets */
          button, a, .interactive {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Better scrolling for mobile menu */
          .max-h-\[80vh\] {
            max-height: 80vh;
          }
          
          /* Ensure navbar height consistency */
          nav {
            min-height: 80px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          /* Tighter spacing for very small screens */
          .max-w-7xl {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          nav {
            min-height: 75px;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 768px) and (max-width: 1023px) {
          /* Adjust padding and spacing for tablet */
          .max-w-7xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ModernNavbar;