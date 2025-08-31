
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-16 md:py-24 bg-neopurple">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row">
          <div 
            ref={ref}
            className={`md:w-1/2 transition-all duration-1000 transform ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have Questions?</h2>
            <h3 className="text-xl md:text-2xl font-medium text-white mb-6">Reach Out!</h3>
            <p className="text-white opacity-80 mb-8">
              Our team is ready to answer any questions you may have about our undereye cleaning training program.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white bg-opacity-20 rounded-full p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2"/>
                  <path d="M16 12H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8L8 12L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white">info@neobeauty.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-full p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2"/>
                  <path d="M16 12H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8L8 12L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white">+1 (555) 123-4567</span>
            </div>
          </div>
          
          <div 
            className={`md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 delay-200 transform ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Send us a message</h3>
              <form name="contact" method="POST" data-netlify="true">
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-neopurple"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-neopurple"
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-neopurple"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-neopurple hover:bg-neopurple-dark text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
