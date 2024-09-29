document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({behavior: 'smooth'});
        }
    });
});


const modal = document.getElementById("modal");
const btns = document.querySelectorAll(".modal-btn");
const span = document.querySelector(".close");

// Для каждой кнопки "Посмотреть", открываем модальное окно
btns.forEach(btn => {
    btn.addEventListener("click", function () {
        modal.style.display = "block";
    });
});

// Закрытие модального окна по крестику
span.onclick = function () {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его содержимого
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Получаем элементы для кнопок "Читать"
const readModal = document.getElementById("readModal");
const readBtns = document.querySelectorAll(".read-btn");
const readClose = readModal.querySelector(".close");

// Для каждой кнопки "Читать", открываем модальное окно для чтения
readBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        readModal.style.display = "block";
    });
});

// Закрытие модального окна для чтения по крестику
readClose.onclick = function () {
    readModal.style.display = "none";
}

// Закрываем модальное окно для чтения при клике вне его содержимого
window.addEventListener("click", function (event) {
    if (event.target == readModal) {
        readModal.style.display = "none";
    }
});