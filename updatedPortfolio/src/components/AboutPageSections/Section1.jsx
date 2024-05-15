// Section1.jsx
import React from 'react';
import ThreeJsBanner from '../ThreeJs/project';
import './Section1.css'

const Section1 = () => {
  const model = '/dummyModels/test.glb'
  return (
    <section className='AboutSection1'>
      <ThreeJsBanner/>        
      <div className="container">
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
