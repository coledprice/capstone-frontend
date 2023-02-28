import React from "react";
import axios from "axios";

function Weather() {
  const getWeather = () => {
    axios
      .get("http://api.weatherapi.com/v1/current.json?key=2a01ed2be440484787005747232402&q=Asheville&aqi=no")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  getWeather();
  return (
    <div>
      weather
      <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" class="img-thumbnail" alt="..."></img>
    </div>
  );
}

export default Weather;
