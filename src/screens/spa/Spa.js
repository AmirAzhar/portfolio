// Styles
import "./spa.css";

// Components
import About from "../about";
import Portfolio from "../portfolio";
import Blog from "../blog";
import Contact from "../contact";

function Spa() {
  return (
    <div className="spa">
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default Spa;
