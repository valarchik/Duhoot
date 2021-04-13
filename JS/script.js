"use strict";

//header search

let search = $('#search');
let searchInput = $('#site-search');
let searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener('click', function () {

    if (!search.is(":visible") && !searchInput.is(":visible")) {

        if(window.matchMedia('(max-width: 690px)').matches){

            search.animate({width: "350px"}, 1000)

            }else if (window.matchMedia('(max-width: 845px)').matches) {
            search.animate({width: "300px"}, 1000)

            }else if (window.matchMedia('(max-width: 880px)').matches) {
            ;search.animate({width: "400px"}, 1000)

            }else {
            search.animate({width: "450px"}, 1000);
            };

        search.css('display', 'block');
        searchInput.css('display', 'block');
    };
});

$(document).mouseup(function (e) {

    if (!search.is(e.target) && search.is(":visible")
        && !searchInput.is(e.target)) {

        search.animate({width: "0px"}, 500);
        setTimeout(function () {
            search.css('display', 'none');
            searchInput.css('display', 'none');
        }, 480);
    }
});

//login-form

let formLogin = $('.overlay');
let buttonLogin = document.querySelector(".login");
let closeButton = document.querySelector(".close-button");

buttonLogin.addEventListener('click', function () {
    formLogin.css('display', 'flex');
});

closeButton.addEventListener('click', function () {
    if (formLogin.is(':visible')) {
        formLogin.css('display', 'none');
    }
});

//filter-block

let mapButton =  document.querySelector(".map-toggle");

mapButton.addEventListener('click',function () {
    if (mapButton.dataset.status === "hide") {
        mapButton.dataset.status = "show";
    } else {
        mapButton.dataset.status = "hide";
    }
});

// feature-block

$("#tabs").tabs();

// nav-bar

function toggleClass() {
    document.getElementById("drop-nav").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-icon')) {

        var dropdowns = document.getElementsByClassName("drop-nav-content");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// set preventDefault

let buttons = document.querySelectorAll('button');
let links = document.querySelectorAll('a');

setPreventDefault(buttons);
setPreventDefault(links);

function setPreventDefault( collection){
    for( let item of collection){
        item.addEventListener('click',function (e) {
            e.preventDefault();
        });
    };
};







