// Init Weather, UI, Storage Object

console.log('veera');
const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);
const ui = new UI();

const updateCityBtn = document.getElementById('updateCityBtn');

updateCityBtn.addEventListener('click', event => {
    event.preventDefault();
    const updateCity = document.getElementById('updateCity').value;
    weather.changeLocation(updateCity);
    // weather.changeLocation('india');
    storage.setLocationData(updateCity);
    getWeather();
    clearInput(document.getElementById('updateCity'));
});

const clearInput = (e) => {
    e.value = '';
};

document.addEventListener('DOMContentLoaded', getWeather);


document.getElementById('weather__Change__btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);

    storage.setLocationData(city);
    getWeather();
    $('#locationModal').modal('hide');
})

function getWeather() {
    weather.getWeather()
        .then(data =>
            ui.initUI(data)
            // data => console.log(data)
        )
        .catch(error => alert(`Enter a valid city name`));
}