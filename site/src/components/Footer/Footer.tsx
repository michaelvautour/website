import "./footer.css";
import { socialData } from "../../data/footer";

import React, { useState } from "react";
import { SocialType } from "./types";

const Footer = () => {
  const [footer] = useState(socialData);

  return (
    <footer>
      {footer.map((social: SocialType) => {
        const { id, url, img, logoAlt } = social;
        return (
          <a href={url} key={id} target="_blank" rel="noreferrer">
            <img src={img} className="img-social" alt={logoAlt}></img>
          </a>
        );
      })}
      <p id="Contact" className="copyright">
        &copy; Michael Vautour, 2022
      </p>
    </footer>
  );
};

export default Footer;

// const xhrSocial = new XMLHttpRequest();
// xhrSocial.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     let socials = JSON.parse(xhrSocial.responseText);
//     updateSocial(socials);
//   }
// };

// xhrSocial.open("GET", "json/footer.json");
// xhrSocial.send();

// function updateSocial(socials) {
//   let soci = "";
//   for (i = 0; i < socials.length; i++) {
//     let social = socials[i];
//     soci += `
//         <a href=${social.url} target="_blank" rel="noreferrer"><img src="images/${social.img}" class="img-social" alt="${social.logoAlt}"></a>
//         `;
//   }
//   soci += `<p id="Contact">&copy; Michael Vautour, 2022</p>`;
//   return (document.querySelector("footer").innerHTML = soci);
// }
