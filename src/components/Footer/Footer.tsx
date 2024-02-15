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
        &copy; Michael Vautour, 2024
      </p>
    </footer>
  );
};

export default Footer;
