import { useContext } from "react";
import "./Forecast.css";
import Context from "../Context/Context";

export default function Forecast({ style }) {
  const { weatherData } = useContext(Context);
  const forecastArray = weatherData.forecast.forecastday;
  // console.log(forecastArray);
  return (
    <div className="container card" style={style}>
      <h2 className="heading">Forecast</h2>
      <div className="list">
        {forecastArray.map((day, index) => (
          <div className="item" key={index}>
            <span className="day">{day.date}</span>
            <span className="condition">
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
            </span>
            <span className="temp_day">{day.day.condition.text}</span>
            <span className="temp_day">
              {day.day.mintemp_c} / {day.day.maxtemp_c}° C
            </span>
            <span className="temp_day">Wind: {day.day.maxwind_kph} km/h</span>
            <span className="temp_day">
              Rain: {day.day.daily_chance_of_rain}
            </span>
            <span className="temp_day">Humidity: {day.day.avghumidity}</span>
            <span className="temp_day">UV: {day.day.uv}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
