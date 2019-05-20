class Storage {
    constructor() {
        this.city;
        this.defaultCity = 'Guntur';
    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
            alert(this.city);
        } else {
            this.city = localStorage.getItem('city');
            console.log(this.city);

        }

        return {
            city: this.city
        };
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}