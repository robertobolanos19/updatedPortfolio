import React from 'react';
import './Section4.css';

const Section4 = (props) => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <div className='section4'>
        <button className="view-more" onClick={props.toggleViewMore}>
          {props.viewMore ? 'View less' : 'View more'}
        </button>
        <div className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
    </div>
  );
};

export default Section4;
