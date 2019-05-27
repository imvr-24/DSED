export class UI {
    constructor() {
        this.location = document.getElementById('weather__location');
        this.desc = document.getElementById('weather__desc');
        this.info = document.getElementById('weather__info');
        this.icon = document.getElementById('weather__icon');
        this.humidity = document.getElementById('weather__humidity');
        this.pressure = document.getElementById('weather__pressure');
        this.weatherCoordinates = document.getElementById('weather__coordinates');
        this.wind = document.getElementById('weather__wind');
    }

    initUI(weather) {
        console.log(weather);

        if (weather.cod !== '404') {
            this.location.textContent = weather.name;
            this.desc.textContent = weather.weather[0].main;
            this.info.textContent = `${weather.weather[0].description}`;
            this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
            this.icon.setAttribute('src', `/src/assets/${weather.weather[0].icon}.png`);
            this.pressure.textContent = `Atmospheric pressure : ${weather.main.pressure}`;
            this.weatherCoordinates.textContent = `latitude and longitude of ${this.location.innerHTML} are : ${weather.coord.lon} ${weather.coord.lat}`;
            this.wind.textContent = `Wind Speed :${weather.wind.speed}`;
        }


    }

}