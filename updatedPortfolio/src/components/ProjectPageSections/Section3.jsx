import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../ProjectPageSections/Section3.css'

const ProjectNavigation = ({ projects, currentProjectId }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const navigate = useNavigate();
  
    useEffect(() => {
      const index = projects.findIndex(project => project.id === currentProjectId);
      setCurrentProjectIndex(index);
    }, [currentProjectId, projects]);
  
    const goToNextProject = () => {
      if (currentProjectIndex < projects.length - 1) {
        const nextProjectId = projects[currentProjectIndex + 1].id;
        navigate(`/project/${nextProjectId}`);
      }
    };
  
    const goToPreviousProject = () => {
      if (currentProjectIndex > 0) {
        const previousProjectId = projects[currentProjectIndex - 1].id;
        navigate(`/project/${previousProjectId}`);
      }
    };
  
    return (
      <div className="project-navigation">
        <button
          onClick={goToPreviousProject}
          className={currentProjectIndex === 0 ? 'disabled' : ''}
        >
          Back
        </button>
        <button
          onClick={goToNextProject}
          className={currentProjectIndex === projects.length - 1 ? 'disabled' : ''}
        >
          Next
        </button>
      </div>
    );
  };
  
export default ProjectNavigation;
  
