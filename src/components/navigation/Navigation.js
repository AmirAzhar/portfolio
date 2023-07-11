// Styles
import "./navigation.css";

// Icons
import { IoIosContact } from "react-icons/io";
import { VscFilePdf } from "react-icons/vsc";
import { BsBriefcase } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BiNews } from "react-icons/bi";

// Packages
import { elastic as Menu } from "react-burger-menu";

// Hooks
import useGetFirebaseItem from "../../hooks/useGetFirebaseItem";

const Navigation = ({ screen }) => {
  const [urlList] = useGetFirebaseItem(["portfolio/cv.pdf"]);
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
        href={urlList[0]}
        target="_blank"
        rel="noreferrer"
      >
        <VscFilePdf className="menuIcon" /> CV
      </a>
    </Menu>
  );
};

export default Navigation;
