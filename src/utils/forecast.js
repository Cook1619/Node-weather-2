const request = require('request');
require("dotenv").config();

module.exports  = {
    foreCast: (lat, long, callback) => {
        const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&&query=${lat},${long}&units=f`;
        request({ url, json: true }, (err, { body }) => {
            if (err) {
                callback('Unable to connect to weather service')
            } else if (body.error){
                callback('Unable to find location')
            } else {
                callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} out.`, { img: `${body.current.weather_icons[0]}`})
            }
        })
    }
    
    ,
    newYorkForecast: (callback) => {
        const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&&query="New York"&units=f`;
        request({ url, json: true }, (err, { body }) => {
            if (err) {
                callback('Unable to connect to weather service')
            } else if (body.error){
                callback('Unable to find location')
            } else {
                callback(undefined, { 
                    city: body.location.name,
                    state: body.location.region,
                    temperature: body.current.temperature, 
                    humidity: body.current.humidity,
                    wind_dir: body.current.wind_dir,
                    wind_speed: body.current.wind_speed,
                    pressure: body.current.pressure,
                    feelslike: body.current.feelslike,
                    uv_index: body.current.uv_index,
                    weather_icon: body.current.weather_icons[0],
                    precip: body.current.precip
                })
            }
        })
    }
    ,
    portlandForecast: (callback) => {
        const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&&query=portland&units=f`;
        request({ url, json: true }, (err, { body }) => {
            if (err) {
                callback('Unable to connect to weather service')
            } else if (body.error){
                callback('Unable to find location')
            } else {
                callback(undefined, { 
                    city: body.location.name,
                    state: body.location.region,
                    temperature: body.current.temperature, 
                    humidity: body.current.humidity,
                    wind_dir: body.current.wind_dir,
                    wind_speed: body.current.wind_speed,
                    pressure: body.current.pressure,
                    feelslike: body.current.feelslike,
                    uv_index: body.current.uv_index,
                    weather_icon: body.current.weather_icons[0],
                    precip: body.current.precip
                })
            }
        })
    }
    ,
    minneapolisForecast: (callback) => {
        const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&&query=minneapolis&units=f`;
        request({ url, json: true }, (err, { body }) => {
            if (err) {
                callback('Unable to connect to weather service')
            } else if (body.error){
                callback('Unable to find location')
            } else {
                callback(undefined, { 
                    city: body.location.name,
                    state: body.location.region,
                    temperature: body.current.temperature, 
                    humidity: body.current.humidity,
                    wind_dir: body.current.wind_dir,
                    wind_speed: body.current.wind_speed,
                    pressure: body.current.pressure,
                    feelslike: body.current.feelslike,
                    uv_index: body.current.uv_index,
                    weather_icon: body.current.weather_icons[0],
                    precip: body.current.precip
                })
            }
        })
    }
}

