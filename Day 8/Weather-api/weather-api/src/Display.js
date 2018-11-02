import React from 'react';

function Display(props) {
  const {name , main , weather} = props.data;
   return (
   <div className="display">
   <h1 className="state">City : {name}</h1>
   <p className="temp">temprature: {`${parseInt(main.temp - 273.15)}`} &deg;C</p>
   <p className="min">min: {`${parseInt(main.temp_min - 273.15)}`} &deg;C</p>
   <p className="max">max: {`${parseInt(main.temp_max - 273.15)}`} &deg;C</p>
   <p className="Description">Description: {weather[0].description}</p>
   </div>
  )
}
export default Display;
