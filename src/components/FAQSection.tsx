
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FAQSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long do results last?",
      answer: "The results typically last 1-2 weeks depending on the client's lifestyle habits and skin care routine."
    },
    {
      question: "What materials do I need to perform this procedure?",
      answer: "Our training kit includes all the essential tools and products you'll need to get started, and we provide a complete list of supplies that are easily obtainable."
    },
    {
      question: "How long do I need to practice to get proficient?",
      answer: "Most students become comfortable with the technique after 5-10 practice sessions. Our course includes guided practice sessions to ensure you develop confidence."
    },
    {
      question: "Do you provide business and marketing guidance?",
      answer: "Yes! Our training includes a comprehensive business module with marketing materials, pricing strategies, and client retention techniques."
    },
    {
      question: "Is this training enough to market myself as a professional?",
      answer: "Absolutely. Upon completion, you'll receive a certification that authorizes you to offer this service professionally."
    },
    {
      question: "Is there a specific tool or device to remove the undereye area?",
      answer: "Yes, our training teaches you how to use specialized tools safely and effectively. These tools are included in your training kit."
    }
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-neogray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">FAQs</h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''} transition-all duration-500 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{index + 1}. {faq.question}</span>
                  <span className="text-neopurple">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
