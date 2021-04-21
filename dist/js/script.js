// Создаем переменные, через которые будет что-то просиходить:

const hamburger = document.querySelector('.hamburger'),
	    menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        overlay = document.querySelector('.menu__overlay');

// Мы берем гамбургер и с помощью addEventListener u говорим странице, что мы отслеживаем все клики по гамбургеру, и выполняем функцию. Функция заключается во взятии меню и с помощью classList.add, добавляем menu класс active.

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

// Мы берем наш крестик/оверлэй/клавишу ESC и с помощью addEventListener говорим странице, что мы отслеживаем все клики по этим "объектам", и выполняем функцию. Функция заключается во взятии меню и с помощью classList.remove, убираем у menu класс active.

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active')
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
                menu.classList.remove('active');
    }
});