class Weather {
    constructor(city) {
        this.apiKey = 'ddc2c672ba85e86fb279c29bb685edd1';
        this.city = city;
    }
    // Fetch Weather from api.
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        // const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=ddc2c672ba85e86fb279c29bb685edd1`);
        const responseData = await response.json();

        return responseData;
    }

    // change weather location
    changeLocation(city) {
        this.city = city;
    }
}