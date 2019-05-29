// Init Weather, UI, Storage Object
import { initializeView } from "../views/mainView.js";
import Storage from './storage.js';
import { UI } from '../views/fillMainView.js';
import { Weather } from './weather.js';


initializeView();

const storage = new Storage();
const weatherLocation = storage.getLocationData();
const ui = new UI();
const weather = new Weather(weatherLocation.city);

const updateCityBtn = document.getElementById('updateCityBtn');
console.log(updateCityBtn);
updateCityBtn.addEventListener('click', event => {
    event.preventDefault();
    const updateCity = document.getElementById('updateCity').value;

    if (updateCity !== '' && updateCity.length > 3) {
        weather.changeLocation(updateCity);
        storage.setLocationData(updateCity);
        getWeather();
        clearInput(document.getElementById('updateCity'));
    } else {
        alert('Enter a valid city');
    }

});

const clearInput = (e) => {
    e.value = '';
};

// document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('weather__Change__btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    if (city !== '' && city.length > 0) {

        weather.changeLocation(city);
        storage.setLocationData(city);
        getWeather();
        clearInput(document.getElementById('city'));
        $('#locationModal').modal('hide');
    } else {
        alert('Enter a valids city');
    }
});

const getWeather = () => {
    weather.getWeather()
        .then(data => {
            console.log(data);
            ui.initUI(data);
        })
        .catch(error => alert(`City not found`));
    weather.getHourlyForecast()
        .then(data => {
            console.log(data);
            const { city, list} = data;
            ui.fillForecast({city, list});
        })
        .catch(error => alert(`Citys not found`));
};

getWeather();
// console.log(getWeather());