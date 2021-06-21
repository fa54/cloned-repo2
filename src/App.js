import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </Router>
  );
}

export default App;
