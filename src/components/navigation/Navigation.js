import "./navigation.css";

import { useState } from "react";

import cv from "../../resources/cv.pdf";

import { IoIosContact } from "react-icons/io";
import { VscFilePdf } from "react-icons/vsc";
import { BsBriefcase } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BiNews } from "react-icons/bi";

import { elastic as Menu } from "react-burger-menu";

const Navigation = () => {
  const [screen] = useState(window.location.pathname);

  return (
    <Menu>
      <a
        id="about"
        className={
          screen === "/about"
            ? "menu-item_active"
            : screen === "/"
            ? "menu-item_active"
            : "menu-item"
        }
        href="/about"
      >
        <IoIosContact className="menuIcon" /> About
      </a>
      <a
        id="portfolio"
        className={screen === "/portfolio" ? "menu-item_active" : "menu-item"}
        href="/portfolio"
      >
        <BsBriefcase className="menuIcon" /> Portfolio
      </a>
      <a
        id="blog"
        className={screen === "/blog" ? "menu-item_active" : "menu-item"}
        href="/blog"
      >
        <BiNews className="menuIcon" /> Blog
      </a>
      <a
        id="contact"
        className={screen === "/contact" ? "menu-item_active" : "menu-item"}
        href="/contact"
      >
        <GoMail className="menuIcon" /> Contact
      </a>
      <a
        id="cv"
        className="menu-item"
        href={cv}
        target="_blank"
        rel="noreferrer"
      >
        <VscFilePdf className="menuIcon" /> CV
      </a>
    </Menu>
  );
};

export default Navigation;
