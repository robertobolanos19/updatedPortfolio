// import React, { useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Section1 from '../components/ProjectPageSections/Section1';
import Section2 from '../components/ProjectPageSections/Section2';
import ProjectNavigation from '../components/ProjectPageSections/Section3';

import { useParams } from 'react-router-dom';

import '../pages/ProjectPage.css';

const ProjectPage = ({ projects }) => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  
  useEffect(() => {
    if (projects && projects.length > 0) {
      const foundProject = projects.find(project => project.id === id);
      setProject(foundProject);
    }
  }, [id, projects]);


  if (!project) {
    return <div>Loading...</div>;
  }


  return (
    <div className='ProjectPageMainDiv'>
      <Navbar HomeLocation="/" AboutLocation="/about" />
      <Section1 model={project.model} name={project.title} description={project.description} />
      <Section2 data={project} />
      <ProjectNavigation projects={projects} currentProjectId={project.id} />
    </div>
  );
};

export default ProjectPage;





/*
import React from 'react';
import Navbar from '../components/navbar/navbar';
import Section1 from '../components/ProjectPageSections/Section1';
import Section2 from '../components/ProjectPageSections/Section2';
import ProjectNavigation from '../components/ProjectNavigation';

import '../pages/ProjectPage.css';
import { projects } from '../data'; // Import your projects data

const ProjectPage = () => {
  const location = useLocation();
  const item = location.state.item;

  return (
    <div className='ProjectPageMainDiv'>
      <Navbar HomeLocation="/" AboutLocation="/about" />
      <Section1 model={item.model} name={item.title} description={item.description} />
      <Section2 data={item} />
      <ProjectNavigation projects={projects} currentProjectId={item.id} />
    </div>
  );
};

export default ProjectPage;

*/

