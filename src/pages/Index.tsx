
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import ResultsSection from '@/components/ResultsSection';
import ApproachSection from '@/components/ApproachSection';
import EarningsSection from '@/components/EarningsSection';
import TrainingSection from '@/components/TrainingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Add event listeners for the FAQ section
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question');
      question?.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    // Initialize any other interactive elements
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    videoThumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', () => {
        // In a real implementation, this would play the video
        console.log('Video thumbnail clicked');
      });
    });

    return () => {
      // Clean up event listeners
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhySection />
      <ResultsSection />
      <ApproachSection />
      <EarningsSection />
      <TrainingSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
