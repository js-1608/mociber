import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Lock, Server, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Option A: import from src/assets (recommended for bundlers)
import bannerImg from '/home_banner.jpeg';

// import bannerImg from '/Banners/banner (1).jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: '',
      title: 'SAFEGUARD YOUR',
      titleHighlight: 'DIGITAL WORLD',
      subtitle: '101',
      description:
        'Protect your business with advanced security solutions, real-time threat detection, and powerful encryption to ensure complete data safety, privacy, and seamless operations against evolving cyber threats.',
      cta1: 'START A FREE TRIAL',
      cta2: 'GET A DEMO'
    },
    {
      id: 2,
      badge: '',
      title: 'PROTECT YOUR',
      titleHighlight: 'BUSINESS DATA',
      subtitle: '24/7',
      description:
        'Advanced threat intelligence and monitoring systems working around the clock to identify vulnerabilities, prevent breaches, and maintain the highest standards of cybersecurity for your organization.',
      cta1: 'START A FREE TRIAL',
      cta2: 'GET A DEMO'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* === CHANGE 1: Banner image in the background === */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 10, // subtle; tweak as needed
          filter: 'grayscale(10%) blur(0.8px)',
          zIndex: 0
        }}
      />

      {/* === CHANGE 2: Overlay gradient to keep readability === */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0.45) 40%, rgba(2,6,23,0.6) 100%)',
          zIndex: 1
        }}
      />

      {/* Animated Background Elements (zIndex 2+) */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Stars/Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Hexagon Shape */}
        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-40">
          <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4fb3bf" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2d5f7a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon
              points="250,50 450,150 450,350 250,450 50,350 50,150"
              fill="url(#hexGradient)"
              stroke="#4fb3bf"
              strokeWidth="3"
            />
            <text x="250" y="220" textAnchor="middle" fill="#2d5f8f" fontSize="60" fontWeight="bold">
              CYBER
            </text>
            <text x="250" y="280" textAnchor="middle" fill="#4a7a8f" fontSize="40">
              SECURITY
            </text>
          </svg>
        </div>

        {/* Floating Security Icons */}
        <div className="absolute top-20 right-20 opacity-40 animate-float">
          <div className="bg-cyan-500/20 p-4 rounded-full backdrop-blur-sm">
            <Shield className="w-12 h-12 text-cyan-400" />
          </div>
        </div>

        <div className="absolute top-1/2 right-32 opacity-40 animate-float-delayed">
          <div className="bg-blue-500/20 p-4 rounded-full backdrop-blur-sm">
            <Lock className="w-10 h-10 text-blue-400" />
          </div>
        </div>

        <div className="absolute bottom-32 right-20 opacity-40 animate-float">
          <div className="bg-teal-500/20 p-4 rounded-lg backdrop-blur-sm">
            <Server className="w-10 h-10 text-teal-400" />
          </div>
        </div>

        <div className="absolute bottom-1/3 left-20 opacity-30 animate-float-delayed">
          <div className="bg-cyan-500/20 p-4 rounded-lg backdrop-blur-sm">
            <Database className="w-12 h-12 text-cyan-400" />
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="#4fb3bf" strokeWidth="1" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="80%" y1="60%" x2="20%" y2="70%" stroke="#4fb3bf" strokeWidth="1" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Slides Container (content on top of background + overlay) */}
      <div className="relative h-full z-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${currentSlide === index
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
              }`}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-3xl z-30">
                {/* Badge */}
                <div className="inline-block mb-6">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-full px-6 py-2">
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider">{slide.badge}</span>
                  </div>
                </div>

                {/* Main Title */}
                <h1 className="text-3xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                  <span className="text-white block mb-2">{slide.title}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 block relative">
                    {slide.titleHighlight}
                    <span className="absolute -right-20 top-0 text-cyan-500/30 text-5xl">{slide.subtitle}</span>
                  </span>
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed">{slide.description}</p>

                {/* CTA Buttons (commented out in your original) */}
                {/* <div className="flex flex-wrap gap-4">
                  <Button className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-8 py-6 rounded-lg text-base transition-all hover:scale-105">
                    {slide.cta1}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-white/80 hover:bg-white/10 text-white font-semibold px-8 py-6 rounded-lg text-base transition-all hover:scale-105"
                  >
                    {slide.cta2}
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all rounded-full ${currentSlide === index ? 'w-12 h-3 bg-white' : 'w-3 h-3 bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
