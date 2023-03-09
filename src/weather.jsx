import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "./config";

// function Weather() {
//   const getWeather = () => {
//     axios
//       .get("http://api.weatherapi.com/v1/current.json?key=2a01ed2be440484787005747232402&q=Asheville&aqi=no")
//       .then((response) => console.log(response.data))
//       .catch((error) => console.log(error));
//   };
//   getWeather();
//   return (
//     <div>
//       <b>Weather</b>
//       {/* <p>{current.temp_f}</p> */}
//       <img id="weather-img" src="//cdn.weatherapi.com/weather/64x64/day/113.png" class="img-thumbnail" alt="..."></img>
//     </div>
//   );
// }

function Weather() {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${config.api_key}&q=Asheville&aqi=no`;
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setTemp(json.current.temp_f);
        setIcon(json.current.condition.icon);
      });
    };
    fetchData();
  }, []);

  return (
    // <div className="Weather">
    //   <b>Temperature:</b> {temp}°
    //   <p>
    //     <img id="weather-img" src={icon} class="rounded float-end" alt="..." />
    //   </p>
    // </div>

    <div id="weather-container" class="card border-dark mb-3 float-end">
      <div id="weather-temp" class="card-header">
        <span>
          {" "}
          <div class="float-start">
            <b>Temperature:</b> {temp}°
          </div>{" "}
          <img id="weather-img" src={icon} class="rounded float-end" alt="..." />
        </span>
      </div>
      {/* <div class="card-body text-dark">
        <p class="card-text">
          {" "}
         
        </p>
      </div> */}
    </div>
  );
}

export default Weather;
