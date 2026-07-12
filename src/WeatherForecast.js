import React, { useState, useEffect } from "react";

import "./WeatherForecast.css"
import axios from "axios"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState (null);

    useEffect(() => {
        setLoaded(false);
   
    }, [props.coordinates])


    function handleResponse (response){
        setForecast(response.data);
        setLoaded(true);
     
    }
   

if(loaded){

     return (
    <div className="WeatherForecast">
        <div className="row">
            {forecast.daily.map(function(dailyForecast, index) {

            if (index < 5 ){
                 return (
            <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast}/>
            </div>
            )
            } else {
                return null;
            }
            })}
         
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