import React, { useState } from 'react'
import '../assets/css/Style.css'

const Header = ({city, stateName}) => {
    let cityName = "";
    let date = new Date() + "";
    let todayName = date.split(" ")[0];
    let todayMonth = date.split(" ")[1];
    let todayDay = date.split(" ")[2];

    if(city){
        cityName = city.charAt(0).toUpperCase() + city.slice(1);
    }

    return(

        <div className="Header">
           <h1>{city ? cityName : null}</h1>
            <h4>{todayName}, {todayMonth} {todayDay}</h4>
        </div>
    )
}

export default Header;