import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />

        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
