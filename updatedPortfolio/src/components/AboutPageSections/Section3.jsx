// Section3.jsx
import React from 'react';

const Section3 = () => {
  return (
    <section className='AboutSection3'>
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
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