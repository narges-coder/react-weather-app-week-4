import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather() {
  function handelResponse(response) {
    alert(`the weather in London is ${response.data.main.temp}`);
  }
  const apiKey = "9b0854926710fd23f294b24a3c37bae5";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handelResponse);
  return (
    <div className="Loader">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
