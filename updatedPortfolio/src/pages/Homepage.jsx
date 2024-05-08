import Section1 from '../components/HomePageSections/Section1'
import Section2 from '../components/HomePageSections/Section2'
import Section3 from '../components/HomePageSections/Section3'
import Section4 from '../components/HomePageSections/Section4';

import Navbar from '../components/navbar/navbar';
import LoadingScreen from '../components/loader/Loading';

import React, { useState, useEffect } from 'react';

import './HomePage.css'


const HomePage = ({data}) => {

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
        <Navbar HomeLocation='/' AboutLocation='/about'/>
        <Section1 />
        <Section2 filterData={filterData} />
        <Section3 data={filteredData} viewMore={viewMore} />
        <Section4 toggleViewMore={toggleViewMore} viewMore={viewMore}></Section4>
      </>
      )}
    </div>
  );
};

export default HomePage;
