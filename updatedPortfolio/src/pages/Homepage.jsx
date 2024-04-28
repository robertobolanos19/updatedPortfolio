import Section1 from '../components/Sections/Section1'
import Section2 from '../components/Sections/Section2'
import Section3 from '../components/Sections/Section3'
import Section4 from '../components/Sections/Section4';

import Navbar from '../components/navbar/navbar';
import LoadingScreen from '../components/loader/Loading';

import React, { useState, useEffect } from 'react';

import './Homepage.css'


const App = () => {

  //*State is being used to create fake data, data will be used for our cards and filters
  const [data, setData] = useState([
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Freelance',
      dateCreated:'year - 2021',
      projectType:'Freelance'
    },
    {
      title: 'Project 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Product',
      dateCreated:'year - 2021',
      projectType:'Product'
    },
    {
      title: 'Project 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Exploration',
      dateCreated:'year - 2021',
      projectType:'Exploration'
    },
    {
      title: 'Project 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Freelance',
      dateCreated:'year - 2021',
      projectType:'Freelance'
    },
    {
      title: 'Project 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Product',
      dateCreated:'year - 2021',
      projectType:'Product'
    },
    {
      title: 'Project 6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Exploration',
      dateCreated:'year - 2021',
      projectType:'Exploration'
    },
    {
      title: 'Project 7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Freelance',
      dateCreated:'year - 2021',
      projectType:'Freelance'
    },
    {
      title: 'Project 8',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Product',
      dateCreated:'year - 2021',
      projectType:'Product'
    },
    {
      title: 'Project 9',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Exploration',
      dateCreated:'year - 2021',
      projectType:'Exploration'
    },
    {
      title: 'Project 10',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim neque vitae libero volutpat, sit amet tristique eros volutpat. Nullam rhoncus euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.',
      image: 'https://via.placeholder.com/300',
      category: 'Exploration',
      dateCreated:'year - 2021',
      projectType:'Exploration'
    },
  ]);


  //!where code starts :p


  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    //* Simulate a delay to show the loading screen
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    //* Cleanup function to clear the timeout so it can reload when page is refreshed
    return () => clearTimeout(timeout);
  }, []);

  //*State set to false so the view more button doesnt open up without a user
  const [viewMore, setViewMore] = useState(false);

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  //*explained via tours
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
            {loading ? ( // Conditionally render the LoadingScreen component
        <LoadingScreen />
      ) : (
      <>
        <Navbar />
        <Section1 />
        <Section2 filterData={filterData} />
        <Section3 data={filteredData} viewMore={viewMore} />
        <Section4 toggleViewMore={toggleViewMore} viewMore={viewMore}></Section4>
      </>
      )}
    </div>
  );
};

export default App;
