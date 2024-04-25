import React from 'react';
import './Section3.css';

const Section3 = ({ data }) => {
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const rows = chunkArray(data, 3);

  return (
    <section className="section3">
      <div className="container">
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, index) => (
              <div className="card" key={index}>
                <div className="image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <h3>Placeholder</h3>
                  <h3>Placeholder</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
