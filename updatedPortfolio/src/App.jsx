import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage'; // Import the ProjectPage component
import './App.css'

const App = () => {

    //*State is being used to create fake data, data will be used for our cards and filters
    const [data, setData] = useState([
      {
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
        image: '/imgs/whiteStill.png',
        category: 'Freelance',
        dateCreated: 'year - 2021',
        projectType: 'Freelance',
        model: '/dummyModels/test.glb'
      },
      {
        title: 'Project 2',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
          image: '/imgs/whiteStill.png',
        category: 'Product',
        dateCreated: 'year - 2021',
        projectType: 'Product'
      },
      {
        title: 'Project 3',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
          image: '/imgs/whiteStill.png',
        category: 'Exploration',
        dateCreated: 'year - 2021',
        projectType: 'Exploration'
      },
      {
        title: 'Project 4',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
          image: '/imgs/whiteStill.png',
        category: 'Freelance',
        dateCreated: 'year - 2021',
        projectType: 'Freelance'
      },
      {
        title: 'Project 5',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
          image: '/imgs/whiteStill.png',
        category: 'Product',
        dateCreated: 'year - 2021',
        projectType: 'Product'
      },
      {
        title: 'Project 6',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
          image: '/imgs/whiteStill.png',
        category: 'Exploration',
        dateCreated: 'year - 2021',
        projectType: 'Exploration'
      },
      {
        title: 'Project 7',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
          image: '/imgs/whiteStill.png',
        category: 'Freelance',
        dateCreated: 'year - 2021',
        projectType: 'Freelance'
      },
      {
        title: 'Project 8',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
          image: '/imgs/whiteStill.png',
        category: 'Product',
        dateCreated: 'year - 2021',
        projectType: 'Product'
      },
      {
        title: 'Project 9',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
          image: '/imgs/whiteStill.png',
        category: 'Exploration',
        dateCreated: 'year - 2021',
        projectType: 'Exploration'
      },
      {
        title: 'Project 10',
        description:
          's euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
        image: '/imgs/whiteStill.png',
        category: 'Exploration',
        dateCreated: 'year - 2021',
        projectType: 'Exploration'
      }
    ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/about" element={<About />} />
        {/* Add a route for project pages */}
        <Route path="/project/:title" element={<ProjectPage data={data}/>} />
      </Routes>
    </Router>
  );
};

export default App;
