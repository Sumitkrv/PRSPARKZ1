import React, { useState, useEffect, useRef } from "react";
import { 
  User, Mail, FileText, CheckCircle, Phone, Send, 
  Loader2, AlertCircle, MapPin, Clock, ExternalLink,
  MessageSquare, Building, Map,
  Linkedin, Twitter, Instagram
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "General Inquiry"
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [activeTab, setActiveTab] = useState("form");
  const mapRef = useRef(null);

  const WEB3FORMS_ACCESS_KEY = "0525684b-fa9d-4611-91c2-06119bbb2ea1";

  // Contact options with subjects
  const contactSubjects = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Project Proposal", label: "Project Proposal" },
    { value: "Partnership", label: "Partnership Opportunity" },
    { value: "Career", label: "Career Opportunity" },
    { value: "Support", label: "Technical Support" },
    { value: "Other", label: "Other" }
  ];

  // Company information
  const companyInfo = {
    email: "Info@prsparkz.com",
    phone: "+91 052-5684",
    address: "402, RG Trade Tower, Netaji Subhash Palace, Pitampura, Delhi, 110034",
    workingHours: "Monday - Friday: 9:00 AM - 6:00 PM",
    social: {
      linkedin: "https://linkedin.com/company/prsparkz",
      twitter: "https://twitter.com/prsparkz",
      instagram: "https://instagram.com/prsparkz"
    }
  };

  // Initialize Google Map
  useEffect(() => {
    if (typeof window !== 'undefined' && window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 28.6982, lng: 77.1314 }, // Pitampura, Delhi coordinates
        zoom: 16,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8a6aa9" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e5e7eb" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#ddd6fe" }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_CENTER
        }
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 28.6982, lng: 77.1314 },
        map: map,
        title: "PRSparkz Office - RG Trade Tower",
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: "#8a6aa9",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 4
        }
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 15px; font-family: 'Montserrat', sans-serif; max-width: 280px;">
            <h3 style="color: #8a6aa9; font-size: 16px; font-weight: 700; margin: 0 0 10px 0;">PRSparkz</h3>
            <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px; line-height: 1.5;">
              402, RG Trade Tower<br/>
              Netaji Subhash Palace<br/>
              Pitampura, Delhi, 110034
            </p>
            <div style="border-top: 1px solid #e5e7eb; padding-top: 8px; margin-top: 8px;">
              <p style="margin: 4px 0; color: #6b7280; font-size: 13px;">📞 ${companyInfo.phone}</p>
              <p style="margin: 4px 0; color: #6b7280; font-size: 13px;">📧 ${companyInfo.email}</p>
            </div>
            <a href="https://maps.app.goo.gl/LKfkW8qaD2GmUEVX8" target="_blank" rel="noopener noreferrer" 
               style="display: inline-block; margin-top: 10px; padding: 6px 12px; background: #8a6aa9; color: white; 
               text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 600;">
              Get Directions
            </a>
          </div>
        `
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
      
      // Open info window by default
      setTimeout(() => {
        infoWindow.open(map, marker);
      }, 500);
    }
  }, []);

  // Validation functions
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim() && !formErrors[name]) {
      const errors = validateForm();
      setFormErrors(prev => ({ ...prev, [name]: errors[name] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstErrorField = Object.keys(errors)[0];
      document.querySelector(`[name="${firstErrorField}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
    formDataToSend.append("name", formData.name.trim());
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("phone", formData.phone.trim() || "Not provided");
    formDataToSend.append("message", formData.message.trim());
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("from_name", "PRSparkz Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", message: "", subject: "General Inquiry" });
        }, 100);
        
        if (window.gtag) {
          window.gtag('event', 'contact_form_submit', {
            'event_category': 'engagement',
            'event_label': formData.subject
          });
        }
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setSubmitError(true);
      
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "", subject: "General Inquiry" });
    setFormErrors({});
    setIsSubmitted(false);
    setSubmitError(false);
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = document.querySelector('textarea[name="message"]');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [formData.message]);

  // Character counter for message
  const messageLength = formData.message.length;
  const maxMessageLength = 1000;

  // Quick reply templates
  const quickReplies = [
    {
      text: "I'd like to discuss a project",
      subject: "Project Proposal",
      message: "Hello, I'm interested in discussing a potential project. Could we schedule a call?"
    },
    {
      text: "Need technical support",
      subject: "Support",
      message: "I need assistance with your services. Can you help me resolve this issue?"
    },
    {
      text: "Partnership inquiry",
      subject: "Partnership",
      message: "I'd like to explore partnership opportunities between our companies."
    }
  ];

  const applyQuickReply = (reply) => {
    setFormData(prev => ({
      ...prev,
      subject: reply.subject,
      message: reply.message
    }));
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-br from-white via-[#f5f0f8] to-white py-16 px-4 md:px-8"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#8a6aa9] to-[#7a5a99] flex items-center justify-center">
              <MessageSquare className="text-white" size={24} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8a6aa9] to-[#6a4a89] bg-clip-text text-transparent">
              Contact Us
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's start a conversation about your next big project
          </p>
        </div>

        {/* Tabs Navigation - Removed as only one tab remains */}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl border border-[#ebe2f0] shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Building className="text-[#8a6aa9]" size={24} />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f5f0f8] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#ebe2f0] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#8a6aa9]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="text-[#8a6aa9] hover:text-[#7a5a99] transition-colors font-medium"
                    >
                      {companyInfo.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f5f0f8] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#ebe2f0] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#8a6aa9]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="text-[#8a6aa9] hover:text-[#7a5a99] transition-colors font-medium"
                    >
                      {companyInfo.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f5f0f8] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#ebe2f0] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#8a6aa9]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-700">{companyInfo.address}</p>
                    <a 
                      href="https://maps.app.goo.gl/LKfkW8qaD2GmUEVX8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#8a6aa9] hover:text-[#7a5a99] mt-2 inline-flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      View on map
                    </a>
                  </div>
                </div>

                {/* Working Hours section removed as requested */}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href={companyInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#ebe2f0] hover:text-[#8a6aa9] transition-all hover:scale-110"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={companyInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#ebe2f0] hover:text-[#8a6aa9] transition-all hover:scale-110"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={companyInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#ebe2f0] hover:text-[#8a6aa9] transition-all hover:scale-110"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Message Templates section removed as requested */}
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-[#ebe2f0] shadow-xl overflow-hidden">
                {isSubmitted ? (
                  <div className="text-center py-16 px-8">
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 animate-success-pulse">
                      <CheckCircle size={48} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Success! 🎉</h3>
                    <p className="text-gray-600 mb-4 max-w-md mx-auto">
                      Your message has been sent successfully. We'll contact you within 24 hours.
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 max-w-md mx-auto mb-8">
                      <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
                      <ul className="text-left space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          You'll receive a confirmation email
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          Our team will review your inquiry
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          We'll schedule a call if needed
                        </li>
                      </ul>
                    </div>
                    <button
                      onClick={resetForm}
                      className="px-8 py-3 bg-gradient-to-r from-[#8a6aa9] to-[#7a5a99] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                      <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Your Name *
                          </label>
                          <div className="relative">
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6aa9]" />
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                formErrors.name ? 'border-red-300 focus:border-red-500' : 'border-[#e2d4ed] focus:border-[#8a6aa9]'
                              } text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f5f0f8] transition-all`}
                              placeholder="John Doe"
                              disabled={isSubmitting}
                            />
                          </div>
                          {formErrors.name && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle size={14} /> {formErrors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6aa9]" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                formErrors.email ? 'border-red-300 focus:border-red-500' : 'border-[#e2d4ed] focus:border-[#8a6aa9]'
                              } text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f5f0f8] transition-all`}
                              placeholder="john@example.com"
                              disabled={isSubmitting}
                            />
                          </div>
                          {formErrors.email && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle size={14} /> {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Phone Number <span className="text-gray-500 font-normal">(optional)</span>
                          </label>
                          <div className="relative">
                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6aa9]" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                formErrors.phone ? 'border-red-300 focus:border-red-500' : 'border-[#e2d4ed] focus:border-[#8a6aa9]'
                              } text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f5f0f8] transition-all`}
                              placeholder="+91 12345 67890"
                              disabled={isSubmitting}
                            />
                          </div>
                          {formErrors.phone && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle size={14} /> {formErrors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Subject *
                          </label>
                          <div className="relative">
                            <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a6aa9]" />
                            <select
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#e2d4ed] text-gray-900 bg-white focus:outline-none focus:border-[#8a6aa9] focus:ring-2 focus:ring-[#f5f0f8] transition-all appearance-none cursor-pointer"
                              disabled={isSubmitting}
                            >
                              {contactSubjects.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-4 h-4 text-[#8a6aa9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-sm font-semibold text-gray-900">
                            Your Message *
                          </label>
                          <span className={`text-sm ${
                            messageLength > maxMessageLength ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {messageLength}/{maxMessageLength}
                          </span>
                        </div>
                        <div className="relative">
                          <FileText size={18} className="absolute left-4 top-4 text-[#8a6aa9]" />
                          <textarea
                            name="message"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={maxMessageLength}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                              formErrors.message ? 'border-red-300 focus:border-red-500' : 'border-[#e2d4ed] focus:border-[#8a6aa9]'
                            } text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f5f0f8] transition-all resize-none`}
                            placeholder="Tell us about your project, timeline, and budget..."
                            disabled={isSubmitting}
                          />
                        </div>
                        {formErrors.message && (
                          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} /> {formErrors.message}
                          </p>
                        )}
                      </div>

                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-start gap-3 animate-shake">
                          <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Submission failed</p>
                            <p className="text-sm mt-1">Please try again or contact us directly via email/phone.</p>
                          </div>
                        </div>
                      )}

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 flex items-center justify-center gap-3 text-white font-bold rounded-xl text-lg transition-all duration-300 bg-gradient-to-r from-[#8a6aa9] to-[#7a5a99] hover:from-[#7a5a99] hover:to-[#6a4a89] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={22} className="animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send size={22} />
                              Send Message
                            </>
                          )}
                        </button>
                        <p className="text-center text-sm text-gray-500 mt-4">
                          By submitting, you agree to our{' '}
                          <a href="/privacy" className="text-[#8a6aa9] hover:underline font-medium">Privacy Policy</a>
                          {' '}and{' '}
                          <a href="/terms" className="text-[#8a6aa9] hover:underline font-medium">Terms of Service</a>
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#8a6aa9] to-[#7a5a99] rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-[#e2d4ed] mb-6 max-w-2xl mx-auto">
              Schedule a free consultation call with our experts to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${companyInfo.email}?subject=Schedule a Consultation`}
                className="px-8 py-3 bg-white text-[#8a6aa9] rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Schedule a Call
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="px-8 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#8a6aa9] transition-all duration-300 hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes success-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-success-pulse {
          animation: success-pulse 2s ease-in-out infinite;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>

      {/* Load Google Maps API */}
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`}
        async
        defer
      />
    </section>
  );
};

export default ContactForm;