import React from 'react'
import WeatherBlock from './WeatherBlock';

const BottomWeather = ({currentWeather}) => {
const feelsLike = currentWeather.main.feels_like;
const windSpeed = currentWeather.wind.speed;
const windDegree = currentWeather.wind.deg;
const humidity= currentWeather.main.humidity;
const pressure = currentWeather.main.pressure;
const visibility = currentWeather.visibility

    return(
        <div className="BottomWeather">
            <WeatherBlock 
            icon="fas fa-thermometer-half fa-2x"
            title="Feels like"
            data={feelsLike}
            />
            <WeatherBlock 
            icon="fas fa-wind fa-2x"
            title="Wind Speed"
            data={windSpeed}
            />
            <WeatherBlock 
            icon="fas fa-compass fa-2x"
            title="Wind Deg"
            data={windDegree}
            />
            <WeatherBlock 
            icon="fas fa-tint fa-2x"
            title="Humidity"
            data={humidity}
            />
            <WeatherBlock 
            icon="fas fa-tachometer-alt fa-2x"
            title="Pressure"
            data={pressure}
            />
            <WeatherBlock 
            icon="far fa-eye fa-2x"
            title="Visibility"
            data={visibility}
            />
        </div>
    )
}

export default BottomWeather;
