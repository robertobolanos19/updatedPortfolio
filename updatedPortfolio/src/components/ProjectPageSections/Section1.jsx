// Section1.jsx
import React from 'react';
import ThreeJsBanner from '../ThreeJs/project';
import Header from '../header/header';
import '../ProjectPageSections/Section1.css'

const Section1 = ({model, name, description, image }) => {

  console.log(model)
  return (
    <div className='projectSection1'>
        <ThreeJsBanner/>
        <div className="container">
            <div className="content">
                <Header title={name}/>
                <p>{description}</p>
            </div>
        </div>
    </div>
  );
};

export default Section1;
