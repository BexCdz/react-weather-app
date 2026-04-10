import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios"
import "./Weather.css";

export default function Weather (props){

     const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response){
      
 
   
      
        
     setWeatherData({
        ready: true, 
        temperature:Math.round(response.data.temperature.current),
        humidity: response.data.temperature.humidity,
        date: new Date(response.data.time * 1000),
        description:response.data.condition.description, 
        iconUrl:response.data.condition.icon_url,
        wind: response.data.wind.speed,
        city: response.data.city
     });

       
   
  
    }

    if (weatherData.ready){
    
   return (
    <div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
        <input type="search"placeholder="Enter a city.." className="form-control" autoFocus="on"/></div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
    </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li><FormattedDate date={weatherData.date}/></li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
     <div className="d-flex align-items-center">
  <img 
    src={weatherData.iconUrl} alt={weatherData.description}
  />
  <div className="temperature-container">
    <span className="temperature">{weatherData.temperature}</span>
    <span className="unit">°C</span>
  </div>
</div>
    </div>
<div className="col-6">
    <ul>
       
        <li>
            Humidity: {weatherData.humidity}km/h
        </li>
        <li>
            Wind: {weatherData.wind}km/h
        </li>
    </ul>
</div>
    </div>
    </div>

   ) ;
}
else {
const apiKey = "6eo2f8064f04d58b91065a4e4bb3c0t3";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."

}

}