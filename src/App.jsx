import React from "react";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="list">
          <List />
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </>
  );
};

export default App;