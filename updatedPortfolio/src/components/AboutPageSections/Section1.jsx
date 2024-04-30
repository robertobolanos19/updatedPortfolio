// Section1.jsx
import React from 'react';
import './Section1.css'

const Section1 = () => {
  return (
    <section className='AboutSection1'>
      <div className="container">
        <img src="https://via.placeholder.com/600x400" alt="placeholder" />
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          accumsan velit. Cras at libero mi. Donec non risus sed ipsum rhoncus
          hendrerit vel ac ante.
        </p>
      </div>
    </section>
  );
};

export default Section1;
