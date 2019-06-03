import {
    config
} from "./constants/constants.js";

export class Weather {
    constructor(city='guntur') {
        this.city = city;
    }

    // Fetch Weather from api.
    async getWeather() {
        const response = await fetch(`${config.baseUrl}${this.city}&appid=${config.apiKey}&units=metric`);
        // const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=ddc2c672ba85e86fb279c29bb685edd1`);
        return await response.json();
    }

    async getHourlyForecast() {
        const response = await fetch(`${config.forecastUrl}${this.city}&appid=${config.apiKey}&units=metric`);
        return await response.json();
    }
    
    // change weather location
    changeLocation(city) {
        this.city = city;
    }
}