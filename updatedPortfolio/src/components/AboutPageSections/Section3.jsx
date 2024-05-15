// Section3.jsx
import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

import './Section3.css'

const Section3 = () => {
  return (
    <section className='AboutSection3'>
      <div className="container">
        <div className="social-links">
        <a
        href="https://www.linkedin.com/in/roberto-bolanos-021a6a242/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: '10px' }}
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </a>
        </div>
        <h1>Let's work together!</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Section3;