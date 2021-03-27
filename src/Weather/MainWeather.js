import React from 'react'

const MainWeather = ({currentWeather}) => {
 const icon = currentWeather.weather[0].icon;
 const weatherTitle = currentWeather.weather[0].main;
 
 const currentTemp = Math.ceil(currentWeather.main.temp);
 const tempHigh = Math.ceil(currentWeather.main.temp_max);
 const tempLow = Math.ceil(currentWeather.main.temp_min);  
 console.log(icon)

    return (
        <div className="MainWeather">
            <div className="weathername">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
                <h1 className="weatherTitle">
                   {weatherTitle}
                </h1>
            </div>
            <div className="weatherdegrees">
                <div className="currentTemp">
                    {`${currentTemp}°`}
                </div>
                <div className="currentHighandLow">
                    <div className="currentHigh">
                        {`${tempHigh}° F`}
                    </div>
                    <div className="currentLow">
                        {`${tempLow}° F`}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainWeather;