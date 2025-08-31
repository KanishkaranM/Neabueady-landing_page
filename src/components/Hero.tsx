
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import logo from '../assets/img/image1.png';
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('opacity-100');
      heroRef.current.classList.remove('opacity-0');
    }
  }, []);

  return (
    <div id="hero" className="relative h-screen flex items-center justify-start bg-[#F0E8FD]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={logo}
          alt="Woman touching face" 
          className="h-full object-cover object-center"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F2D7CB] via-[#F2D7CB80] to-transparent z-10"></div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 z-20 transform transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-lg">
          
          <div className="animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Become an<br />
              Undereye Cleaning<br />
              Technician and Boost<br />
              Your Income
            </h2>
          </div>
          
          <div className="animate-fade-in-up animate-delay-200 mt-8">
            <Link to="contact" smooth={true} duration={800}>
              <Button className="bg-neopurple hover:bg-neopurple-dark text-white rounded-full px-6 py-2">
              Enroll Now 
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
