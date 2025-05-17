import React, { useRef } from 'react';
import '../index.css'; // Assuming styles are in index.css

const images = [
  {
    url: 'https://i.ibb.co/qCkd9jS/img1.jpg'
  },
  {
    url: 'https://i.ibb.co/jrRb11q/img2.jpg'
  },
  {
    url: 'https://i.ibb.co/NSwVv8D/img3.jpg'
  },
  {
    url: 'https://i.ibb.co/Bq4Q0M8/img4.jpg'
  },
  {
    url: 'https://i.ibb.co/jTQfmTq/img5.jpg'
  },
  {
    url: 'https://i.ibb.co/RNkk6L0/img6.jpg'
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
          <div className="item" style={{ backgroundImage: `url(${img.url})` }} key={index}>
            
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
