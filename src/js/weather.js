import { config } from "./constants/constants.js";

export class Weather {
    constructor(city) {
        this.API_KEY = config.apiKey;
        this.BASE_URL = config.baseUrl;
        this.city = city;
    }

    // Fetch Weather from api.
    async getWeather() {
        const response = await fetch(`${this.BASE_URL}${this.city}&appid=${this.API_KEY}&units=metric`);
        // const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=ddc2c672ba85e86fb279c29bb685edd1`);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    // change weather location
    changeLocation(city) {
        this.city = city;
    }
}