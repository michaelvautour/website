import { useState } from "react";
import { portfolio } from "../../data/portfolio";
import { PortfolioType } from "./types";
import "./portfolio.css";

const Portfolio = () => {
  const [data, setData] = useState<any>(portfolio);

  return (
    <main>
      <h2 className="title-padding">Portfolio</h2>
      <div className="grid">
        {data.map((gallery: PortfolioType) => {
          const { id, title, description, techUsed, image } = gallery;
          return (
            <>
              <div className="card">
                <h3>{title}</h3>
                <img src={image} className="prop-img" alt={title} />
                <p>
                  <strong>Description:</strong>
                  {description}
                </p>
                <p>Technologies used: {techUsed}</p>
                <a className="btn" href="./" target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default Portfolio;

// const xhrGallery = new XMLHttpRequest();
// xhrGallery.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     let gallerys = JSON.parse(xhrGallery.responseText);
//     updatePortfolio(gallerys);
//   }
// };

// xhrGallery.open("GET", "json/portfolio.json");
// xhrGallery.send();

// function updatePortfolio(gallerys: string | any[]) {
//   let portf = "";
//   for (i = 0; i < gallerys.length; i++) {
//     let gallery = gallerys[i];
//     portf += `
//         <div class="card">
//         <h3>${gallery.title}</h3>
//         <img src="images/port_proj_${i + 2}.jpg" alt="Thumbnail for project ${
//       gallery.title
//     }" class="prop-img">
//         <p><strong>Description:</strong> ${gallery.description}</p>
//         <p>Technologies used: ${gallery.techUsed}</p>
//         <a class="btn" href="./portfolio/prj${
//           i + 2
//         }/index.html" target="_blank" rel="noreferrer">View Project</a>
//         </div>
//         `;
//   }
//   portf =
//     `<h2 class="title-padding"><a id="Portfolio">Portfolio</a></h2>` +
//     `<div class="grid">` +
//     portf +
//     `</div>`;
//   return (document.querySelector("main")!.innerHTML = portf);
// }
