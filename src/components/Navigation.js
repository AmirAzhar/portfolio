import "./navigation.css";

import { useState } from "react";

import cv from "../resources/cv.pdf";

import { AiOutlineHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import { elastic as Menu } from "react-burger-menu";

const Navigation = () => {
  const [screen, setScreen] = useState(window.location.pathname);

  return (

    <Menu>
      <a
        id="home"
        className={screen == "/" ? "menu-item_active" : "menu-item"}
        href="/"
      >
        <AiOutlineHome className="menuIcon" /> Home
      </a>
      <a
        id="about"
        className={screen == "/about" ? "menu-item_active" : "menu-item"}
        href="/about"
      >
        <IoIosContact className="menuIcon" /> About
      </a>
      <a
        id="contact"
        className={screen == "/contact" ? "menu-item_active" : "menu-item"}
        href="/contact"
      >
        <HiOutlineMail className="menuIcon" /> Contact
      </a>
      <a
        id="portfolio"
        className={screen == "/portfolio" ? "menu-item_active" : "menu-item"}
        href="/portfolio"
      >
        <BsBriefcase className="menuIcon" /> Portfolio
      </a>
      <a id="cv" className="menu-item" href={cv} target="_blank">
        <GrDocumentPdf className="menuIcon" /> CV
      </a>
    </Menu>

  );
};

export default Navigation;
