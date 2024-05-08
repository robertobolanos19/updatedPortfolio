import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePageSections/Section3.css';

const Section3 = ({ data, viewMore }) => {
  const maxCards = viewMore ? data.length : 6;

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const rows = chunkArray(data.slice(0, maxCards), 3);

  return (
    <section className="section3">
      <div className="container">
        {rows.map((row, rowIndex) => (
          (row.length === 3 || viewMore) && ( // Only create a row if it has 3 cards or viewMore is true
            <div className="row" key={rowIndex}>
              {row.map((item, index) => (
                <div className="card" key={index}>
                  <Link to={`/project/${item.title.toLowerCase().replace(/ /g, '-')}`} className="project-link">
                    <div className="image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="content">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <h3>{item.dateCreated}</h3>
                      <h3>{item.projectType}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Section3;
