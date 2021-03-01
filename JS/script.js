//header

let search = $('#search');
let searchInput = $('#site-search');
let searchIcon = document.querySelector(".search-icon");
let searchIconQuery = $('.search-icon')

searchIcon.addEventListener('click', function () {
    if (!search.is(":visible") && !searchInput.is(":visible")) {
        if(window.matchMedia('(max-width: 913px)').matches){
            search.animate({width: "400px"}, 1000);
            }else if(window.matchMedia('(max-width: 913px)').matches){

        }
        else{
            search.animate({width: "450px"}, 1000);
        };
        search.css('display', 'block');
        searchInput.css('display', 'block');
    }
});

$(document).mouseup(function (e) { // событие клика по веб-документу

    if (!searchIconQuery.is(e.target) // если клик был не по нашему блоку
        && searchIconQuery.has(e.target).length === 0 && search.is(":visible")
        && searchInput.is(":visible") && !searchInput.is(e.target)) { // и не по его дочерним элементам и инпуту

        search.animate({width: "0px"}, 500);// скрываем его
        setTimeout(function () {
            search.css('display', 'none');
            searchInput.css('display', 'none');
        }, 480);
    }
});

//login-form

let buttonLogin = document.querySelector(".login");
let formLogin = $('.overlay');
let closeButton = document.querySelector(".close-button");

buttonLogin.addEventListener('click', function () {
    formLogin.css('display', 'flex');
});

closeButton.addEventListener('click', function () {
    if (formLogin.is(':visible')) {
        formLogin.css('display', 'none');
    }
});

//search-form

let dropDownCountry = document.querySelector(".dropdown-wr-country"),
    selectCountry = $('.dropdown-country'),
    countryItem = document.querySelectorAll('.country'),
    selectedCountry = $('.selected-country');

let dropDownAction = document.querySelector(".dropdown-wr-action"),
    selectAction = $('.dropdown-action'),
    actionItem = document.querySelectorAll('.action'),
    selectedAction = $('.selected-action');

let dropDownPlace = document.querySelector(".dropdown-wr-place"),
    selectPlace = $('.dropdown-place'),
    placeItem = document.querySelectorAll('.place'),
    selectedPlace = $('.selected-place');


dropDownCountry.addEventListener('click', function () {
    if (!selectCountry.is(':visible')) {
        selectCountry.css('display', 'block');
    } else {
        selectCountry.css('display', 'none');
    }
});

for (let i = 0; i < countryItem.length; i++) {
    countryItem[i].addEventListener('click', function (e) {
        let valueCountry = $(countryItem[i]).html();
        selectedCountry.text(valueCountry);
    });
}

dropDownAction.addEventListener('click', function () {
    if (!selectAction.is(':visible')) {
        selectAction.css('display', 'block');
    } else {
        selectAction.css('display', 'none');
    }
});

for (let i = 0; i < actionItem.length; i++) {
    actionItem[i].addEventListener('click', function (e) {
        let valueCountryAction = $(actionItem[i]).html();
        selectedAction.text(valueCountryAction);
    });
}

dropDownPlace.addEventListener('click', function () {
    if (!selectPlace.is(':visible')) {
        selectPlace.css('display', 'block');
    } else {
        selectPlace.css('display', 'none');
    }
});

for (let i = 0; i < placeItem.length; i++) {
    placeItem[i].addEventListener('click', function (e) {
        let valueCountryPlace = $(placeItem[i]).html();
        selectedPlace.text(valueCountryPlace);
    });
}

//main

//filter-block

let mapButton =  document.querySelector(".map-toggle");

mapButton.addEventListener('click',function () {

    if (mapButton.classList.contains('hide')) {
        mapButton.classList.remove('hide');
        mapButton.classList.add('show');
        mapButton.textContent="hide map";
    } else {
        mapButton.classList.remove('show');
        mapButton.classList.add('hide');
        mapButton.textContent="show map";
    }
});

// feature-block

$("#tabs").tabs();

// nav-bar

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("drop-nav").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-icon')) {

        var dropdowns = document.getElementsByClassName("drop-nav-content");

        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}






