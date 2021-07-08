import "./navigation.css";

import cv from "../resources/cv.pdf";

import { IoMenu } from "react-icons/io5";
import { elastic as Menu } from "react-burger-menu";

const Navigation = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a id="portfolio" className="menu-item" href="/portfolio">
        Portfolio
      </a>
    </Menu>
  );
};

export default Navigation;
