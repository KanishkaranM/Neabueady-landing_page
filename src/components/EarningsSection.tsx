
import React from 'react';
import { useInView } from 'react-intersection-observer';

const EarningsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const earningsData = [
    {
      title: "Price per Session",
      value: "$50-100+",
      subtext: "Based on your location"
    },
    {
      title: "Session Duration",
      value: "30 min",
      subtext: "Quick service"
    },
    {
      title: "Sessions per Day",
      value: "4-10",
      subtext: "Flexible scheduling"
    },
    {
      title: "Daily Earnings",
      value: "$200-1000+",
      subtext: "Potential income"
    },
    {
      title: "Sessions per Client",
      value: "1-3",
      subtext: "Recommended"
    },
    {
      title: "Earnings per Client",
      value: "$50-300+",
      subtext: "Total value"
    },
  ];

  return (
    <section id="earnings" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Earning Potential</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {earningsData.map((item, index) => (
              <div 
                key={index}
                className={`bg-neogray-light rounded-lg p-6 text-center shadow-md transition-all duration-700 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <p className="text-gray-600 text-sm">{item.title}</p>
                <h3 className="text-2xl font-bold text-neopurple my-2">{item.value}</h3>
                <p className="text-gray-500 text-sm">{item.subtext}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-neopurple hover:bg-neopurple-dark text-white px-6 py-2 rounded-full text-sm font-medium transition-all">
              Calculate Your Potential Earnings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;
