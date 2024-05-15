import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../components/navbar/navbar';
import ThreeJsBanner from '../components/ThreeJs/project';
import Section1 from '../components/ProjectPageSections/Section1'
import Section2 from '../components/ProjectPageSections/Section2'


import '../pages/ProjectPage.css';

const ProjectPage = ({ data }) => {
  const { title } = useParams();
  const project = data.find(
    (item) => item.title.toLowerCase().replace(/ /g, '-') === title
  );

  return (
    <div className='ProjectPageMainDiv'>
      <Navbar HomeLocation="/" AboutLocation="/about" />
      <Section1 model={project.model} name={project.title} description={project.description}/>
      <Section2 data={project}/>
    </div>
  );
};

export default ProjectPage;
