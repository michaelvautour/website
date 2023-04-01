import { useState } from "react";
import { portfolioData } from "../../data/portfolio";
import { VanillaPortfolioType } from "./vanillatypes";
import "./vanillaportfolio.css";

const VanillaPortfolio = () => {
  const [data] = useState<any>(portfolioData);

  return (
    <main>
      <h2 className="title-padding" id="Portfolio">
        Portfolio
      </h2>
      <div className="grid">
        {data.map((gallery: VanillaPortfolioType) => {
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
              <a
                className="btn"
                href={`./sites/prj${id}/index.html`}
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default VanillaPortfolio;
