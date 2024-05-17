import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePageSections/Section3.css';

const Section3 = ({ data, viewMore }) => {
  const maxCards = viewMore ? data.length : 6;

  const chunkArray = (arr, size) => {
    const numChunks = Math.ceil(arr.length / size);
    const chunks = Array.from({ length: numChunks }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
    return chunks;
  };

  const rows = chunkArray(data.slice(0, maxCards), 3);

  return (
    <section className="section3">
      <div className="section3Container">
        {rows.map((row, rowIndex) => (
          (row.length === 3 || viewMore) && (
            <div className="row" key={rowIndex}>
              {row.map((item, index) => (
                <div className="card" key={index}>
                  <Link
                    to={{
                      pathname: `/project/${item.id}`,
                      state: { item: item, projects: data }
                    }}
                    className="project-link"
                  >
                    <div className="image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="content">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <h3>{item.dateCreated}</h3>
                      <h3>{item.category}</h3>
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
