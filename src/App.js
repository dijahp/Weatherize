import './App.css';
import WeatherSearch from './Header/WeatherSearch'
import Header from './Header/Header'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import states from 'us-state-converter';
import MainWeather from './Weather/MainWeather';
import './assets/css/Style.css';
import './assets/css/Weather.css';
import BottomWeather from './Weather/BottomWeather';

const App = () => {
  const [location, setLocation] = useState("")
  const [city, setCity] = useState();
  const [stateName, setStateName] = useState()
  const [errorMsg, setErrormsg] = useState()
  const [currentWeather, setCurrentWeather] = useState()
  const [weatherCode, setWeatherCode] = useState()
  
  useEffect(() => {
    if(city && stateName){

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${stateName}&appid=${process.env.REACT_APP_API_TOKEN}&units=imperial`).then((res) => {
        console.log(res.data)
        setCurrentWeather(res.data)
        setWeatherCode(res.data.weather[0].id === 800 ? 800 : res.data.weather[0].id.toString().charAt(0) )
      })
    }
  },[city, stateName])
  return (
    <div className={`App weather-${weatherCode}`}>
     <WeatherSearch
      location={location}
      setLocation={setLocation}
      city={city}
      setCity={setCity}
      stateName={stateName}
      setStateName={setStateName}
      errorMsg={errorMsg}
      setErrormsg={setErrormsg}
     />
     {currentWeather ? 
      <div className={`weatherContainer weatherGradient-${weatherCode}`}>
        <Header 
        city={city}
        stateName={stateName}
      />
      <MainWeather
      currentWeather={currentWeather}
      />
      
      <BottomWeather
      currentWeather={currentWeather}
      />
      </div> : null }
    </div>
  );
}

export default App;
