import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, Palette, ChevronDown, Moon, Sun, MapPin, Dumbbell, Download, Twitter, Phone, Send, Check, Zap, Layers, Box, Globe, Camera, FileText, Package, TrendingUp, Award, Target, Briefcase, Clock } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
          if (rect.top < window.innerHeight * 0.75) {
            setVisibleSections(prev => new Set(prev).add(section));
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 'luxecurrent',
      title: "LuxeCurrent – Furniture & Electronics Store",
      description: "Full-stack e-commerce platform for furniture and electronics with advanced filtering, cart management, and seamless checkout.",
      longDesc: "Comprehensive e-commerce solution featuring product catalog with schema.org integration, advanced filtering system, responsive design, cart persistence, and optimized image delivery for exceptional user experience.",
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      highlights: ["Product filtering & search", "Shopping cart system", "Responsive design", "Schema.org markup", "Image optimization"],
      icon: Package,
      category: "E-Commerce",
      liveUrl: "https://e-comm-website-frontend.vercel.app",
      repoUrl: "https://github.com/bhavesh0001/E-comm-Website",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    },
    {
      id: 'finance-tracker',
      title: "Personal Finance Tracker",
      description: "Smart expense tracking application with real-time analytics, budget management, and comprehensive financial insights.",
      longDesc: "Modern expense tracking platform with intuitive UI for managing daily expenses, setting budgets, tracking spending patterns, and generating detailed financial reports with charts and analytics.",
      tags: ["Next.js", "React", "MongoDB", "Chart.js", "Tailwind CSS"],
      highlights: ["Real-time expense tracking", "Budget management", "Visual analytics", "Category-wise reports", "Export functionality"],
      icon: TrendingUp,
      category: "FinTech",
      liveUrl: "https://expencetracker-chi.vercel.app",
      repoUrl: "https://github.com/bhavesh0001/Expence-Tracker",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    },
    {
      id: 'ai-portfolio',
      title: "AI Micro-Portfolio Generator",
      description: "One-click portfolio generator for students with built-in resume showcase, project display, social integration, and SEO optimization.",
      longDesc: "Intelligent portfolio generation platform that creates ATS-friendly, SEO-optimized personal websites with integrated analytics, social proof, dynamic templating system, and professional layouts tailored for students and professionals.",
      tags: ["Next.js 15", "Tailwind CSS", "React", "TypeScript", "SEO"],
      highlights: ["Dynamic templates", "SEO optimized", "Social integration", "Responsive design", "Analytics ready"],
      icon: Zap,
      category: "Full-Stack",
      liveUrl: "https://profound-sopapillas-64f2d0.netlify.app",
      repoUrl: "https://github.com/bhavesh0001/Portfoliogenratorbhavesh",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 'weather-app',
      title: "Weather Forecast App",
      description: "Real-time weather application with city search, auto-location detection, 5-day forecast, and beautiful UI.",
      longDesc: "Modern weather application powered by weather APIs featuring geolocation support, 5-day detailed forecasting, hourly updates, beautiful weather animations, and responsive design for seamless experience across all devices.",
      tags: ["JavaScript", "HTML/CSS", "Weather API", "Geolocation"],
      highlights: ["Auto-location detect", "5-day forecast", "Hourly weather", "Beautiful UI", "Responsive design"],
      icon: Globe,
      category: "Web App",
      liveUrl: "https://weather-app-v6m6.vercel.app",
      repoUrl: "https://github.com/bhavesh0001/Weather.app",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80"
    },
    {
      id: 'resume-builder',
      title: "Resume Builder (ATS-Friendly)",
      description: "Professional resume builder with smart templates, keyword optimization, and multi-format export capabilities.",
      longDesc: "Comprehensive resume building platform featuring ATS optimization, keyword scoring algorithm, multiple professional templates, PDF/Doc export, referral system, and analytics dashboard for tracking resume performance.",
      tags: ["Next.js", "Node.js", "Puppeteer", "TypeScript", "SEO"],
      highlights: ["ATS optimization", "Multiple templates", "Keyword scoring", "PDF/Doc export", "Coming Soon"],
      icon: FileText,
      category: "Coming Soon",
      liveUrl: "#",
      repoUrl: "#",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      comingSoon: true
    },
    {
      id: 'azoryix',
      title: "Packaging & Brand Campaigns",
      description: "Complete branding solutions with package design, visual identity, marketing materials, and design systems.",
      longDesc: "Comprehensive brand design and packaging solutions featuring design systems, mock sites, campaign materials, cohesive brand identity development, and professional marketing assets for various industries.",
      tags: ["Figma", "Design Systems", "Branding", "UI/UX", "Graphics"],
      highlights: ["Design systems", "Brand identity", "Marketing assets", "Package design", "Campaign visuals"],
      icon: Palette,
      category: "Design",
      liveUrl: "#",
      repoUrl: "#",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
    }
  ];

  const skills = [
    {
      category: "Core",
      icon: Code2,
      items: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "System Design", level: 85 },
        { name: "Data Structures", level: 88 }
      ]
    },
    {
      category: "Frontend",
      icon: Palette,
      items: [
        { name: "Next.js", level: 95 },
        { name: "React", level: 95 },
        { name: "Tailwind CSS", level: 98 },
        { name: "shadcn/ui", level: 92 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Prisma", level: 82 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: Box,
      items: [
        { name: "Git & GitHub", level: 92 },
        { name: "Figma", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Vercel", level: 90 }
      ]
    }
  ];

  const achievements = [
    { label: "Coding Hours", value: "100+", icon: Code2, color: "#00E676" },
    { label: "Projects Completed", value: "10+", icon: Layers, color: "#64FFDA" },
    { label: "Soft Skills Training", value: "70+", icon: TrendingUp, color: "#FFC861" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name.length < 2 || formData.name.length > 80) {
      setFormStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus('error');
      return;
    }
    if (formData.message.length < 10 || formData.message.length > 1000) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  const bgColor = '#0B0F14';
  const panelColor = '#11161C';
  const mutedColor = '#8A97A6';
  const textColor = '#EAF2FF';
  const accentA = '#00E676';
  const accentB = '#64FFDA';

  return (
    <div className="min-h-screen" style={{ backgroundColor: bgColor, color: textColor, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-in-delay-1 {
          animation: fadeInUp 0.6s ease-out 0.1s forwards;
          opacity: 0;
        }
        .animate-in-delay-2 {
          animation: fadeInUp 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-in-delay-3 {
          animation: fadeInUp 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-slide-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .animate-scale {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 230, 118, 0.2);
        }
        .hover-glow {
          transition: all 0.3s ease;
        }
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(0, 230, 118, 0.4);
          border-color: #00E676;
        }
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .md-flex { display: flex; }
        .md-hide { display: block; }
        @media (max-width: 768px) {
          .md-flex { display: none !important; }
          .md-hide { display: block; }
        }
        @media (min-width: 769px) {
          .md-flex { display: flex !important; }
          .md-hide { display: none !important; }
        }
      `}</style>

      {/* Noise Background */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.03, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")', pointerEvents: 'none' }} />

      {/* Navigation */}
      <nav style={{ position: 'fixed', width: '100%', zIndex: 50, transition: 'all 0.3s', backgroundColor: scrollY > 50 ? 'rgba(11, 15, 20, 0.95)' : 'transparent', backdropFilter: scrollY > 50 ? 'blur(12px)' : 'none', borderBottom: scrollY > 50 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'monospace', color: accentA }}>
              BB
            </div>
            
            <div style={{ gap: '2rem', alignItems: 'center' }} className="md-flex">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{ 
                    color: activeSection === item.toLowerCase() ? accentA : textColor,
                    transition: 'color 0.2s',
                    position: 'relative',
                    paddingBottom: '4px',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', backgroundColor: accentA }} />
                  )}
                </a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md-hide" style={{ padding: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              {isMenuOpen ? <X size={24} color={accentA} /> : <Menu size={24} color={accentA} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div style={{ backgroundColor: panelColor, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }} className="md-hide">
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{ color: textColor, padding: '0.5rem', textDecoration: 'none' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '600px', height: '600px', background: `radial-gradient(circle, ${accentA}15 0%, transparent 70%)`, filter: 'blur(100px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '400px', height: '400px', background: `radial-gradient(circle, ${accentB}10 0%, transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '1100px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="animate-in" style={{ marginBottom: '2rem' }}>
            <div style={{ width: '140px', height: '140px', margin: '0 auto', borderRadius: '50%', background: `linear-gradient(135deg, ${accentA}, ${accentB})`, padding: '4px', animation: 'pulse 3s ease-in-out infinite' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: panelColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', fontWeight: 700, fontFamily: 'monospace', color: accentA }}>
                BB
              </div>
            </div>
          </div>
          
          <h1 className="animate-in-delay-1" style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1, letterSpacing: '-0.02em' }}>
            Bhavesh Bhat
          </h1>
          
          <div className="animate-in-delay-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', color: mutedColor, marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>Full-Stack Developer</span>
            <span style={{ color: accentA, fontSize: '2rem' }}>•</span>
            <span>CSE @ USICT (GGSIPU)</span>
          </div>
          
          <p className="animate-in-delay-3" style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)', color: mutedColor, marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.8, fontWeight: 400 }}>
            I build <span style={{ color: accentA, fontWeight: 600 }}>fast, thoughtful web products</span>—clean UI, solid architecture, real-world results.
          </p>
          
          <div className="animate-in-delay-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <a
              href="#projects"
              className="hover-scale"
              style={{ padding: '1.1rem 2.5rem', backgroundColor: accentA, color: bgColor, borderRadius: '9999px', fontWeight: 700, boxShadow: `0 0 30px ${accentA}50`, textDecoration: 'none', display: 'inline-block', fontSize: '1.05rem' }}
            >
              View Projects
            </a>
            <a
              href="#"
              className="hover-glow"
              style={{ padding: '1.1rem 2.5rem', border: `2px solid ${accentA}50`, borderRadius: '9999px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: textColor, fontSize: '1.05rem' }}
            >
              <Download size={20} /> Resume
            </a>
          </div>
          
          <div className="animate-in-delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Twitter, href: '#', label: 'Twitter' },
              { Icon: Mail, href: '#contact', label: 'Email' }
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                className="hover-lift"
                aria-label={label}
                style={{ padding: '0.875rem', backgroundColor: panelColor, borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'inline-flex', textDecoration: 'none' }}
              >
                <Icon size={22} color={textColor} />
              </a>
            ))}
          </div>
          
          <div style={{ animation: 'bounce 2s ease-in-out infinite' }}>
            <ChevronDown size={36} color={accentA} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '8rem 1.5rem', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className={visibleSections.has('about') ? 'animate-in' : ''} style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            About <span style={{ color: accentA }}>Me</span>
          </h2>
          <p className={visibleSections.has('about') ? 'animate-in-delay-1' : ''} style={{ textAlign: 'center', color: mutedColor, marginBottom: '5rem', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 5rem' }}>
            Passionate about creating exceptional digital experiences
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
            <div className={visibleSections.has('about') ? 'animate-slide-left' : ''}>
              <div style={{ fontSize: '1.2rem', color: mutedColor, lineHeight: 1.9, marginBottom: '1.5rem' }}>
                I'm a <span style={{ color: accentA, fontWeight: 600 }}>CSE B.Tech student</span> at <span style={{ fontWeight: 600 }}>USICT (GGSIPU)</span> focused on modern web development—Next.js, Tailwind, shadcn, and clean API design.
              </div>
              <div style={{ fontSize: '1.2rem', color: mutedColor, lineHeight: 1.9 }}>
                I enjoy shipping <span style={{ color: accentA, fontWeight: 600 }}>usable, scalable products</span> with crisp UI, strong developer experience, and measurable outcomes.
              </div>
            </div>
            
            <div className={visibleSections.has('about') ? 'animate-slide-right' : ''} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: MapPin, label: 'Location', value: 'New Delhi, India' },
                { icon: Target, label: 'Focus', value: 'UI Systems & Product Architecture' },
                { icon: Dumbbell, label: 'Discipline', value: '6-day split (consistency = shipping)' }
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={i}
                  className="hover-glow"
                  style={{ padding: '1.5rem', backgroundColor: panelColor, borderRadius: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
                >
                  <div style={{ padding: '1rem', backgroundColor: `${accentA}20`, borderRadius: '0.75rem' }}>
                    <Icon size={24} color={accentA} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: mutedColor, marginBottom: '0.25rem', fontWeight: 500 }}>{label}</div>
                    <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={visibleSections.has('about') ? 'animate-in-delay-2' : ''} style={{ padding: '3rem', backgroundColor: panelColor, borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: `${accentA}20`, borderRadius: '0.75rem' }}>
                <Code2 size={28} color={accentA} />
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: accentA }}>Tech Stack</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'shadcn/ui', 'Prisma', 'Git'].map((tech, i) => (
                <span
                  key={i}
                  className="hover-scale"
                  style={{ padding: '0.75rem 1.25rem', backgroundColor: `${accentA}15`, color: accentA, borderRadius: '9999px', fontSize: '0.95rem', fontFamily: 'monospace', border: `1px solid ${accentA}30`, fontWeight: 600 }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '8rem 1.5rem', backgroundColor: `${panelColor}30` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className={visibleSections.has('experience') ? 'animate-in' : ''} style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            <span style={{ color: accentA }}>Experience</span> & Highlights
          </h2>
          <p className={visibleSections.has('experience') ? 'animate-in-delay-1' : ''} style={{ textAlign: 'center', color: mutedColor, marginBottom: '5rem', fontSize: '1.1rem' }}>
            Building products that make a difference
          </p>

          <div className={visibleSections.has('experience') ? 'animate-in-delay-2' : ''} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="hover-glow" style={{ padding: '3rem', backgroundColor: panelColor, borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '3rem', left: '3rem', width: '4px', height: 'calc(100% - 6rem)', background: `linear-gradient(to bottom, ${accentA}, ${accentB})`, borderRadius: '9999px' }} />
              
              <div style={{ paddingLeft: '3rem' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div style={{ padding: '0.75rem', backgroundColor: `${accentA}20`, borderRadius: '0.75rem' }}>
                      <Briefcase size={24} color={accentA} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Azoryix</h3>
                      <p style={{ color: mutedColor, fontSize: '1.05rem' }}>Founder • Growth & Branding Studio</p>
                    </div>
                  </div>
                  <p style={{ color: mutedColor, lineHeight: 1.8, fontSize: '1.05rem' }}>
                    Leading end-to-end web/app development, SEO optimization, and content systems. Building scalable solutions for clients across various industries.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: accentA }}>Key Highlights</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      'Built 10+ production-ready applications',
                      'Implemented SEO strategies increasing organic traffic by 200%',
                      'Designed comprehensive content management systems',
                      'Delivered pixel-perfect UI/UX across multiple projects'
                    ].map((highlight, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '1rem', color: mutedColor, fontSize: '1.05rem' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: accentA, borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '8rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className={visibleSections.has('projects') ? 'animate-in' : ''} style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            Featured <span style={{ color: accentA }}>Projects</span>
          </h2>
          <p className={visibleSections.has('projects') ? 'animate-in-delay-1' : ''} style={{ textAlign: 'center', color: mutedColor, marginBottom: '5rem', fontSize: '1.1rem' }}>
            Real-world applications solving real problems
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
            {projects.map((project, idx) => {
              const Icon = project.icon;
              const delay = idx % 3;
              return (
                <div
                  key={project.id}
                  className={`hover-lift ${visibleSections.has('projects') ? (delay === 0 ? 'animate-in' : delay === 1 ? 'animate-in-delay-1' : 'animate-in-delay-2') : ''}`}
                  style={{ backgroundColor: panelColor, borderRadius: '1.75rem', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', cursor: 'pointer', position: 'relative' }}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.comingSoon && (
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.5rem 1rem', backgroundColor: '#FFC861', color: bgColor, borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, zIndex: 2, boxShadow: '0 4px 12px rgba(255, 200, 97, 0.4)' }}>
                      COMING SOON
                    </div>
                  )}
                  <div style={{ height: '220px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${accentA}90, ${accentB}90)`, mixBlendMode: 'multiply' }} />
                    <Icon size={80} color="white" style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                      {project.category}
                    </div>
                  </div>
                  
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.3 }}>{project.title}</h3>
                    <p style={{ color: mutedColor, marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.7 }}>{project.description}</p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          style={{ padding: '0.375rem 0.875rem', backgroundColor: `${accentA}15`, color: accentA, borderRadius: '9999px', fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 600 }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span style={{ padding: '0.375rem 0.875rem', color: mutedColor, fontSize: '0.75rem' }}>
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {!project.comingSoon ? (
                        <>
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover-scale" 
                            style={{ flex: 1, padding: '0.75rem', backgroundColor: `${accentA}20`, color: accentA, borderRadius: '0.75rem', fontSize: '0.9rem', fontWeight: 600, border: `1px solid ${accentA}30`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
                          >
                            <Globe size={16} /> Live
                          </a>
                          <a 
                            href={project.repoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover-scale" 
                            style={{ flex: 1, padding: '0.75rem', border: `1px solid ${accentA}40`, color: accentA, borderRadius: '0.75rem', fontSize: '0.9rem', fontWeight: 600, backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
                          >
                            <Github size={16} /> Code
                          </a>
                        </>
                      ) : (
                        <div style={{ flex: 1, padding: '0.75rem', backgroundColor: `${mutedColor}20`, color: mutedColor, borderRadius: '0.75rem', fontSize: '0.9rem', fontWeight: 600, border: `1px solid ${mutedColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '8rem 1.5rem', backgroundColor: `${panelColor}30` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className={visibleSections.has('skills') ? 'animate-in' : ''} style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            <span style={{ color: accentA }}>Skills</span> & Expertise
          </h2>
          <p className={visibleSections.has('skills') ? 'animate-in-delay-1' : ''} style={{ textAlign: 'center', color: mutedColor, marginBottom: '5rem', fontSize: '1.1rem' }}>
            Comprehensive technical proficiency
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <div 
                  key={idx} 
                  className={`hover-glow ${visibleSections.has('skills') ? (idx % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right') : ''}`}
                  style={{ padding: '2.5rem', backgroundColor: panelColor, borderRadius: '1.75rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ padding: '0.875rem', backgroundColor: `${accentA}20`, borderRadius: '0.75rem' }}>
                      <Icon size={28} color={accentA} />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{skillGroup.category}</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {skillGroup.items.map((skill, i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                          <span style={{ fontWeight: 600, fontSize: '1rem' }}>{skill.name}</span>
                          <span style={{ color: accentA, fontSize: '1rem', fontFamily: 'monospace', fontWeight: 700 }}>{skill.level}%</span>
                        </div>
                        <div style={{ height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '9999px', overflow: 'hidden', position: 'relative' }}>
                          <div 
                            style={{ 
                              height: '100%', 
                              width: `${skill.level}%`, 
                              background: `linear-gradient(90deg, ${accentA}, ${accentB})`, 
                              borderRadius: '9999px',
                              boxShadow: `0 0 10px ${accentA}60`,
                              transition: 'width 1s ease-out'
                            }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" style={{ padding: '8rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className={visibleSections.has('achievements') ? 'animate-in' : ''} style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            <span style={{ color: accentA }}>Achievements</span>
          </h2>
          <p className={visibleSections.has('achievements') ? 'animate-in-delay-1' : ''} style={{ textAlign: 'center', color: mutedColor, marginBottom: '5rem', fontSize: '1.1rem' }}>
            Milestones and metrics that matter
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={idx} 
                  className={`hover-lift ${visibleSections.has('achievements') ? 'animate-scale' : ''}`}
                  style={{ 
                    padding: '3rem 2.5rem', 
                    backgroundColor: panelColor, 
                    borderRadius: '2rem', 
                    border: '1px solid rgba(255, 255, 255, 0.05)', 
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, ${achievement.color}, ${accentB})` }} />
                  <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: `${achievement.color}20`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={40} color={achievement.color} />
                  </div>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, color: achievement.color, marginBottom: '0.75rem', fontFamily: 'monospace' }}>{achievement.value}</div>
                  <div style={{ color: mutedColor, fontSize: '1.15rem', fontWeight: 500 }}>{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '8rem 1.5rem', backgroundColor: `${panelColor}30` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className={visibleSections.has('contact') ? 'animate-in' : ''} style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            Get In <span style={{ color: accentA }}>Touch</span>
          </h2>
          <p className={visibleSections.has('contact') ? 'animate-in-delay-1' : ''} style={{ textAlign: 'center', color: mutedColor, marginBottom: '4rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Have a project in mind? Let's build something amazing together.
          </p>
          
          <div className={visibleSections.has('contact') ? 'animate-in-delay-2' : ''} style={{ padding: '3rem', backgroundColor: panelColor, borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ width: '100%', padding: '1.25rem', backgroundColor: bgColor, border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1rem', color: textColor, fontSize: '1.05rem', outline: 'none', transition: 'all 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = accentA}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ width: '100%', padding: '1.25rem', backgroundColor: bgColor, border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1rem', color: textColor, fontSize: '1.05rem', outline: 'none', transition: 'all 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = accentA}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                style={{ width: '100%', padding: '1.25rem', backgroundColor: bgColor, border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1rem', color: textColor, fontSize: '1.05rem', outline: 'none', resize: 'vertical', transition: 'all 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = accentA}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
              <button
                onClick={handleSubmit}
                disabled={formStatus === 'sending'}
                className="hover-scale"
                style={{ width: '100%', padding: '1.25rem', backgroundColor: formStatus === 'success' ? accentA : accentA, color: bgColor, borderRadius: '1rem', fontSize: '1.1rem', fontWeight: 700, border: 'none', cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', boxShadow: `0 0 30px ${accentA}40` }}
              >
                {formStatus === 'success' ? (
                  <>
                    <Check size={22} /> Message Sent Successfully!
                  </>
                ) : formStatus === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={22} /> Send Message
                  </>
                )}
              </button>
              {formStatus === 'success' && (
                <p style={{ textAlign: 'center', color: accentA, fontSize: '1rem', fontWeight: 600 }}>
                  Thanks! I'll get back to you within 24-48 hours.
                </p>
              )}
              {formStatus === 'error' && (
                <p style={{ textAlign: 'center', color: '#FFC861', fontSize: '1rem', fontWeight: 600 }}>
                  Please check your input and try again.
                </p>
              )}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div className="hover-glow" style={{ padding: '2rem', backgroundColor: panelColor, borderRadius: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ padding: '1rem', backgroundColor: `${accentA}20`, borderRadius: '0.75rem', flexShrink: 0 }}>
                <Mail size={28} color={accentA} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', color: mutedColor, marginBottom: '0.25rem', fontWeight: 500 }}>Email</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, wordBreak: 'break-all' }}>bhaveshbhat2004@gmail.com</div>
              </div>
            </div>
            <div className="hover-glow" style={{ padding: '2rem', backgroundColor: panelColor, borderRadius: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ padding: '1rem', backgroundColor: `${accentA}20`, borderRadius: '0.75rem', flexShrink: 0 }}>
                <Phone size={28} color={accentA} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', color: mutedColor, marginBottom: '0.25rem', fontWeight: 500 }}>Phone</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>+91 9818451855</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'monospace', color: accentA }}>
              BB
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {[
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Mail, href: '#contact' }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="hover-scale"
                  style={{ padding: '0.75rem', backgroundColor: panelColor, borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'inline-flex', textDecoration: 'none' }}
                >
                  <Icon size={20} color={textColor} />
                </a>
              ))}
            </div>
            <p style={{ color: mutedColor, fontSize: '0.95rem', textAlign: 'center' }}>
              © {new Date().getFullYear()} Bhavesh Bhat • Built with Next.js & love
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', backdropFilter: 'blur(10px)', animation: 'fadeIn 0.3s ease-out' }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="animate-scale"
            style={{ backgroundColor: panelColor, borderRadius: '2rem', maxWidth: '1000px', width: '100%', maxHeight: '90vh', overflow: 'auto', border: `2px solid ${accentA}40`, boxShadow: `0 0 60px ${accentA}30` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: `${accentA}20`, borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: accentA, marginBottom: '1rem' }}>
                    {selectedProject.category}
                  </div>
                  <h3 style={{ fontSize: '2.75rem', fontWeight: 800, lineHeight: 1.2 }}>{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="hover-scale"
                  style={{ padding: '0.875rem', borderRadius: '0.75rem', backgroundColor: `${accentA}15`, border: 'none', cursor: 'pointer', flexShrink: 0, marginLeft: '1rem' }}
                >
                  <X size={26} color={accentA} />
                </button>
              </div>
              
              <p style={{ color: mutedColor, marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.15rem' }}>{selectedProject.longDesc}</p>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem', color: accentA }}>Tech Stack</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
                  {selectedProject.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="hover-scale"
                      style={{ padding: '0.625rem 1.25rem', backgroundColor: `${accentA}15`, color: accentA, borderRadius: '9999px', fontSize: '0.95rem', fontFamily: 'monospace', border: `1px solid ${accentA}30`, fontWeight: 600 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem', color: accentA }}>Key Highlights</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', color: mutedColor, fontSize: '1.05rem', padding: '0.875rem', backgroundColor: `${accentA}08`, borderRadius: '0.75rem', border: `1px solid ${accentA}15` }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: accentA, borderRadius: '50%', flexShrink: 0 }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                {!selectedProject.comingSoon ? (
                  <>
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-scale" 
                      style={{ flex: 1, minWidth: '200px', padding: '1.25rem', backgroundColor: accentA, color: bgColor, borderRadius: '1rem', fontSize: '1.05rem', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', boxShadow: `0 0 30px ${accentA}40`, textDecoration: 'none' }}
                    >
                      <Globe size={22} /> View Live Demo
                    </a>
                    <a 
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-glow" 
                      style={{ flex: 1, minWidth: '200px', padding: '1.25rem', border: `2px solid ${accentA}`, color: accentA, borderRadius: '1rem', fontSize: '1.05rem', fontWeight: 700, backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textDecoration: 'none' }}
                    >
                      <Github size={22} /> View Source Code
                    </a>
                  </>
                ) : (
                  <div style={{ flex: 1, padding: '1.25rem', backgroundColor: `${mutedColor}20`, color: mutedColor, borderRadius: '1rem', fontSize: '1.05rem', fontWeight: 700, border: `2px solid ${mutedColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <Clock size={22} /> Coming Soon
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
                        