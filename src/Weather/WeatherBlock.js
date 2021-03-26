import React from 'react'

const WeatherBlock = ({title, data, icon}) => {

    return(
        <div className="WeatherBlock">
        <i className={icon}></i>
            <h3>{title}</h3>
            <h4>{data}</h4>
        </div>
    )
}

export default WeatherBlock;