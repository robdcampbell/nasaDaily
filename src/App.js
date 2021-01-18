import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact component={Home} path="/"></Route>
        <Route exact component={NasaPhoto} path="/nasaphoto"></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
