import React from "react";
import "./App.css";

import backgroundVideo from "./video.mp4";

export default function Weather() {
  let weatherData = {
    city: "Copenhagen",
    temperature: 18,
    date: "Wednesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    feelsLike: 17,
    humidity: 60,
    wind: 10,
  };

  return (
    <div className="Weather">
      <video
        autoPlay
        loop
        muted
        id="video"
        src={backgroundVideo}
        type="video/mp4"
      ></video>
      <div className="container-border">
        <h1 className="title m-5">Weather Forecast</h1>

        <form>
          <div className="row m-5">
            <div className="col-6">
              <input
                type="text"
                className="btn btn-outline-light btn-lg w-100 shadow-sm search-input"
                placeholder="What's the weather in..."
                autocomplete="off"
                autofocus
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn border-0 btn-light  btn-lg shadow-sm search-button"
                value="Search"
              />
            </div>
            <div className="col-2">
              <button className="btn border-0 btn-light btn-sm shadow-sm current-position">
                Current Location
              </button>
            </div>
          </div>
        </form>

        <div className="overview m-5">
          <h2 className="city"> {weatherData.city}</h2>

          <ul>
            <li> {weatherData.date} </li>
            <li> {weatherData.description} </li>
          </ul>
          <div className="row">
            <div className="col-2">
              <div className="clear-fix  weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                  width="80"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="float-right">
                <strong>{weatherData.temperature}</strong>

                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
            </div>

            <div className="col-6">
              <div className="weather-condition">
                <button className="wrap-up">
                  <div className="inner-text">
                    Feels like: <span> {weatherData.feelsLike} </span>°
                  </div>
                </button>
                <button className="wrap-up">
                  <div className="inner-text">
                    {" "}
                    Humidity: <span> {weatherData.humidity}</span>%{" "}
                  </div>
                </button>
                <button className="wrap-up">
                  <div className="inner-text">
                    Wind: <span> {weatherData.wind}</span>m/h
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <a href="#">Open-source code </a> by <a href="#">Larissa Adina</a>{" "}
      </footer>
    </div>
  );
}
