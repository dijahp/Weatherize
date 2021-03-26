import React from 'react'

const MainWeather = ({currentWeather}) => {
 const icon = currentWeather.weather[0].icon;
 const weatherTitle = currentWeather.weather[0].main;
 let weatherDesc = currentWeather.weather[0].description;
 weatherDesc = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1)
 const currentTemp = currentWeather.main.temp;
 const tempHigh = currentWeather.main.temp_max;
 const tempLow = currentWeather.main.temp_min;  
 console.log(icon)

    return (
        <div className="MainWeather">
            <div className="weathername">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
                <h1 className="weatherTitle">
                   {weatherTitle}
                </h1>
                <h4>{weatherDesc}</h4>
            </div>
            <div className="weatherdegrees">
                <div className="currentTemp">
                    {currentTemp}
                </div>
                <div className="currentHighandLow">
                    <div className="currentHigh">
                        {tempHigh}
                    </div>
                    <div className="currentLow">
                        {tempLow}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainWeather;