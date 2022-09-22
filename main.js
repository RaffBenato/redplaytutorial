"use strict";

const burgerMenuEl = document.querySelector(`.burger-menu`);
const menuEl = document.querySelector(`.menu`);
const menuItemEl = document.querySelectorAll(`.menu-item`);
const burgerCrossEl = document.querySelector(`.burger-cross`);

burgerMenuEl.addEventListener("click", () => {
  menuEl.classList.toggle(`open`);
  burgerCrossEl.classList.toggle(`open`);
  burgerMenuEl.classList.toggle(`open`);
});

burgerCrossEl.addEventListener("click", () => {
  menuEl.classList.toggle(`open`);
  burgerCrossEl.classList.toggle(`open`);
  burgerMenuEl.classList.toggle(`open`);
});

for (let i = 0; i < menuItemEl.length; i++) {
  menuItemEl[i].addEventListener("click", () => {
    menuEl.classList.remove(`open`);
    burgerCrossEl.classList.toggle(`open`);
    burgerMenuEl.classList.toggle(`open`);
  });
}
