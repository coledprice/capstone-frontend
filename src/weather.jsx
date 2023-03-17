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
    <div id="weather-container" class="container float-sm-end">
      <img id="weather-image" src={icon} class="image float-end" alt="..." />
      <br></br>
      <div class="text float-end">
        <b>Temperature:</b> {temp}°
      </div>
    </div>
  );
}

export default Weather;
