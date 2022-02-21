import React from "react";

const Weather = (props)=>{
    console.log("props", props);
    const weather = props.weather;
    const dayIndex = props.dayIndex;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return(
        <div className="weather-box">

        {/* 1. Days Printing */}
            <div className="weather-day">
                {
                    weather.day.map((value,index) => {
                        if(index === dayIndex){
                            const dayName = days[new Date(value).getDay()]
                            return(
                                <div key={value}>
                                    {dayName}
                                </div>
                            )
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>


        {/* {2. Condition Printing} */}
            <div className="condition">
                {
                    weather.condition.map((value,index)=>{
                        if(index === dayIndex){
                            return(
                                <div key={value}>
                                   Mood: {value}
                                </div>
                            )
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>
            

        {/* 3. Temperature Printing */}
            <div className="temperature">
                {
                    weather.temperature.map((value,index)=>{
                        if(index===dayIndex){
                            return(
                                <div key={value}>
                                    Temp: {value}°C
                                </div>
                            )
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>

        {/* 4. Icon Printing */}
            <div className="icon">
                {
                    weather.icon.map((value,index)=>{
                        if(index === dayIndex){
                            return(
                                <img key={index} src={"http://openweathermap.org/img/wn/"+value+"@2x.png"} alt="weather icon"/>
                            )
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>

        <div className="min_max_temp">
        {
                    weather.max_temp.map((value,index)=>{
                        if(index===dayIndex){
                            return(
                                <div className="max_temp" key={value}>
                                    H: {value}°C
                                </div>
                            )
                        }
                        else{
                            return null
                        }
                    })
        }
        {
                    weather.min_temp.map((value,index)=>{
                        if(index===dayIndex){
                            return(
                                <div className="min_temp" key={value}>
                                    L: {value}°C
                                </div>
                            )
                        }
                        else{
                            return null
                        }
                    })
                }
        </div>


        </div>
    )
}

export default Weather;