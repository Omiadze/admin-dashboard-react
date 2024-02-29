import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>about</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>our first routing</h1>
    </div>
  );
}

export default App;
