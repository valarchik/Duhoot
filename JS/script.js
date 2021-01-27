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


