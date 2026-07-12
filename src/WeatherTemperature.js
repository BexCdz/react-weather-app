import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState(`celsius`);
    function convertToFarenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function convertToCelsius(event){
       event.preventDefault();
        setUnit("celsius");

    }
    if (unit === `celsius`) {
         return (
             <div className="WeatherTemperature">
             <span className="temperature">{props.celsius}</span>
             <span className="unit">°C <a href="/" onClick={convertToFarenheit} > | °F </a></span>
             
            
            </div>
    )

    }else {
        let fahrenheit = (props.celsius * 9/5) + 32
         return  (
         <div className="WeatherTemperature">
             <span className="temperature">{Math.round(fahrenheit)}</span>
             <span className="unit"><a href="/" onClick={convertToCelsius} >°C  | {" "}</a>  < span className="fahrenheit"> °F </span></span>
             
            </div>)
    }
   
}