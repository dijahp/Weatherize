import React from 'react'
import WeatherBlock from './WeatherBlock';

const BottomWeather = ({currentWeather}) => {
const feelsLike = Math.ceil(currentWeather.main.feels_like) + "°F";
const windSpeed = Math.ceil(currentWeather.wind.speed) + " mph";
const windDegree = currentWeather.wind.deg;
const humidity= currentWeather.main.humidity + "%";
const pressure = currentWeather.main.pressure;
const visibility = currentWeather.visibility

    return(
        <div className="BottomWeather">
            <WeatherBlock 
            icon="fas fa-thermometer-half fa-lg"
            title="Feels like"
            data={feelsLike}
            />
            <WeatherBlock 
            icon="fas fa-wind fa-lg"
            title="Wind Speed"
            data={windSpeed}
            />
            <WeatherBlock 
            icon="fas fa-compass fa-lg"
            title="Wind Deg"
            data={windDegree}
            />
            <WeatherBlock 
            icon="fas fa-tint fa-lg"
            title="Humidity"
            data={humidity}
            />
            <WeatherBlock 
            icon="fas fa-tachometer-alt fa-lg"
            title="Pressure"
            data={pressure}
            />
            <WeatherBlock 
            icon="far fa-eye fa-lg"
            title="Visibility"
            data={visibility}
            />
        </div>
    )
}

export default BottomWeather;
