
//dropdown-country

let dropDownCountry = document.querySelector(".drop-button-country"),
    selectCountry = $('.dropdown-country'),
    countryItems = document.querySelectorAll('.country'),
    selectedCountry = $('.selected-country');

    dropDownCountry.addEventListener('click', function(e) {
        e.preventDefault();
        toggleVisibility(selectCountry);
    });
        changeText(countryItems,selectedCountry);

//dropdown-action

let dropDownAction = document.querySelector(".drop-button-action"),
    selectAction = $('.dropdown-action'),
    actionItems = document.querySelectorAll('.action'),
    selectedAction = $('.selected-action');

    dropDownAction.addEventListener('click', function (e) {
        e.preventDefault();
        toggleVisibility(selectAction);
    });
        changeText(actionItems,selectedAction);

//dropdown-place

let dropDownPlace = document.querySelector(".drop-button-place"),
    selectPlace = $('.dropdown-place'),
    placeItems = document.querySelectorAll('.place'),
    selectedPlace = $('.selected-place');

    dropDownPlace.addEventListener('click', function (e) {
        e.preventDefault();
        toggleVisibility(selectPlace);
    });
        changeText(placeItems,selectedPlace);


function toggleVisibility(element){
    if (!element.is(':visible')) {
        element.css('display', 'block');
    } else {
        element.css('display', 'none');
    }
};

function changeText(items,item){
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            let valueCountry = $(items[i]).html();
            item.text(valueCountry);
        });
    };
};