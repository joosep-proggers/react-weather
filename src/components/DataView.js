import React from "react";

const DataView = (props) => {
    return (
        <div id="weather">
		    <div id="description">{props.data.description}</div>
		    <h1 id="temp">Temperatuur praegu: {props.data.temp}</h1>
		    <div id="feels-like">Feels like: {props.data.feelsLike}</div>
		    <h3 id="temp-min">Päeva madalaim: {props.data.tempMin}</h3>
		    <h3 id="temp-max">Päeva kõrgeim: {props.data.tempMax}</h3>
		    <div id="wind">Tuule kiirus: {props.data.wind}</div>
            <h1 id="city">{props.city}</h1>
	    </div>
    )
}

export default DataView;