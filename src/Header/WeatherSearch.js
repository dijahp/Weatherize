import React, { useState } from 'react'
import states from 'us-state-converter';

const WeatherSearch = ({location, setLocation, city, setCity, stateName, setStateName, errorMsg, setErrormsg, enableSlide}) => {


const handleLocationChange = (e) => {
setLocation(e.target.value) 
}

const submitWeatherSearch = (e) => {
    e.preventDefault()
   if(location.length === 0 ){
    setErrormsg("Please enter the city and state")
   } else if(location.indexOf(',') <= -1){
    setErrormsg("Your entry is missing a comma between City and State")
   } else if(location.length != 0){
      let name = location.split(',')[1].split(" ").join("");
      name = states(name).name;
      console.log(name)
      setErrormsg("")  
      setCity(location.split(',')[0])
      setStateName(name)
      setLocation("")
      
   }
}
    return(
        <div id="WeatherSearch" className={enableSlide ? "slide-top" : null}>
            {enableSlide ? null :  <div className="container-round"></div> }
            <form onSubmit={submitWeatherSearch}>
                <div className="WeatherSearch-container">
                <label className="searchLocation">
            Search by location:
            </label>
            <div className="searchBarBtn">
            <input 
            className="searchInput"
            type="text" 
            name="location"
            placeholder="City, State"
            value={location}
            onChange={handleLocationChange}/>  
                        <button>Search</button>
                        </div>    
                        </div> 
            </form>
            <h3>{errorMsg}</h3>
        </div>
    )
}

export default WeatherSearch;