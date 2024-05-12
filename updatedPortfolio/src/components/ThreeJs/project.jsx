import React, { useRef, useEffect } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader
import './project.css'; // Import CSS file

const ThreeJsBanner = ({ project }) => {
  const canvasRef = useRef(null);
  const modelRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const loader = new GLTFLoader();

    // Initialize three.js scene
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight, // Adjust aspect ratio based on the canvas
      0.1,
      1000
    );
    const renderer = new WebGLRenderer({ canvas, antialias: true });
    renderer.setClearColor('transparent');

    // Add ambient light
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove, false);

    // Load the model (GLB or GLTF)
    if (project) {
      loader.load(
        project.model,
        (gltf) => {
          // Store the model reference
          modelRef.current = gltf.scene;
          // Adjust model position and scale
          gltf.scene.position.set(0, 0, -10); // Adjust the model position
          gltf.scene.scale.set(8, 8, 8); // Adjust the model scale
          scene.add(gltf.scene);
        },
        undefined,
        (error) => {
          console.error('Error loading model', error);
        }
      );
    } else {
      // Load local model if project parameter is not provided
      loader.load(
        '/dummyModels/test.glb',
        (gltf) => {
          // Store the model reference
          modelRef.current = gltf.scene;
          // Adjust model position and scale
          gltf.scene.position.set(2, 0, 0); // Adjust the model position
          gltf.scene.scale.set(5, 5, 5); // Adjust the model scale
          scene.add(gltf.scene);
        },
        undefined,
        (error) => {
          console.error('Error loading local model', error);
        }
      );
    }

    camera.position.z = 5;
    cameraRef.current = camera;

    const resizeRendererToDisplaySize = () => {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const aspect = width / height;
      renderer.setSize(width, height, false);
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    };

    const animate = function () {
      resizeRendererToDisplaySize();
      requestAnimationFrame(animate);

      // Rotate the model
      if (modelRef.current) {
        const distance = modelRef.current.position.distanceTo(cameraRef.current.position);
        const threshold = 5;
        if (distance < threshold) {
          const pos = new Vector3(mouseX, mouseY, 0.5);
          pos.unproject(cameraRef.current);
          modelRef.current.lookAt(pos);
        } else {
          modelRef.current.rotation.y += 0.002;
          modelRef.current.rotation.x += 0.002;
        }
      }

      renderer.render(scene, cameraRef.current);
    };

    animate();

    return () => {
      // Clean up three.js scene
      renderer.dispose();
      scene.remove();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [project]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ThreeJsBanner;
