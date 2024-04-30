// AboutPage.jsx
import React from 'react';
import Section1 from '../components/AboutPageSections/Section1.jsx';
import Section2 from '../components/AboutPageSections/Section2.jsx';
import Section3 from '../components/AboutPageSections/Section3.jsx';
import Navbar from '../components/navbar/navbar.jsx';

const AboutPage = () => {
  return (
    <div>
        <Navbar HomeLocation='/' AboutLocation='/about'/>
        <Section1 />
        <Section2 />
        <Section3 />
    </div>
  );
};

export default AboutPage;
