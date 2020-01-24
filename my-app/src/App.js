import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={AboutPage} />
          <Route render={() => <h2>Not found</h2>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
