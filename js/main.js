/===========Модальное окно===========/

var popupBtnOpen = document.querySelector(".btn-feed-back");
var popup = document.querySelector(".feed-back-popup");
var overlay = document.querySelector(".feed-back-overlay");
var popupBtnClose = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var popupNameCustomer = popup.querySelector("[name=name]");
var popupInputEmail = popup.querySelector("[name= email-feed-back]");
var popupInputMsg = popup.querySelector('textarea');
var keys = {
    'Tab': 9,
    'Esc': 27
};

popupBtnOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feed-back-show");
    overlay.classList.add("overlay-show");
    popupNameCustomer.focus();
});

popupBtnClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feed-back-show");
    overlay.classList.remove("overlay-show");
    popup.classList.remove("feed-back-error");
});

form.addEventListener("submit", function (evt) {
    if (!popupNameCustomer.value || !popupInputEmail.value || !popupInputMsg.value) {
        evt.preventDefault();
        popup.classList.remove("feed-back-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feed-back-error");
        console.log("Нужно заполнить поля формы");
    } else {
        form.submit();
    }
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("feed-back-show")) {
            popup.classList.remove("feed-back-show");
            overlay.classList.remove("feed-back-show");
            popup.classList.remove("feed-back-error");
        }
    }
});
