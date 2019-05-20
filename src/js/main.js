function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const body = document.body;

function header() {
    let header = createNode('header'),
        divContainer = createNode('div');

    header.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light shadow');
    divContainer.setAttribute('class', 'container');
    append(header, divContainer);
    body.appendChild(header);
    const getHeader = document.querySelector('.container');

    getHeader.innerHTML = `
    <a class="navbar-brand" href="#">Weather Api</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <!-- <li class="nav-item active">
                <input class="form-control mr-sm-2" type="text" placeholder="Enter Your city">
            </li> -->
            <li class="nav-item active">
                <button class="btn btn-outline-success my-2 my-sm-0"  type="button" data-toggle="modal" data-target="#locationModal">Change Location</button>
            </li>
        </ul>
    </div>`;
    console.log(getHeader);
    console.log(this);
}


function main() {
    let main = createNode('main'),
        section = createNode('section'),
        row = createNode('row');

    section.setAttribute('class', 'container');
    row.setAttribute('class', 'row');
    append(section, row);
    append(main, section);
    body.append(main);
    const getMain = document.querySelector('.row');
    getMain.innerHTML = `
    <div class="col-md-4 text-center bg-custom mt-5 p-5 " id="updateCityEl">
    <form>
        <div class="form-group">
            <label for="updateCity">City Name</label>
            <input type="text" class="form-control" id="updateCity" placeholder="Enter your city Name">
        </div>
        <button id="updateCityBtn" type="submit" class="btn btn-secondary">Update City</button>
    </form>
</div>

<div class="col-md-4 mx-auto text-center bg-primary mt-5 p-5 ">
    <h1 class="text-white badge">weather data</h1>
    <h2 class="bg-light rounded-pill badge" id="weather__location"></h2>
    <h3 class="text-light" id="weather__desc"></h3>
    <h3 id="weather__info" class="text-white"></h3>
    <img id="weather__icon" src="" alt="">
    <ul class="list-group mt-3" id="weather__details">
        <li class="list-group-item" id="weather__humidity"></li>
        <li class="list-group-item" id="weather__pressure"></li>
        <li class="list-group-item" id="weather__coordinates"></li>
        <li class="list-group-item" id="weather__wind"></li>
    </ul>
    <hr>
    <button type="button" class="btn btn-info" id="" data-toggle="modal" data-target="#locationModal">
        Change Location
    </button>
</div>`;
    console.log(getMain);
}

function loadModal() {
    let modal = createNode('div');
    modal.setAttribute('class', 'modal fade');
    modal.setAttribute('id', 'locationModal');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'locationModalLabel');
    modal.setAttribute('aria-hidden', 'true;');
    body.append(modal);
    let getModal = document.querySelector('.fade');
    getModal.innerHTML = `
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="locationModalLabel">Choose Location</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="weather__form">
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" placeholder="Enter Your city name" class="form-control">
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button id="weather__Change__btn" type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>`;
    console.log(getModal);
}


const initContent = () => {
    header();
    main();
    loadModal();
};

// document.addEventListener('DOMContentLoaded',initContent );

window.onload = initContent();