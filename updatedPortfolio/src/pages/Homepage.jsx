import Section1 from '../components/Sections/Section1'
import Section2 from '../components/Sections/Section2'
import Section3 from '../components/Sections/Section3'
import Navbar from '../components/navbar/navbar';

import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Freelance',
    },
    {
      title: 'Project 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Product',
    },
    {
      title: 'Project 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Exploration',
    },
    {
      title: 'Project 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Product',
    },
    {
      title: 'Project 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Exploration',
    },
    {
      title: 'Project 6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Freelance',
    },
  ]);

  const [filteredData, setFilteredData] = useState(data);

  const filterData = (category) => {
    if (category === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 filterData={filterData} />
      <Section3 data={filteredData} />
    </div>
  );
};

export default App;
