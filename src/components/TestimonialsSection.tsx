
import React from 'react';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      image: "../src/assets/img/student.svg",
      name: "Sarah Johnson",
      role: "Beauty Therapist",
      quote: "This training has transformed my business. My clients love the results and keep coming back for more!"
    },
    {
      image: "../src/assets/img/student.svg",
      name: "Emily Parker",
      role: "Salon Owner",
      quote: "Adding undereye cleaning to our service menu has been incredibly profitable. The training was comprehensive and easy to follow."
    },
    {
      image: "../src/assets/img/student.svg",
      name: "Jessica Miller",
      role: "Esthetician",
      quote: "My clients are amazed by the before and after results. This has become one of our most requested services!"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Satisfied Students</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-neogray-light rounded-lg p-6 shadow-md transition-all duration-700 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">{testimonial.name}</h3>
                <p className="text-neopurple text-sm text-center mb-4">{testimonial.role}</p>
                <p className="text-gray-600 text-center italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-1">
              <span className="block w-2 h-2 bg-neopurple rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
