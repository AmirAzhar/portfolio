// Styles
import "./spa.css";

// Components
import About from "../about";
import Portfolio from "../portfolio";
import Blog from "../blog";
import Contact from "../contact";

// Icons
import { RiArrowGoBackFill } from "react-icons/ri";

function Spa() {
  return (
    <div className="spa">
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <a className="back" href="/">
        <RiArrowGoBackFill size={"1.5rem"} />
      </a>
    </div>
  );
}

export default Spa;
