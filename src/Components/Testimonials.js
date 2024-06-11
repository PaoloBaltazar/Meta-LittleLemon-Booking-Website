import React from 'react';
import { testimonials } from '../data';
import './Testimonials.css';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }
  return stars;
};

const Testimonials = () => {
  return (
    <div className="testimonials-main">
      <div className="testimonials">
        <div className="testimonials-title">
          <h1 className="testimonials-title-text">Testimonials</h1>
          <div className="testimonials-title-underline"></div>
          <p className="testimonials-subtitle">Hear what our happy customers have to say</p>
        </div>

        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div className="testimonials-card" key={testimonial.id}>
              <img className="testimonials-card-img" src={testimonial.image} alt={testimonial.name}/>
              <h1 className="testimonials-card-name">{testimonial.name}</h1>
              <div className="testimonials-card-stars">{renderStars(testimonial.rating)}</div>
              <p className="testimonials-card-text">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
