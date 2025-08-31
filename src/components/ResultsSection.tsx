
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ResultsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Array of before/after images
  const results = [
    {
      before: "../src/assets/img/before.png",
      after: "../src/assets/img/after.svg",
    },
    {
      before: "../src/assets/img/before1.svg",
      after: "../src/assets/img/after.png",
    },
    {
      before: "../src/assets/img/after2.png",
      after: "../src/assets/img/before2.png",
    },
    {
      before: "../src/assets/img/before.png",
      after: "../src/assets/img/after.svg",
    },
  ];

  return (
    <section id="results" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Undereye Cleaning Results</h2>
          
          <div className="results-slider flex space-x-4 overflow-x-auto pb-4">
            {results.map((result, index) => (
              <div 
                key={index}
                className={`flex-none w-80 transition-all duration-700 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="bg-neogray-light rounded-lg overflow-hidden shadow-md">
                  <div className="flex">
                    <div className="w-1/2 border-r border-white">
                      <img 
                        src={result.before} 
                        alt="Before undereye cleaning" 
                        className="w-full h-40 object-cover"
                      />
                      <p className="text-center py-2 text-sm font-medium bg-gray-100">Before</p>
                    </div>
                    <div className="w-1/2">
                      <img 
                        src={result.after} 
                        alt="After undereye cleaning" 
                        className="w-full h-40 object-cover"
                      />
                      <p className="text-center py-2 text-sm font-medium bg-neopurple text-white">After</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-1">
              <span className="block w-2 h-2 bg-neopurple rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
