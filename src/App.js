import React from "react";
import logo from "./logo.svg";
import "./App.css";
import babyNamesData from "./babyNamesData.json";

function App() {
  return (
    <div className="App">
      {babyNamesData.map((babyName) => (
        <li key={babyName.id}>
          {babyName.name} - {babyName.sex === "f" ? "female" : "male"}
        </li>
      ))}
    </div>
  );
}

export default App;
