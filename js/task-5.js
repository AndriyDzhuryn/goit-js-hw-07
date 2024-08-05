'use strict';

const onBtnChangeColor = document.querySelector('.change-color');
const onBodyChangeColor = document.querySelector('body');
const onTextColorCode = document.querySelector('.color');

const onBtnClick = () => {
  onBodyChangeColor.style.backgroundColor = getRandomHexColor();
  onTextColorCode.textContent = getRandomHexColor();
};

onBtnChangeColor.addEventListener('click', onBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
