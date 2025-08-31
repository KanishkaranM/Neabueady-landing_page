
import React from 'react';
import { useInView } from 'react-intersection-observer';

const TrainingSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const trainingModules = [
    {
      number: "01",
      title: "Introduction",
      description: "Understanding the science of undereye cleaning, how it works, and the benefits to clients."
    },
    {
      number: "02",
      title: "First Steps",
      description: "Application of techniques and methodology including client preparation, workspace setup, and proper tool handling."
    },
    {
      number: "03",
      title: "Mastery",
      description: "Advanced techniques for different skin types, common challenges and solutions."
    },
  ];

  return (
    <section id="training" className="py-16 md:py-24 bg-neogray-light" style={{background:"#F0E8FD"}}>
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Training Contents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trainingModules.map((module, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg p-6 shadow-md transition-all duration-700 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="bg-neopurple text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                  {module.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
