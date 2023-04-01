import { useState } from "react";
import { reactPortfolioData } from "../../data/reactportfolio";
import { ReactPortfolioType } from "./reacttypes";
import "./reactportfolio.css";
import { Link } from "react-router-dom";

const ReactPortfolio = () => {
  const [data] = useState<any>(reactPortfolioData);

  return (
    <main>
      <h2 className="title-padding" id="Portfolio">
        React Portfolio
      </h2>
      <div className="grid">
        {data.map((gallery: ReactPortfolioType) => {
          const { id, title, description, techUsed, image } = gallery;
          return (
            <div className="card" key={id}>
              <h3>{title}</h3>
              <img src={image} className="prop-img" alt={title} />
              <p>
                <strong>Description:</strong>
                {description}
              </p>
              <p>Technologies used: {techUsed}</p>
              <Link to="/StarWarsAPIProject" target="_blank">
                <button className="btn">View Project</button>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ReactPortfolio;
