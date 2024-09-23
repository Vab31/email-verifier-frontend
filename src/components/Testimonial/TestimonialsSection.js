import React, { useState } from 'react';
import './style.css';
import Testimonial from './Testimonial';
import Image from './assets/avatar.png';
import Stars from './assets/5-star-icon.png';
import nextImage from './assets/next.webp';

const testimonialsData = [
  {
    name: 'John Doe',
    title: 'UI Developer',
    image: Image,
    review: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90\'s microdosing.',
    rating: Stars,
  },
  {
    name: 'Jane Smith',
    title: 'Frontend Engineer',
    image: Image,
    review: 'Williamsburg semiotics fixie, quinoa letterpress tattooed butcher plaid drinking vinegar VHS forage.',
    rating: Stars,
  },
  {
    name: 'Alice Johnson',
    title: 'Software Engineer',
    image: Image,
    review: 'Sustainable asymmetrical four loko sartorial put a bird on it drinking vinegar quinoa fixie mlkshk hammock.',
    rating: Stars,
  },
  {
    name: 'Bob Williams',
    title: 'Backend Developer',
    image: Image,
    review: 'Chambray dreamcatcher squid cardigan. Irony art party single-origin coffee trust fund YOLO tattooed.',
    rating: Stars,
  },
  {
    name: 'Emily Davis',
    title: 'Full Stack Developer',
    image: Image,
    review: 'Sriracha four loko street art vinyl. Chillwave tumeric farm-to-table distillery before they sold out.',
    rating: Stars,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = 3;
  const currentTestimonials = testimonialsData.slice(currentIndex, currentIndex + testimonialsPerPage);

  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < testimonialsData.length) {
      setCurrentIndex(currentIndex + testimonialsPerPage);
    } else {
      setCurrentIndex(0); // Loop back to the beginning if at the end
    }
  };

  const handlePrev = () => {
    if (currentIndex - testimonialsPerPage >= 0) {
      setCurrentIndex(currentIndex - testimonialsPerPage);
    } else {
      setCurrentIndex(testimonialsData.length - testimonialsPerPage); // Go to the last set if at the beginning
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="font-medium text-[#6a69ff] text-center slide-up"><b>Testimonials</b></h1>
        <h2 className="font-bold text-center text-2xl mt-6">What our customers are saying</h2>

        <div className="flex-container mt-6">
          {currentTestimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.name}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="testimonials-navigation mt-5 flex justify-center gap-3">
          <button onClick={handlePrev}>
            <img src={nextImage} alt="Previous testimonial" className="rotate-180 bg-gray-100" />
          </button>
          <button onClick={handleNext}>
            <img src={nextImage} alt="Next testimonial" className="bg-gray-100" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
