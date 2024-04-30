import React, { useState } from 'react';
import '../HomePageSections/Section2.css';

const Section2 = ({ filterData }) => {
  const [activeFilter, setActiveFilter] = useState('All');

 
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    filterData(filter);
  };

  return (
    <section className="section2">
      <div className="container">
        <button
          className={activeFilter === 'All' ? 'active' : ''}
          onClick={() => handleFilterClick('All')}
        >
          All
        </button>
        <button
          className={activeFilter === 'Freelance' ? 'active' : ''}
          onClick={() => handleFilterClick('Freelance')}
        >
          Freelance
        </button>
        <button
          className={activeFilter === 'Product' ? 'active' : ''}
          onClick={() => handleFilterClick('Product')}
        >
          Product
        </button>
        <button
          className={activeFilter === 'Exploration' ? 'active' : ''}
          onClick={() => handleFilterClick('Exploration')}
        >
          Exploration
        </button>
      </div>
    </section>
  );
};

export default Section2;
