import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import axios from 'axios'

import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage'; // Import the ProjectPage component
import './App.css'

const App = () => {

    //*State is being used to create fake data, data will be used for our cards and filters
    const [data, setData] = useState([])

    useEffect(()=> {
      axios
      .get('http://localHost:3001/projects')
      .then(response => {
        setData(response.data)
        // console.log(response.data)
      })
    }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/about" element={<About />} />
        {/* Add a route for project pages */}
        <Route path="/project/:id" element={<ProjectPage projects={data}/>} />
      </Routes>
    </Router>
  );
};

export default App;
