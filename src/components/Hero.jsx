import React from 'react';
import '../assets/hero.css';
import image1 from '../assets/img/image1.jpg';

function Hero() {
  return (
    <section className="hero">
      <img src={image1} alt="Campus View" />
      <div className="hero-text">
        <h2>IIT Bombay</h2>
      </div>
    </section>
  );
}

export default Hero;
