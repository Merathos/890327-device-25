// sub-menu
const submenu_ul = document.querySelector(".sub-menu");
const catalog_link = document.querySelector('.catalog-link');

submenu_ul.classList.add('submenuToggle');

catalog_link.addEventListener('click', evt => {
  evt.preventDefault();
  submenu_ul.classList.toggle('submenuToggle');
});

// modal- write to us
const modal_div = document.querySelector(".modal");
const write_btn = document.querySelector("#write-btn");
const close_btn = modal_div.querySelector(".close-btn");
const modal_form = modal_div.querySelector(".form-letter");
const name = modal_div.querySelector("#contact-name");
const email = modal_div.querySelector("#contact-email");

write_btn.addEventListener("click", evt => {
  evt.preventDefault();
  modal_div.classList.add("modal-show");
  name.focus();
});

close_btn.addEventListener("click", () => {
  modal_div.classList.remove("modal-show");
});

modal_form.addEventListener("submit", evt => {
  if (!name.value || !email.value) {
    evt.preventDefault();
    modal_div.classList.add("modal-error");
    setTimeout(() => {
      modal_div.classList.remove("modal-error");
    }, 600);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal_div.classList.contains("modal-show")) {
      modal_div.classList.remove("modal-show");
    }
  }
});

//modal map
const map_link = document.querySelector(".map-link");
const map_div = document.querySelector(".modal-map");
const closeMap = map_div.querySelector(".close-btn");

map_link.addEventListener("click", evt => {
  evt.preventDefault();
  map_div.classList.add("modal-show");
});

closeMap.addEventListener("click", () => {
  map_div.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map_div.classList.contains("modal-show")) {
      map_div.classList.remove("modal-show");
    }
  }
});

// promo slider
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const promo1_btn = document.querySelector("#promo1");
const promo2_btn = document.querySelector("#promo2");
const promo3_btn = document.querySelector("#promo3");

promo1_btn.addEventListener("click", () => {
  slide1.classList.add('current');
  slide2.classList.remove('current');
  slide3.classList.remove('current');
  promo1_btn.classList.add("slide-active");
  promo2_btn.classList.remove("slide-active");
  promo3_btn.classList.remove("slide-active");
});

promo2_btn.addEventListener("click", () => {
  slide1.classList.remove('current');
  slide2.classList.add('current');
  slide3.classList.remove('current');
  promo1_btn.classList.remove("slide-active");
  promo2_btn.classList.add("slide-active");
  promo3_btn.classList.remove("slide-active");
});

promo3_btn.addEventListener("click", () => {
  slide1.classList.remove('current');
  slide2.classList.remove('current');
  slide3.classList.add('current');
  promo1_btn.classList.remove("slide-active");
  promo2_btn.classList.remove("slide-active");
  promo3_btn.classList.add("slide-active");
});

// services slider

const services_div = document.querySelector(".services-slides");
const services1_btn = document.querySelector("#services1_btn");
const services2_btn = document.querySelector("#services2_btn");
const services3_btn = document.querySelector("#services3_btn");

services1_btn.addEventListener("click", () => {
  services_div.style.transform = "translateX(0)";
  services1_btn.classList.add("services-btn-active");
  services2_btn.classList.remove("services-btn-active");
  services3_btn.classList.remove("services-btn-active");
});

services2_btn.addEventListener("click", () => {
  services_div.style.transform = "translateX(-876px)";
  services1_btn.classList.remove("services-btn-active");
  services2_btn.classList.add("services-btn-active");
  services3_btn.classList.remove("services-btn-active");
});

services3_btn.addEventListener("click", () => {
  services_div.style.transform = "translateX(-1752px)";
  services1_btn.classList.remove("services-btn-active");
  services2_btn.classList.remove("services-btn-active");
  services3_btn.classList.add("services-btn-active");
});
