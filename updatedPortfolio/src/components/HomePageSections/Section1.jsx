import React from 'react';
import Header from "../header/header";
import ThreeJsBanner from '../ThreeJs/project';
import '../HomePageSections/Section1.css';

const Section1 = (props) => {
  return (
    <div className='section1'>
        <ThreeJsBanner/>
        <div className="container">
            <div className="content">
                <Header title='Inexplicable' desc='Creations'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim neque vitae libero volutpat, sit amet tristique eros
                volutpat.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Section1;


/*
.section2 {
  width: 100%;
  color: black;
  padding: 0px;
  margin: auto;
  z-index: 2;
}

.section2 .container {
  background-color: yellow;
  width: 100%;
  padding: 50px 0px 0px 0;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;

  justify-content: center; /* Center the buttons 


*/