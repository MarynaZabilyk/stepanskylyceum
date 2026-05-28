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