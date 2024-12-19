import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
import { colors } from "@mui/material";
import "./WeatherApp.css"
export default function WeatherApp(){
  let [weatherInfo, setweatherInfo] = useState({
    city: "Pune",
    feelsLike: 27.43,
    humidity: 17,
    temp: 29.04,
    tempMax: 29.04,
    tempMin: 29.04,
    weather: "overcast clouds"}
  );

   let updateInfo = (result) =>{
    setweatherInfo(result);
   }
   
    return (
        <div style={{textAlign: "center"}}>
          <h2 className="heading">Search for the Weather</h2>
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    )
};