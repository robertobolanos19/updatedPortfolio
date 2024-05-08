import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import '../pages/ProjectPage.css'

const ProjectPage = ({ data }) => {
  const { title } = useParams();
  const project = data.find(
    (item) => item.title.toLowerCase().replace(/ /g, '-') === title
  );

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Initialize three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('black');

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up three.js scene
      renderer.dispose();
      scene.remove(cube);
    };
  }, []);

  return (
    <div>
      <Navbar HomeLocation="/" AboutLocation="/about" />
      <div className="canvas-container">
        <canvas ref={canvasRef} />
        <div className="project-details">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="project-info">
            <p>Date Created: {project.dateCreated}</p>
            <p>Project Type: {project.projectType}</p>
          </div>
        </div>
      </div>
      <div className="other-projects">
        <div className="projectCard"></div>
        <div className="projectCard"></div>
        <div className="projectCard"></div>
      </div>
    </div>
  );
};

export default ProjectPage;
