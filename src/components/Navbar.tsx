
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-semibold text-neopurple">neobeauty</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="why" smooth={true} duration={500} className="text-gray-700 hover:text-neopurple cursor-pointer">Why Undereye Cleaning?</Link>
          <Link to="results" smooth={true} duration={500} className="text-gray-700 hover:text-neopurple cursor-pointer">Results</Link>
          <Link to="approach" smooth={true} duration={500} className="text-gray-700 hover:text-neopurple cursor-pointer">Our Approach</Link>
          <Link to="earnings" smooth={true} duration={500} className="text-gray-700 hover:text-neopurple cursor-pointer">Earnings</Link>
          <Link to="faqs" smooth={true} duration={500} className="text-gray-700 hover:text-neopurple cursor-pointer">FAQs</Link>
        </div>
        <div>
          <Link to="contact" smooth={true} duration={500} className="bg-neopurple hover:bg-neopurple-dark text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
