// Сокраащение функции до одного слова
var buybutton = document.getElementById('buy');
var raiting = document.getElementById('raiting');
var tovar1 = document.getElementById('tovar1');
var katalog = document.getElementById('katalog');
var otzav = document.getElementById('otzav');
var trash = document.getElementById('trash');
var bag = document.getElementById('bag');

// ПРИДАНИЕ СВОЙСТ ОБЪЕКТАМ

// Увелечени карточки при наведении курсора
tovar1.onmouseover = function() {
    tovar1.style.width = "262px"
    tovar1.style.height = "519px"
    buybutton.style.height = "60px"
    buybutton.style.width = "262px"
    bag.style.width = "50px"
    bag.style.height = "50px"
    bag.style.color = "#aebd38"
}
tovar1.onmouseout = function() {
    tovar1.style.width = "250px"
    tovar1.style.height = "495px"
    buybutton.style.height = "50px"
    buybutton.style.width = "230px"
    bag.style.width = "40px"
    bag.style.height = "40px"
    bag.style.color = "#000000"
}