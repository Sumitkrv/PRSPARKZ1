import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Facebook, 
  Linkedin,
  Home,
  Briefcase,
  FolderOpen,
  MessageSquare,
  Info,
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { scrollToSection, handleSectionClick } from '../utils/navigation.js';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const WEB3FORMS_ACCESS_KEY = "0525684b-fa9d-4611-91c2-06119bbb2ea1";

  const handleSubscribe = async () => {
    if (email && !isSubmitting) {
      setIsSubmitting(true);

      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("email", email);
      formData.append("subject", "New Newsletter Subscription - PR Sparkz");
      formData.append("from_name", "PR Sparkz Newsletter");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setIsSubscribed(true);
          setEmail('');
          setTimeout(() => {
            setIsSubscribed(false);
            setIsSubmitting(false);
          }, 3000);
        } else {
          console.error("Subscription error:", data);
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error("Network error:", error);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block group mb-6"
              >
                <h2 className="text-xl font-bold text-gray-900">PR SPARKZ</h2>
                <p className="text-xs text-gray-500">Your Growth Partner</p>
              </Link>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Empowering brands with innovative PR strategies and digital excellence. Your success is our mission.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:Info@prsparkz.com" 
                  className="flex items-center text-sm text-gray-600 hover:text-[#8a6aa9] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-[#f5f0f8] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="ml-3">Info@prsparkz.com</span>
                </a>
                <a 
                  href="tel:+91910525684" 
                  className="flex items-center text-sm text-gray-600 hover:text-[#8a6aa9] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-[#f5f0f8] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="ml-3">+91 910525684</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center text-gray-600 hover:text-[#8a6aa9] transition-colors group"
                  >
                    <Home className="w-4 h-4 mr-3 text-gray-400 group-hover:text-[#8a6aa9] transition-colors" />
                    <span className="text-sm">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center text-gray-600 hover:text-[#8a6aa9] transition-colors group"
                  >
                    <Info className="w-4 h-4 mr-3 text-gray-400 group-hover:text-[#8a6aa9] transition-colors" />
                    <span className="text-sm">About Us</span>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/portfolio"
                    className="flex items-center text-gray-600 hover:text-[#8a6aa9] transition-colors group"
                  >
                    <FolderOpen className="w-4 h-4 mr-3 text-gray-400 group-hover:text-[#8a6aa9] transition-colors" />
                    <span className="text-sm">Portfolio</span>
                  </Link>
                </li> */}
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === '/') {
                        scrollToSection('contact', 80);
                      } else {
                        navigate('/');
                        setTimeout(() => scrollToSection('contact', 80), 300);
                      }
                    }}
                    className="flex items-center text-gray-600 hover:text-[#8a6aa9] transition-colors group"
                  >
                    <MessageSquare className="w-4 h-4 mr-3 text-gray-400 group-hover:text-[#8a6aa9] transition-colors" />
                    <span className="text-sm">Contact</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === '/') {
                        scrollToSection('services', 80);
                      } else {
                        navigate('/');
                        setTimeout(() => scrollToSection('services', 80), 300);
                      }
                    }}
                    className="text-sm text-gray-600 hover:text-[#8a6aa9] transition-colors hover:translate-x-1 inline-block"
                  >
                    Digital Marketing
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === '/') {
                        scrollToSection('services', 80);
                      } else {
                        navigate('/');
                        setTimeout(() => scrollToSection('services', 80), 300);
                      }
                    }}
                    className="text-sm text-gray-600 hover:text-[#8a6aa9] transition-colors hover:translate-x-1 inline-block"
                  >
                    Social Media Management
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === '/') {
                        scrollToSection('services', 80);
                      } else {
                        navigate('/');
                        setTimeout(() => scrollToSection('services', 80), 300);
                      }
                    }}
                    className="text-sm text-gray-600 hover:text-[#8a6aa9] transition-colors hover:translate-x-1 inline-block"
                  >
                    Brand Strategy
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === '/') {
                        scrollToSection('services', 80);
                      } else {
                        navigate('/');
                        setTimeout(() => scrollToSection('services', 80), 300);
                      }
                    }}
                    className="text-sm text-gray-600 hover:text-[#8a6aa9] transition-colors hover:translate-x-1 inline-block"
                  >
                    Content Creation
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-6">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Subscribe to get latest updates and exclusive content.
              </p>
              
              <div className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                    placeholder="Your email address"
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a6aa9] focus:border-transparent text-sm text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  disabled={isSubscribed || isSubmitting || !email}
                  className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center ${
                    isSubscribed
                      ? 'bg-green-500 text-white'
                      : isSubmitting
                      ? 'bg-[#8a6aa9] text-white cursor-wait opacity-70'
                      : !email
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#8a6aa9] to-[#6a4a89] text-white hover:shadow-lg hover:shadow-[#8a6aa9]/30 hover:scale-[1.02]'
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Subscribed!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
              
              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">Follow Us</p>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://www.instagram.com/pr_sparkz?igsh=MTZtbm01cnZ6a3V0Zw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1B4DSMKMXw/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/prsparkz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-700 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>© {currentYear} PR Sparkz. All rights reserved.</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="hidden md:block">Crafted with excellence</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/prsparkz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8a6aa9] transition-colors group"
              >
                <span>Designed by</span>
                <span className="font-semibold group-hover:text-[#8a6aa9]">PR SPARKZ</span>
                <Linkedin className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-[#8a6aa9] transition-all duration-300" />
              </a>
              
              <button
                
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;