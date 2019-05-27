// Init Weather, UI, Storage Object
import {
    onWindowLoad
} from "./main.js";
import Storage from './storage.js';
import {
    UI
} from './ui.js';
import {
    Weather
} from './weather.js';

onWindowLoad();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const ui = new UI();
const weather = new Weather(weatherLocation.city);

// console.log(weather.getWeather('england').then(data =>
//     ui.initUI(data)
//     // data => console.log(data)
// )
// .catch(error => alert(`Error`)));



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
            ui.initUI(data)}
            // data => console.log(data)
        )
        .catch(error => alert(`City not found`));
};