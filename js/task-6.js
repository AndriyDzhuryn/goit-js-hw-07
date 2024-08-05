'use strict';

const onInputNumberContainer = document.querySelector('input');
const onBtnCreateContainer = document.querySelector('button[data-create]');
const onBtnDestroyContainer = document.querySelector('button[data-destroy]');
const onCreateNumberBoxes = document.querySelector('#boxes');

let containerIncrementStep = 20;

let arrBoxes = [];

function onBtnClickCreate() {
  onBtnClickDestroy();
  if (
    onInputNumberContainer.value >= 1 &&
    onInputNumberContainer.value <= 100
  ) {
    for (let i = 1; i <= onInputNumberContainer.value; i++) {
      containerIncrementStep += 10;

      const newBox = document.createElement('div');
      newBox.classList.add('newBox');
      newBox.style.width = `${containerIncrementStep}px`;
      newBox.style.height = `${containerIncrementStep}px`;

      newBox.style.backgroundColor = getRandomHexColor();

      arrBoxes.push(newBox);
    }
    onCreateNumberBoxes.append(...arrBoxes);
  }
  onInputNumberContainer.value = '';
}

function onBtnClickDestroy() {
  const boxesDestroy = onCreateNumberBoxes.querySelectorAll('.newBox');
  boxesDestroy.forEach(boxDestroy => boxDestroy.remove());

  arrBoxes = [];
  containerIncrementStep = 20;
}

onBtnCreateContainer.addEventListener('click', onBtnClickCreate);
onBtnDestroyContainer.addEventListener('click', onBtnClickDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
