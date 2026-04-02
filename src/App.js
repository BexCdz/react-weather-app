
import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
   
   <Weather defaultCity="Barcelona"/>
     <footer>This project was coded by Becky Pearce and is {""}  
     <a href= "https://github.com/BexCdz/react-weather-app" >open-sourced on GitHub </a>
     </footer>
     </div>
    </div>
  );
}


