import React, { useEffect, useState } from "react";
import Weather from "./Weather.js";
import "./App.css";

const App = ()=>{
  const[city, setCity] = useState("Mumbai");
  const[cityname, setCityname] = useState("Mumbai");

  const[weather, setWeather] = useState({
    country : "",
    city:"",
    day : [],
    condition : [],
    temperature : [],
    min_temp : [],
    max_temp : [],
    icon : [],
  });

  useEffect(()=>{
    let getCountry = ""
    let fiveDaysEach = []
    let getCity = ""
    let cloneDay = []
    let cloneCondition = []
    let cloneTemperature = []
    let cloneIcon = []
    let clonemin_temp = []
    let clonemax_temp = []
    let i;

    async function fetchData(){
      let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a08cd5e27159414c03cba7c6cae82175`);
      let res = await data.json();
      // console.log(res);
      for(i=2; i<res.list.length; i=i+8){
        fiveDaysEach.push(res.list[i]);
      }
      // console.log("fiveDaysEach", fiveDaysEach);

      getCity = res.city.name;
      // console.log(getCity);

      cloneDay = fiveDaysEach.map((elem)=>elem.dt_txt);
      // console.log("cloneDay", cloneDay);

      cloneCondition = fiveDaysEach.map((elem)=>elem.weather[0].main);
      // console.log(cloneCondition);

      cloneTemperature = fiveDaysEach.map((elem)=>elem.main.temp);
      // console.log("cloneTemp", cloneTemperature);

      cloneIcon = fiveDaysEach.map((elem)=>elem.weather[0].icon);
      // console.log("cloneIcon", cloneIcon);

      getCountry = res.city.country;
      // console.log(country);

      clonemax_temp = fiveDaysEach.map((elem)=>elem.main.temp_max);
      // console.log(clonemax_temp);

      clonemin_temp = fiveDaysEach.map((elem)=>elem.main.temp_min);
      // console.log(clonemin_temp); 

      setWeather({
        country : getCountry,
        city : getCity,
        day : cloneDay,
        condition : cloneCondition,
        temperature : cloneTemperature,
        icon : cloneIcon,
        min_temp : clonemin_temp,
        max_temp : clonemax_temp,
      });

    }


    fetchData();
  },[cityname])

  // console.log("weather",weather);

  const funcall = (e)=>{
    setCity(e.target.value);
  }
  
  const funcall2 = ()=>{
      if(city === "")
        return;
      // console.log(city);
      setCityname(city);
  }

  return(
    <div className="weather-container">
      <div className="inputField">
        <input required placeholder="Enter City Name" onChange={funcall} defaultValue={cityname}/>
        <button onClick = {funcall2}>Click Me</button>
      </div>
      <h1 className="heading">{cityname}, {weather.country}</h1>
      <div className="main_container">
        <Weather weather = {weather} dayIndex = {0}/>
        <Weather weather = {weather} dayIndex = {1}/>
        <Weather weather = {weather} dayIndex = {2}/>
        <Weather weather = {weather} dayIndex = {3}/>
        <Weather weather = {weather} dayIndex = {4}/>
      </div>
    </div>
  );
}
export default App;