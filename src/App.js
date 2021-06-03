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
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";

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
            <nav>
              <Navigation />
            </nav>
            <Switch>
              <Route path="/portfolio">
                <Portfolio className="contentWrap" />
              </Route>
              <Route path="/contact">
                <Contact className="contentWrap" />
              </Route>
              <Route path="/">
                <About className="contentWrap" />
              </Route>
            </Switch>
          </div>
        </Router>
      </Scrollbar>
    </div>
  );
}

export default App;
