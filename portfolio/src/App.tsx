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
        <Route exact path="/Portfolio/home" component={Home} />
        <Route exact path="/Portfolio/projects" component={Projects} />
        <Route exact path="/Portfolio/contact" component={Contact} />

        <Redirect to="/Portfolio/home" />
      </Switch>
    </div>
  );
}

export default App;
