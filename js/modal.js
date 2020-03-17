var link = document.querySelector(".footer-map__button");
var popup = document.querySelector(".writeus-popup");
var close = document.querySelector(".writeus-popup__close");
var form = popup.querySelector(".writeus-popup__form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

link.addEventListener("click", function (evt) 
{
  evt.preventDefault();
  popup.classList.add("modal-show");
}); 


close.addEventListener("click", function (evt) 
{
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});


window.addEventListener("keydown", function (evt) 
{
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) 
      {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
});

form.addEventListener("submit", function (evt) 
{
    if (!name.value || !email.value || !text.value) 
    {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
});