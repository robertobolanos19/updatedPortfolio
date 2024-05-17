import Section1 from '../components/HomePageSections/Section1'
import Section2 from '../components/HomePageSections/Section2'
import Section3 from '../components/HomePageSections/Section3'
import Section4 from '../components/HomePageSections/Section4';

import Navbar from '../components/navbar/navbar';
import LoadingScreen from '../components/loader/Loading';

import React, { useState, useEffect } from 'react';

import '../pages/HomePage.css'

const HomePage = ({ data }) => {

  console.log('there are', data.length, 'pieces of data')

  const [loading, setLoading] = useState(true); // State to manage loading
  const [viewMore, setViewMore] = useState(false); // State to manage "View More" button
  const [activeFilter, setActiveFilter] = useState('All'); // State to manage active filter
  const [filteredData, setFilteredData] = useState(data); // State to manage filtered data

  useEffect(() => {
    //* Simulate a delay to show the loading screen
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    //* Cleanup function to clear the timeout so it can reload when page is refreshed
    return () => clearTimeout(timeout);
  }, []);

  //end of loading screen

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  const filterData = (category) => {
    if (category === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    filterData(activeFilter);
  }, [activeFilter, data]); // Run filterData whenever activeFilter or data changes

  useEffect(() => {
    filterData('All'); // Call filterData with 'All' when the component mounts
  }, []); // Empty dependency array ensures it runs only once, when the component mounts

  return (
    <div className='homePageMainDiv'>
      {loading ? ( // Conditionally render the LoadingScreen component
        <LoadingScreen />
      ) : (
        <>
          <Navbar HomeLocation='/' AboutLocation='/about' />
          <Section1 />
          <Section2 filterData={filterData} setActiveFilter={setActiveFilter} activeFilter={activeFilter} />
          <Section3 data={filteredData} viewMore={viewMore} />
          <Section4 toggleViewMore={toggleViewMore} viewMore={viewMore}></Section4>
        </>
      )}
    </div>
  );
};

export default HomePage;
