import React from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import BabyName from "./BabyName";

const App = () => {
  return (
    <div className="App">
      <h1 className="Title">Baby Names</h1>
      <ul className="List">
        {babyNamesData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((babyName, id) => {
            return <BabyName key={id} value={babyName} />;
          })}
      </ul>
    </div>
  );
};

export default App;
