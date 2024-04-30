import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;