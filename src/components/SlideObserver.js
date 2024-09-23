import React, { useEffect } from 'react';

const SlideObserver = () => {
  useEffect(() => {
    const slideElements = document.querySelectorAll('.slide-up, .slide-left, .slide-right');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visible class when in view
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    slideElements.forEach(el => {
      observer.observe(el);
    });

    // Clean up the observer when component unmounts
    return () => {
      slideElements.forEach(el => observer.unobserve(el));
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return null; // This component doesn't render anything
};

export default SlideObserver;
