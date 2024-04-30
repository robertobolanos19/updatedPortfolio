// Section2.jsx
import React from 'react';
import '../AboutPageSections/Section2.css'

const Section2 = () => {
  return (
    <section className="AboutSection2">
      <div className="container">
        <div className="row">
          <div className="card">
            <h1>Art</h1>
            <hr />
            <h2>Subtitle 1</h2>
            <h2>Subtitle 2</h2>
            <h2>Subtitle 3</h2>
          </div>
          <div className="card">
            <h1>UX</h1>
            <hr />
            <h2>Subtitle 1</h2>
            <h2>Subtitle 2</h2>
            <h2>Subtitle 3</h2>
          </div>
          <div className="card">
            <h1>Visuals</h1>
            <hr />
            <h2>Subtitle 1</h2>
            <h2>Subtitle 2</h2>
            <h2>Subtitle 3</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
