
// import icons from '../assets';
// const img = require.context("../assets/", /\.(png|svg|jpg|gif)$/);

class UI {
    constructor() {
        this.location = document.getElementById('weather__location');
        this.desc = document.getElementById('weather__desc');
        this.info = document.getElementById('weather__info');
        this.icon = document.getElementById('weather__icon');
        this.humidity = document.getElementById('weather__humidity');
        this.pressure = document.getElementById('weather__pressure');
        this.weatherCoordinates = document.getElementById('weather__coordinates');
        this.wind = document.getElementById('weather__wind');

        this.forecast__location = document.querySelector('#forecast__location');
        this.temperature_min = document.querySelector('#temp_min');
        this.temperature__max = document.querySelector('#temp_max');
        this.rainVolume__3h = document.querySelector('#rain__volume__3h');
        this.forecast__date__time = document.querySelector('#date_time_utc');
        this.forecast__desc = document.querySelector('#forecast__desc');
        this.forecast__info = document.querySelector('#forecast__info');
        this.forecast_icon = document.getElementById('forecast__icon');
    }

    initUI(weather) {
        console.log(weather);
        const ui = new UI();
        const index = ui.randomNumber(0, 0);
        console.log(index);
        if (weather.cod !== '404') {
            this.location.textContent = weather.name;
            this.desc.textContent = weather.weather[index].main;
            this.info.textContent = `${weather.weather[index].description}`;
            this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
            // this.icon.setAttribute('src', `../src/assets/${weather.weather[index].icon}.png`);
            this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[index].icon}.png`);
            this.pressure.textContent = `Atmospheric pressure : ${weather.main.pressure}`;
            this.weatherCoordinates.textContent = `latitude and longitude of ${this.location.innerHTML} are : ${weather.coord.lon} ${weather.coord.lat}`;
            this.wind.textContent = `Wind Speed :${weather.wind.speed}`;
        }


    }

    fillForecast(forecastData) {
        // const obj = JSON.stringify(forecastData);
        // console.log(obj);
        console.log(forecastData);
        const {
            city,
            list
        } = forecastData;
        console.log(city, list);

        const ui = new UI();
        const index = ui.randomNumber();
        const zeroIndex = ui.randomNumber(0, 0);
        this.forecast__location.textContent = city.name;
        this.forecast__desc.textContent = list[index].weather[zeroIndex].main;
        this.forecast__info.textContent = list[index].weather[zeroIndex].description;
        this.forecast_icon.setAttribute('src', `http://openweathermap.org/img/w/${list[index].weather[zeroIndex].icon}.png`);
        this.temperature_min.innerHTML = `Min Temp : ${list[index].main.temp_min} &#8451`;
        this.temperature__max.innerHTML = `Max Temp : ${list[index].main.temp_max} &#8451`;
        this.rainVolume__3h.textContent = `Atmospheric pressure on the ground level : ${list[index].main.grnd_level}`;
        this.forecast__date__time.textContent = list[index].dt_txt;

    }

    randomNumber(min = 0, max = 3) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}

export {
    UI
};