
import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
   <Weather defaultCity="Barcelona"/>

     <footer>This project was coded by Rebecca Pearce and is {""}  
     <a href= "https://github.com/BexCdz/react-weather-app" target="_blank" rel="noopener noreferrer" >open-sourced on GitHub </a>and hosted on <a href="https://my-react-app-weather.netlify.app/" target="_blank" rel="noopener noreferrer"> Netlify </a>
     </footer>
     </div>
    </div>
  );
}


