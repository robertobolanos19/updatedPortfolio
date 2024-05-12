// Section1.jsx
import React from 'react';
import ThreeJsBanner from '../ThreeJs/project';
import Header from '../header/header';
// import './Section1.css';

const Section1 = ({ name, description, image }) => {
  return (
    <section className="section1">
      <ThreeJsBanner/>
      <div className="left">
          <div className="content">
            <Header title={name}/>
            <p>{description}</p>
          </div>
        </div>
    </section>
  );
};

export default Section1;
