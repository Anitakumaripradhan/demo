import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, CheckCircle2, Award, BookOpen, 
  Briefcase, Users, ShieldCheck, MapPin, Search, ArrowRight, PlayCircle
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* ---------------- NAVBAR ---------------- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
              <Award className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-xl leading-none tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                VED UPSKILLING
              </span>
              <span className={`text-[10px] font-semibold tracking-widest uppercase ${isScrolled ? 'text-blue-600' : 'text-blue-600 lg:text-blue-400'}`}>
                Professional Excellence
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden lg:flex items-center gap-8 font-medium ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('programs')} className="hover:text-blue-500 transition-colors">Programs</button>
            <button onClick={() => scrollToSection('why-us')} className="hover:text-blue-500 transition-colors">Why Us</button>
            <button onClick={() => scrollToSection('verifier')} className="hover:text-blue-500 transition-colors">Credential Verifier</button>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center gap-2">
              Explore Courses <ArrowRight w={16} h={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X w={24} h={24} /> : <Menu w={24} h={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl flex flex-col px-4 py-6 gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left font-semibold text-slate-800 text-lg py-2 border-b border-slate-100">Home</button>
            <button onClick={() => scrollToSection('programs')} className="text-left font-semibold text-slate-800 text-lg py-2 border-b border-slate-100">Programs</button>
            <button onClick={() => scrollToSection('why-us')} className="text-left font-semibold text-slate-800 text-lg py-2 border-b border-slate-100">Why Us</button>
            <button onClick={() => scrollToSection('verifier')} className="text-left font-semibold text-slate-800 text-lg py-2 border-b border-slate-100">Credential Verifier</button>
            <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-bold mt-2 text-center">
              Explore Courses
            </button>
          </div>
        )}
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-slate-300">Admissions open for Fall Cohort</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Master the skills <br className="hidden md:block"/> that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">define the future.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              Premium cohort-based learning for ambitious professionals. Master deep tech, get 1-on-1 industry mentorship, and secure roles at top-tier companies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                View All Programs
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" /> Watch Intro
              </button>
            </div>
          </div>

          {/* Hero Stats/Image Area */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm p-6 lg:p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Highest CTC Offered</p>
                  <p className="text-4xl font-extrabold text-white">₹ 42<span className="text-blue-500">LPA</span></p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Briefcase className="text-blue-400 w-6 h-6" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold">100% Placement Assistance</p>
                    <p className="text-slate-400 text-sm">Dedicated career support team</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Users className="text-purple-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold">1-on-1 Mentorship</p>
                    <p className="text-slate-400 text-sm">Learn from industry veterans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- SOCIAL PROOF STRIP ---------------- */}
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Our Alumni Work At</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Company Logos - Using text for standalone capability */}
            <span className="text-2xl font-black text-slate-800 tracking-tighter">Google</span>
            <span className="text-2xl font-black text-slate-800 tracking-tight">Microsoft</span>
            <span className="text-2xl font-extrabold text-slate-800 italic">amazon</span>
            <span className="text-2xl font-bold text-slate-800 uppercase tracking-widest">IBM</span>
            <span className="text-2xl font-bold text-slate-800">Cisco</span>
          </div>
        </div>
      </div>

      {/* ---------------- WHY US (BENTO GRID) ---------------- */}
      <section id="why-us" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">The Ved Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Not just another course. <br/> A career transformation.
            </h3>
            <p className="text-lg text-slate-600">
              We bridge the gap between academic learning and industry demands. Here is why our pedagogy creates top 1% engineers.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Large Card */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Industry-Sourced Projects</h4>
                <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                  Stop building basic to-do lists. Work on real-world problem statements directly sourced from leading multinational companies.
                </p>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">1:1 Expert Guidance</h4>
                <p className="text-slate-400">
                  Immersive learning guided by professionals with 8-10+ years of domain expertise.
                </p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
               <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Premium Certification</h4>
                <p className="text-slate-600">
                  Gain globally recognized credentials that set you apart in the competitive job market.
                </p>
            </div>

            {/* Large Card Bottom */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-lg text-white relative overflow-hidden">
               <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                 <ShieldCheck className="w-64 h-64" />
               </div>
               <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-3">Lifetime LMS Access</h4>
                <p className="text-blue-100 text-lg leading-relaxed max-w-md mb-6">
                  Learning never stops. Get around-the-clock support and lifetime access to our advanced Learning Management System, updated continuously.
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
                  Explore Platform
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ---------------- PROGRAMS SECTION ---------------- */}
      <section id="programs" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Executive Programs
              </h2>
              <p className="text-lg text-slate-600">
                Intensive, cohort-based programs designed to make you industry-ready from day one.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View All 33 Courses <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
              <div className="h-48 bg-slate-900 relative p-6 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
                <span className="relative z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-max">Bestseller</span>
                <h3 className="relative z-10 text-2xl font-bold text-white mt-auto">Full Stack Web Dev & System Design</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
                  <span className="flex items-center gap-1"><BookOpen w={16} h={16}/> 34 Lessons</span>
                  <span className="flex items-center gap-1"><PlayCircle w={16} h={16}/> 40+ Hours</span>
                </div>
                <p className="text-slate-600 mb-8 flex-grow">Master MERN stack, advanced system design, and deploy scalable applications like a Senior Engineer.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Next Cohort</p>
                    <p className="font-bold text-slate-900">15th August</p>
                  </div>
                  <button className="bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    Syllabus
                  </button>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
              <div className="h-48 bg-slate-900 relative p-6 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-slate-900 to-slate-900"></div>
                <span className="relative z-10 bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full w-max border border-slate-600">Advanced</span>
                <h3 className="relative z-10 text-2xl font-bold text-white mt-auto">MongoDB with Django Integration</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
                  <span className="flex items-center gap-1"><BookOpen w={16} h={16}/> 33 Lessons</span>
                  <span className="flex items-center gap-1"><PlayCircle w={16} h={16}/> 40+ Hours</span>
                </div>
                <p className="text-slate-600 mb-8 flex-grow">Deep dive into NoSQL databases. Learn to architect and optimize high-performance backends.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Next Cohort</p>
                    <p className="font-bold text-slate-900">22nd August</p>
                  </div>
                  <button className="bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    Syllabus
                  </button>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
              <div className="h-48 bg-slate-900 relative p-6 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400 via-slate-900 to-slate-900"></div>
                <span className="relative z-10 bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full w-max border border-slate-600">Hardware</span>
                <h3 className="relative z-10 text-2xl font-bold text-white mt-auto">VLSI & Embedded Systems Design</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
                  <span className="flex items-center gap-1"><BookOpen w={16} h={16}/> 26 Lessons</span>
                  <span className="flex items-center gap-1"><PlayCircle w={16} h={16}/> 40+ Hours</span>
                </div>
                <p className="text-slate-600 mb-8 flex-grow">Hands-on experience with Proteus software. Master microcontroller architecture and IoT implementation.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Next Cohort</p>
                    <p className="font-bold text-slate-900">1st Sept</p>
                  </div>
                  <button className="bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    Syllabus
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <button className="md:hidden w-full mt-8 flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-xl font-bold">
            View All 33 Courses <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ---------------- CREDENTIAL VERIFIER ---------------- */}
      <section id="verifier" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* BG Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Verify Certification
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Ensure the authenticity of Ved Upskilling credentials. Enter the unique certification code issued in partnership with Wipro DICE ID.
          </p>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto">
            <div className="flex flex-col gap-4">
              <div className="relative text-left">
                <label className="text-sm font-semibold text-slate-300 ml-1 mb-2 block">Certificate Code</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="e.g. VED-2026-XYZ987"
                    className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg mt-2">
                Verify Credential
              </button>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Having trouble? <a href="#" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Contact Support</a>
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <Award className="text-white w-5 h-5" />
                </div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  VED UPSKILLING
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Empowering individuals to achieve excellence by making premium tech education accessible, engaging, and impactful.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">All Programs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Credential Verifier</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Hire From Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Bengaluru, Karnataka, India</span>
                </li>
                <li><a href="mailto:hello@vedupskilling.in" className="hover:text-blue-400 transition-colors">hello@vedupskilling.in</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
            <p>© {new Date().getFullYear()} Ved Upskilling. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Premium styling) */}
      <a href="#" className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 transition-transform hover:scale-110 flex items-center justify-center group">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;