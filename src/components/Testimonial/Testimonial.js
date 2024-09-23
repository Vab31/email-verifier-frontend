import React from 'react';
import './style.css';

const Testimonial = ({ name, title, image, review, rating }) => {
  return (
    <div className="testimonial-card bg-gray-100 p-8 rounded">
      <div className="flex items-center mb-4">
        <img
          alt={`${name}'s pic`}
          src={image}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900">{name}</span>
          <span className="text-gray-500 text-sm">{title}</span>
          <img src={rating} alt={`${name}'s rating`} className="h-3 w-20 mt-1" />
        </div>
      </div>
      <p className="leading-relaxed">{review}</p>
    </div>
  );
};

export default Testimonial;
