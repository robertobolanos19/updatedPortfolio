// Section1.jsx
import React from 'react';
import './Section1.css';

const Section1 = ({ name, subname, description, image }) => {
  return (
    <section className="section1">
      <div className="container">
        <div className="content">
          <h1>{name}</h1>
          <h2>{subname}</h2>
          <p>{description}</p>
        </div>
        <div className="image">
          <img src={image} alt={name} />
        </div>
      </div>
    </section>
  );
};

export default Section1;
