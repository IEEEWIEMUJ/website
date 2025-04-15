import React, { useRef } from 'react';
import '../index.css'; // Assuming styles are in index.css

const images = [
  {
    name: 'Switzerland',
    description: 'A breathtaking country with stunning landscapes.',
    url: 'https://i.ibb.co/qCkd9jS/img1.jpg'
  },
  {
    name: 'Finland',
    description: 'The land of a thousand lakes.',
    url: 'https://i.ibb.co/jrRb11q/img2.jpg'
  },
  {
    name: 'Iceland',
    description: 'Where fire meets ice.',
    url: 'https://i.ibb.co/NSwVv8D/img3.jpg'
  },
  {
    name: 'Australia',
    description: 'Home to kangaroos and beautiful beaches.',
    url: 'https://i.ibb.co/Bq4Q0M8/img4.jpg'
  },
  {
    name: 'Netherland',
    description: 'Windmills, tulips, and canals.',
    url: 'https://i.ibb.co/jTQfmTq/img5.jpg'
  },
  {
    name: 'Ireland',
    description: 'Lush greenery and historic castles.',
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
            <div className="content">
              <div className="name">{img.name}</div>
              <div className="des">{img.description}</div>
              <button>See More</button>
            </div>
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
