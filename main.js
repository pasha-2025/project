// Получаем элементы бургер-меню и навигационное меню
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

// Обработчик клика на бургер-иконку
burgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active'); // Переключаем класс active для меню
});

// Обработчик клика на экран для закрытия меню
document.addEventListener('click', function(event) {
    // Проверяем, был ли клик вне меню и бургер-иконки
    if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        navMenu.classList.remove('active'); // Закрываем меню
    }
});
