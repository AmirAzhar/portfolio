/*
 * FILE DESCRIPTION
 * Root app component
 *
 */

// Import utilities
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Scrollbar } from "react-scrollbars-custom";

// Import components
import Navigation from "./components/Navigation";

// Import pages
import Contact from "./screens/Contact";
import About from "./screens/About";
import Portfolio from "./screens/Portfolio";

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
              <Route path="/" component={About} />
            </Switch>
          </div>
        </Router>
      </Scrollbar>
    </div>
  );
}

export default App;
