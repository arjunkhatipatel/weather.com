import { useContext } from "react";
import "./Card.css";
import Context from "../Context/Context";

export default function CurrentWeather({ style }) {
  const { weatherData } = useContext(Context);

  return (
    <div className="container card my-3" style={style}>
      <h2 className="heading">{weatherData.location.name}</h2>
      <p>
        {weatherData.location.region}, {weatherData.location.country}
      </p>
      <div className="info">
        <div className="temp">
          <span className="temp-value">{weatherData.current.temp_c}° C</span>
        </div>
        <div className="condition">
          <span className="condition-text">
            {weatherData.current.condition.text}
          </span>
          <img
            className="condition-icon"
            src={weatherData.current.condition.icon}
            alt="Weather Icon"
          />
        </div>
      </div>
      <div className="details">
        <div className="d_item">
          <span>Max Temp: </span>
          {weatherData.forecast.forecastday[0].day.maxtemp_c}° C
        </div>
        <div className="d_item">
          <span>Min Temp: </span>
          {weatherData.forecast.forecastday[0].day.mintemp_c}° C
        </div>
        <div className="d_item">
          <span>Rain: </span>
          {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}
        </div>
        <div className="d_item">
          <span>Feels Like: </span>
          {weatherData.current.feelslike_c}° C
        </div>
        <div className="d_item">
          <span>Wind: </span>
          {weatherData.current.wind_dir} {weatherData.current.wind_kph} km/p
        </div>
        <div className="d_item">
          <span>Humidity: </span>
          {weatherData.current.humidity}%
        </div>

        <div className="d_item">
          <span>Visibility: </span>
          {weatherData.current.vis_km} km
        </div>
        <div className="d_item">
          <span>UV Index: </span>
          {weatherData.current.uv}
        </div>
        <div className="d_item">
          <span>Cloud Cover: </span>
          {weatherData.current.cloud}%
        </div>
        <div className="d_item">
          <span>Wind Gusts: </span>
          {weatherData.current.gust_mph}%
        </div>
      </div>
      <div className="details">
        <div className="d_item">
          <span>Sunrise: </span>
          {weatherData.forecast.forecastday[0].astro.sunrise}
        </div>
        <div className="d_item">
          <span>Sunset: </span>
          {weatherData.forecast.forecastday[0].astro.sunset}
        </div>
        <div className="d_item">
          <span>Moonrise: </span>
          {weatherData.forecast.forecastday[0].astro.moonrise}
        </div>
        <div className="d_item">
          <span>Moonset: </span>
          {weatherData.forecast.forecastday[0].astro.moonset}
        </div>
      </div>
      <div class="text-body-secondary">
        Last Updated: {weatherData.current.last_updated}
      </div>
    </div>
  );
}
