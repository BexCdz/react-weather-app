import React, { useState } from "react";

import "./WeatherForecast.css"
import axios from "axios"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState (null);

    function handleResponse (response){
        setForecast(response.data);
        setLoaded(true);
        console.log(response.data)
    }
   

if(loaded){
    console.log(forecast);

     return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
            <WeatherForecastDay data={forecast.daily[0]}/>
            </div>
        </div>
    </div>)   
}

else {

    let apiKey="6eo2f8064f04d58b91065a4e4bb3c0t3";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return null;
       


}

}