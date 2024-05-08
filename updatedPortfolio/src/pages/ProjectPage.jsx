import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader
import Navbar from '../components/navbar/navbar';
import '../pages/ProjectPage.css';

const ProjectPage = ({data}) => {
  const { title } = useParams();
  const project = data.find(
    (item) => item.title.toLowerCase().replace(/ /g, '-') === title
  );

  const canvasRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const loader = new GLTFLoader();

    // Initialize three.js scene
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('black');

    // Add ambient light
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Load the model (GLB or GLTF)
    loader.load(
      project.model,
      (gltf) => {
        // Scale the model by 2x
        gltf.scene.scale.set(5, 5, 5);
        // Store the model reference
        modelRef.current = gltf.scene;
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error loading model', error);
      }
    );

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the model
      if (modelRef.current) {
        modelRef.current.rotation.x += 0.01;
        modelRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up three.js scene
      renderer.dispose();
      scene.remove();
    };
  }, [project.model]);

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
