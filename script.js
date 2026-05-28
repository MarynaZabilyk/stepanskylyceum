// Чекаємо, поки завантажиться вся сторінка
document.addEventListener('DOMContentLoaded', function() {
    
    // Знаходимо нашу кнопку за її ID
    const welcomeButton = document.getElementById('welcome-btn');
    
    // Додаємо подію "клік" на кнопку
    welcomeButton.addEventListener('click', function() {
        alert('Вітаємо на сайті нашого ліцею! Сторінка знаходиться в розробці. Скоро тут буде багато цікавого!');
    });

    // Також можна зробити цікавинку: при кліку на сам заголовок колір тексту трохи зміниться
    const mainTitle = document.getElementById('main-title');
    mainTitle.addEventListener('click', function() {
        mainTitle.style.background = "linear-gradient(45deg, #ff9800, #f44336)";
        mainTitle.style.webkitBackgroundClip = "text";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    // Код кнопки "Дізнатися більше" (вже був)
    const welcomeButton = document.getElementById('welcome-btn');
    if (welcomeButton) {
        welcomeButton.addEventListener('click', function() {
            alert('Вітаємо на сайті нашого ліцею! Сторінка знаходиться в розробці. Скоро тут буде багато цікавого!');
        });
    }

    // Код зміни кольору заголовку (вже був)
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
        mainTitle.addEventListener('click', function() {
            mainTitle.style.background = "linear-gradient(45deg, #ff9800, #f44336)";
            mainTitle.style.webkitBackgroundClip = "text";
        });
    }

    // НОВИЙ КОД ДЛЯ МОБІЛЬНОГО МЕНЮ
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navMenuList = document.getElementById('nav-menu-list');

    if (mobileMenuButton && navMenuList) {
        mobileMenuButton.addEventListener('click', function() {
            // Перемикаємо клас 'active' для меню (показує/ховає його)
            navMenuList.classList.toggle('active');
            // Анімація самої кнопки (три смужки перетворяться на хрестик)
            mobileMenuButton.classList.toggle('is-active');
        });
    }
});