//header

let search = $('#search');
let searchInput = $('#site-search');
let searchIcon = document.querySelector(".search-icon");
let searchIconQuery = $('.search-icon')

searchIcon.addEventListener('click', function () {
    if (!search.is(":visible") && !searchInput.is(":visible")) {
        search.animate({width: "450px"}, 1000);
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

let dropDown = document.querySelector(".dropdown-wr-country"),
    select = $('.dropdown-country'),
    countryItem = document.querySelectorAll('.country'),
    selectedCountry = $('.selected-country');

let dropDownAction = document.querySelector(".dropdown-wr-action"),
    selectAction = $('.dropdown-action'),
    countryItemAction = document.querySelectorAll('.action'),
    selectedCountryAction = $('.selected-action');


dropDown.addEventListener('click', function () {
    if (!select.is(':visible')) {
        select.css('display', 'block');
    } else {
        select.css('display', 'none');
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

for (let i = 0; i < countryItemAction.length; i++) {
    countryItemAction[i].addEventListener('click', function (e) {
        let valueCountryAction = $(countryItemAction[i]).html();
        selectedCountryAction.text(valueCountryAction);
    });
}




