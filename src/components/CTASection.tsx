
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const CTASection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-24 bg-neopurple text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ready to Boost Your Income?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of beauty professionals who have transformed their careers with our undereye cleaning certification.
          </p>
          <Link to="contact" smooth={true} duration={800}>
            <button className="bg-white text-neopurple hover:bg-gray-100 py-3 px-8 rounded-full font-medium text-lg transition-all">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
