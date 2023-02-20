import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Friday, 11:00 AM",
    description: "Cloudy",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    temperature: 18,
    wind: 14,
    humidity: 50,
    feelsLike: 16,
  };

  return (
    <div className="Weather">
      <div className="border">
        <div className="row header">
          <div className="col-4">
            <h1>{weatherData.city}</h1>
            <p>{weatherData.date}</p>
            <p>{weatherData.description}</p>
          </div>
          <div className="col-2">
            <button>Location</button>
          </div>
          <div className="col-6">
            <form>
              <input type="search" placeholder="Search city" />
              <input type="submit" value="🔍" />
            </form>
          </div>
        </div>

        <div className="row weather-data">
          <div className="col-7 currently">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <span>
              {weatherData.temperature}
              <small>°C</small>
            </span>
          </div>

          <div className="col-5">
            <ul>
              <li>
                Wind: <span>{weatherData.wind}</span> m/s
              </li>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Feels like: <span>{weatherData.feelsLike}</span> °C
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
