// Section2.jsx
import React from 'react';
import '../ProjectPageSections/Section2.css';

const Section2 = () => {
  const images = [
    '/imgs/whiteStill.png',
    '/imgs/whiteStill.png',
    '/imgs/whiteStill.png',
    // Add more image URLs here
  ];

  return (
    <section className="projectSection2">
      <div className="container">
        <div className="row">
          {images.map((imageUrl, index) => (
            <div className="card" key={index}>
              <div className="image">
                <img src={imageUrl} alt={`Image ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
