import React, { useRef } from 'react';
import '../index.css'; 

const images = [
  {
    src: '/e1.jpg',
    alt: 'Image 1'
  },
  {
    src: '/e2.jpg',
    alt: 'Image 2'
  },
  {
    src: '/e3.JPG',
    alt: 'Image 3'
  },
  {
    src: '/e9.jpeg',
    alt: 'Image 9'
  },
  {
    src: '/e7.JPG',
    alt: 'Image 7'
  }
];

const SliderSection = () => {
  const slideRef = useRef();

  const nextSlide = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.appendChild(items[0]);
  };

  const prevSlide = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <section className="slider-container">
      <div className="slide" ref={slideRef}>
        {images.map((img, index) => (
          <div 
            className="item flex-shrink-0 w-full h-full bg-cover bg-center bg-no-repeat relative" 
            key={index}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23374151'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%239CA3AF' font-size='24'%3EImage Not Found%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        ))}
      </div>
      <div className="button ">
        <button className="prev bg-black" onClick={prevSlide}>
          <i className="fa-solid fa-arrow-left white-icon">L</i>
        </button>
        <button className="next bg-black" onClick={nextSlide}>
          <i className="fa-solid fa-arrow-right white-icon" >R</i>
        </button>
      </div>
    </section>
  );
};

export default SliderSection;
