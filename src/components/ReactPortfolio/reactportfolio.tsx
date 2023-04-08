import { useState } from "react";
import { reactPortfolioData } from "../../data/reactportfolio";
import { ReactPortfolioType } from "./reactportfolio.types";
import "./reactportfolio.css";
import { Link } from "react-router-dom";

const ReactPortfolio = () => {
  const [data] = useState<any>(reactPortfolioData);

  return (
    <main>
      <h2 className="title-padding-react" id="Portfolio">
        React Portfolio
      </h2>
      <div className="grid-react">
        {data.map((gallery: ReactPortfolioType) => {
          const { id, title, description, techUsed, image } = gallery;
          return (
            <div className="card-react" key={id}>
              <h3>{title}</h3>
              <img src={image} className="prop-img-react" alt={title} />
              <p>
                <strong>Description:</strong>
                {description}
              </p>
              <p>Technologies used: {techUsed}</p>
              <Link to="/StarWarsAPIProject" target="_blank">
                <button className="btn-react">View Project</button>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ReactPortfolio;
