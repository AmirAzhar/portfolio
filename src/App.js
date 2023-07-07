/*
 * FILE DESCRIPTION
 * Root app component
 *
 */

// Import utilities
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Scrollbar } from "react-scrollbars-custom";

// Import components
import Navigation from "./components/navigation";
import Footer from "./components/footer";

// Import screens
import About from "./screens/about";
import Blog from "./screens/blog";
import Contact from "./screens/contact";
import Portfolio from "./screens/portfolio";

function App() {
  return (
    <div>
      <Scrollbar
        noScrollX={"True"}
        style={{
          width: "100%",
          height: "100%",
          position: "inherit",
        }}
      >
        <Router>
          <div className="pageContainer">
            <Navigation />
            <Switch>
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/home" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/" component={About} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Scrollbar>
    </div>
  );
}

export default App;
